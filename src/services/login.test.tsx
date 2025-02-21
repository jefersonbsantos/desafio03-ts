import { api } from "../api";
import { login } from "./login";

describe("Testando o serviço de login", () => {
  const mockEmail = "nath@test.com";
  const mockPassword = "123456";

  beforeAll(async () => {
    await api.post("/login", {
      email: mockEmail,
      password: mockPassword,
    });
  });

  it("Deve retornar true para credenciais válidas", async () => {
    const result = await login(mockEmail, mockPassword);
    expect(result).toBeTruthy();
  });

  it("Deve retornar false para email inválido", async () => {
    const result = await login("email@invalido.com", mockPassword);
    expect(result).toBeFalsy();
  });

  it("Deve retornar false para senha inválida", async () => {
    const result = await login(mockEmail, "senhaerrada");
    expect(result).toBeFalsy();
  });
});
