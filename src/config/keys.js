module.exports = {
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    url() {
      return `mongodb+srv://${this.username}:${this.password}@${this.host}/${this.name}?retryWrites=true&w=majority`;
    },
  },
};
