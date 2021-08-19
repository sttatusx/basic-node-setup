const environment = {
  port: process.env.PORT || 8000,
  mode: process.env.NODE_ENV || "develompent",

  databaseUrl: process.env.DATABASE_URL || "",

  jwtSecret: process.env.JTW_SECRET || "",
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "",
};

export default environment;
