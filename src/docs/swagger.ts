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
    },
  },
};

swaggerAutogen({
  openapi: "3.0.0",
})(OutputFile, endpointsFiles, doc);
