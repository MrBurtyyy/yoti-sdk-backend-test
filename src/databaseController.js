const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(
  "./hoover.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the hoover database.");
  }
);

const initialiseDatabase = () => {
  try {
    db = new sqlite3.Database(
      "./hoover.db",
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      err => {
        if (err) {
          console.error(err.message);
        }
        console.log("Connected to the hoover database.");
      }
    );
  } catch (err) {
    throw err;
  }
};

const ensureTableExists = (tableName, tableCreateCommand) => {
  const findTableSqlCommand = `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`;
  console.log(findTableSqlCommand);
  db.get(findTableSqlCommand, (err, row) => {
    if (!row) {
      console.log(
        `Table ${tableName} does not exist, running create command...`
      );
    }
  });
};

module.exports = {
  initialiseDatabase,
  ensureTableExists
};
