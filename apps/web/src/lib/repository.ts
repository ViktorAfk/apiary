export const Api = {
  getAll: async <T>(url: string): Promise<T> => {
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
  },

  getOne: async <T>(url: string): Promise<T> => {
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
  },

  post: async <T>(url: string, params: BodyInit): Promise<T> => {
    try {
      const response = await fetch(`${url}`, {
        method: 'POST',
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
  },

  update: async <T>(url: string, params: BodyInit): Promise<T> => {
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
  },

  remove: async <T>(url: string): Promise<T> => {
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
  },
};
