import swaggerAutogen from "swagger-autogen";

const OutputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];
const doc = {
  info: {
    version: "1.0.0",
    title: "Dokumentasi API Acara",
    description: "Dokumentasi API Acara",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://back-end-acara-taupe-one.vercel.app/api",
      description: "Deploy Server",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "hongaja",
        password: "hong123",
      },

      RegisterRequest: {
        fullName: "Hongaja",
        username: "hong2024",
        email: "hong2024@yopmail.com",
        password: "1234512345",
        confirmPassword: "1234512345",
      },

      ActivationRequest: {
        code: "abcdefg",
      },
    },
  },
};

swaggerAutogen({
  openapi: "3.0.0",
})(OutputFile, endpointsFiles, doc);
