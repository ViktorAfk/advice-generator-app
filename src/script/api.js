const API_URL=import.meta.env.VITE_ADVICE_API_URL;

class Api {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get() {
    try {
      const response = await fetch(`${this.baseURL}`);
      const data = await response.json()
      console.log(data)
      return data;

    } catch (error) {
      console.error(`Failed to load: ${error}`)
      throw new Error();
    }
  }
}

export const $api = new Api(API_URL);