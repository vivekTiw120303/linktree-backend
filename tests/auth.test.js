const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");
const User = require("../src/models/User");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // ✅ Ensure test database is clean before running tests
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth API", () => {
  let testUser = { username: "testuser", email: "test@example.com", password: "Test@1234" };

  it("should register a user", async () => {
    const res = await request(app).post("/api/auth/register").send(testUser);
    expect(res.statusCode).toBe(201);
  });

  it("should login a user", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("should send a password reset email", async () => {
    const res = await request(app).post("/api/auth/forgot-password").send({ email: testUser.email });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Password reset link sent to email");
  });
});
