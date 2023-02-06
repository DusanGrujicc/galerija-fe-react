import ApiService from "./ApiService";

class AuthService extends ApiService {
  async login(data) {
    const response = await this.client.post("/auth/login", data);
    this.setLoginTokenAndredirectToAuthPage(response);

    return response;
  }

  async logout() {
    await this.client.post("/auth/logout", {}, { headers: this.getHeaders() });
    window.localStorage.removeItem("loginToken");
    window.location.replace("/login");
  }

  async register(data) {
    const response = await this.client.post("/auth/register", data);
    this.setLoginTokenAndredirectToAuthPage(response);

    return response;
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${window.localStorage.getItem("loginToken")}`,
    };
  }

  setLoginTokenAndredirectToAuthPage(response) {
    window.localStorage.setItem(
      "loginToken",
      response.data.original.access_token
    );
    // window.location.replace("/movies");
  }
}

export const authService = new AuthService();
