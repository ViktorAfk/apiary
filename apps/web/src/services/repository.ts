export class Api {
  async getAll<T>(url: string): Promise<T> {
    try {
      const response = await fetch(`${url}`);

      if (response.status === 404) {
        throw new Error('404, Not found');
      }

      if (response.status === 500) {
        throw new Error('500, internal server error');
      }

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch', error);
      throw new Error();
    }
  }

  async getOne<T>(url: string): Promise<T> {
    try {
      const response = await fetch(`${url}`);

      if (response.status === 404) {
        throw new Error('404, Not found');
      }

      if (response.status === 500) {
        throw new Error('500, internal server error');
      }

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch', error);
      throw new Error();
    }
  }

  async post<T, P>(url: string, params: P): Promise<T> {
    try {
      const response = await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(params),
      });

      if (response.status === 404) {
        throw new Error('404, Not found');
      }

      if (response.status === 500) {
        throw new Error('500, internal server error');
      }

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch', error);
      throw new Error();
    }
  }

  async update<T>(url: string, params: BodyInit): Promise<T> {
    try {
      const response = await fetch(`${url}`, {
        method: 'PATCH',
        body: params,
      });

      if (response.status === 404) {
        throw new Error('404, Not found');
      }

      if (response.status === 500) {
        throw new Error('500, internal server error');
      }

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch', error);
      throw new Error();
    }
  }

  async remove<T>(url: string): Promise<T> {
    try {
      const response = await fetch(`${url}`);

      if (response.status === 404) {
        throw new Error('404, Not found');
      }

      if (response.status === 500) {
        throw new Error('500, internal server error');
      }

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch', error);
      throw new Error();
    }
  }
}

export const $api = new Api();
