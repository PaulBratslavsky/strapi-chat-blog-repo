class SessionManager {
  constructor() {
    this.sessions = {}; // Initializes an empty object to store sessions
  }

  async saveSession(sessionId, langchain, initialPrompt) {
    // Saves a session with the provided sessionId, language chain, and initial prompt
    this.sessions[sessionId] = {
      chain: langchain,
      initialPrompt: initialPrompt
    };
  }

  async getSession(sessionId) {
    // Retrieves a session with the given sessionId
    return this.sessions[sessionId];
  }

  async getHistory(sessionId) {
    // Retrieves the chat history of a session with the given sessionId
    if (!this.sessions[sessionId]) {
      throw new Error('Session not found');
    }
    return this.sessions[sessionId].chain.memory.chatHistory;
  }

  async clearSessionById(sessionId) {
    // Clears a session with the provided sessionId
    delete this.sessions[sessionId];
  }

  async clearAllSessions() {
    // Clears all sessions stored in the SessionManager
    this.sessions = {};
  }

  async showAllSessions() {
    // Retrieves and logs the sessionIds of all stored sessions
    const sessionIds = Object.keys(this.sessions);
    const sessions = [];
    for (const sessionId of sessionIds) {
      sessions.push(sessionId);
      console.log("Sessions: ", sessionId);
    }
    return sessions;
  }
}

module.exports = new SessionManager(); // Exports an instance of the SessionManager class
