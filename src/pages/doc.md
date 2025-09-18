**Api Fetch Hooks** is an **npm package** for React web applications that provides custom hooks to simplify API requests using **HTTP** methods like GET, POST, PUT, DELETE, and PATCH. Developed with TypeScript and zero external dependencies, it manages loading, error, response, and status states automatically, and even supports canceling ongoing requests. Ideal for modern web projects needing clean, maintainable code and predictable data fetching.

<span class='flex gap-[5px]'>Visit <a
    href="https://www.npmjs.com/package/api-fetch-hooks"
    target="\_blank"
    class="flex  text-secondary w-fit">api-fetch-hooks on npm
</a>
</span>

## Installation

To install the **api-fetch-hooks** library, simply run the following command:

```
npm install api-fetch-hooks
```

This will add the library to your project, allowing you to use the available hooks for making API requests.

## Available Hooks

The following hooks are available for making API requests:

- **useApiGet**: For making **GET** requests.
- **useApiPost**: For making **POST** requests.
- **useApiPut**: For making **PUT** requests.
- **useApiDelete**: For making **DELETE** requests.
- **useApiPatch**: For making **PATCH** requests.
- **useQueryGet**: For making **GET** requests.

### Importing the Hooks

You can import the hooks from the **api-fetch-hooks** package as follows:

```javascript
import {
  useApiGet,
  useApiPost,
  useApiPut,
  useApiDelete,
  useApiPatch,
} from "api-fetch-hooks";
```

## Usage of the Hooks

### 1 - useApiGet

The useApiGet hook is used to make GET requests to an API.

**Parameters**

- **IResponse** (generic): The expected type of the successful response. By default, it is never, meaning no response is expected.
- **IErrorResponse** (generic): The type of the error response. By default, it is never.

**Returns**

- **fetchGet**: A function to make the GET request. It receives an object with the following parameters:
  - **url**: The URL of the API endpoint.
  - **init**: Optional. Additional configuration for the request (like headers).
- **handleCancelRequest**: A function to cancel the ongoing request.
- **response**: The successful response from the API, of type IResponse (if defined).
- **loading**: A boolean state indicating whether the request is in progress.
- **error**: Error information if the request fails, of type IErrorResponse.
- **status**: The HTTP status code from the response.

#### Example Usage

**Basic GET Request**

```javascript
import { useApiGet } from "api-fetch-hooks";

const MyComponent = () => {
  const { fetchGet, loading, response, error } =
    useApiGet();

  const handleRequest = () => {
    fetchGet({ url: "/api/data" });
  };

  return (
    <div>
      <button onClick={handleRequest}>Load Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && <p>Data: {JSON.stringify(response)}</p>}
    </div>
  );
};
```

**GET Request with additional configuration**

You can use the **init** property to pass a custom header, such as an authorization token, with the request.

```javascript
import { useApiGet } from "api-fetch-hooks";

const MyComponent = () => {
  const { fetchGet, loading, response, error } =
    useApiGet();

  const handleRequest = () => {
    const token = "your-bearer-token"; // Replace with the actual token

    fetchGet({
      url: "/api/protected-data",
      init: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  };

  return (
    <div>
      <button onClick={handleRequest}>Load Protected Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && <p>Data: {JSON.stringify(response)}</p>}
    </div>
  );
};
```

In this example:

- A **GET** request is made to the **/api/protected-data** endpoint.
- The **Authorization** header is included in the request using the **init** property, with the value **Bearer your-bearer-token**.
- The response, loading state, error, and status are managed and displayed accordingly.

### 2 - useApiPost

The **useApiPost** hook is used to make **POST** requests, sending data to the server.

**Parameters**

- **IBody** (generic): The type of the body of the request. By default, it is **unknown**, meaning it can be any type of data.
- **IResponse** (generic): The expected type of the successful response.
- **IErrorResponse** (generic): The type of the error response.

**Returns**

- **fetchPost**: A function to make the **POST** request. It receives an object with the following parameters:
  - **url**: The URL of the API endpoint.
  - **init**: Optional. Additional configuration for the request.
  - **body**: The body of the request to be sent to the server.
  - **handleCancelRequest**: A function to cancel the ongoing request.
- **response**: The successful response from the API.
- **loading**: A boolean state indicating whether the request is in progress.
- **error**: Error information if the request fails.
- **status**: The HTTP status code from the response.

#### Example Usage

```javascript
import { useApiGet } from "api-fetch-hooks";

const MyComponent = () => {
  const { fetchPost, loading, response, error } =
    useApiPost();

  const handleRequest = () => {
    fetchPost({
      url: "/api/submit",
      body: { name: "John", age: 30 },
    });
  };

  return (
    <div>
      <button onClick={handleRequest}>Submit Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && <p>Response: {JSON.stringify(response)}</p>}
    </div>
  );
};
```

### 3 - useApiPut, useApiDelete, and useApiPatch

The **useApiPut**, **useApiDelete**, and **useApiPatch** hooks function in the same way as **useApiPost**, but are used for the **PUT**, **DELETE**, and **PATCH** HTTP methods, respectively.

- They accept the same parameters as **useApiPost** (url, body, optional configuration).
- The **fetchPut**, **fetchDelete**, and **fetchPatch** functions behave similarly to **fetchPost**, handling the corresponding HTTP method.
- These hooks allow you to manage the request lifecycle (loading, response, error, status) and include a **handleCancelRequest** function to abort requests if needed.

## Using types

### Understanding the Generics

Each of the hooks (**useApiGet**, **useApiPost**, **useApiPut**, **useApiDelete**, **useApiPatch**) is generic, which means they can be customized to handle different types of responses and request bodies. The goal of generics is to allow you to specify what kind of data you expect when interacting with the API, so you can take full advantage of TypeScript´s type checking and autocompletion features.

Let´s break down the typing for these hooks:

### 1 - useApiGet Hook

The **useApiGet** hook allows you to make a **GET** request to an API url. You can define what kind of response and error you're expecting, and TypeScript will make sure everything is typed correctly.

**Generics:**

- **IResponse**: This is the type of the data you expect to receive in the response. For example, if you are fetching a list of users, you would define a **User** type.
- **IErrorResponse**: This is the type of the error that you might receive. This could be useful if your API returns a specific error structure.

**Example:**

```javascript
import { useApiGet } from 'api-fetch-hooks';

// Defining the expected types for the response and error
interface User {
  id: number;
  name: string;
}

interface ErrorResponse {
  message: string;
}

const MyComponent = () => {
  // Here, we are specifying that the response is a User and the error is an ErrorResponse
  const { fetchGet, loading, response, error } = useApiGet<User, ErrorResponse>();

  const handleRequest = () => {
    fetchGet({ url: '/api/users' });
  };

  return (
    <div>
      <button onClick={handleRequest}>Load Users</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <p>User: {response.name}</p>}
    </div>
  );
};
```

- **useApiGet<User, ErrorResponse>()**: By passing **User** as the first generic type, you tell TypeScript that the API will return data of type **User**. Similarly, the second generic **ErrorResponse** tells TypeScript the type of the error data.

### 2 - useApiPost Hook

The **useApiPost** hook allows you to make a **POST** request, which typically involves sending data to the server. Like **GET**, you can define the types for both the request body and the response.

**Generics:**

- **IBody:** The type of the body content that you will send in the request (for example, user data when creating a new user).
- **IResponse:** The type of the response you expect from the API.
- **IErrorResponse:** The type of error that may occur.

```javascript
import { useApiGet } from 'api-fetch-hooks';

// Defining the expected types for request body and response
interface NewUser {
  name: string;
  email: string;
}

interface ApiResponse {
  success: boolean;
  id: number;
}

interface ErrorResponse {
  message: string;
}

const MyComponent = () => {
  const { fetchPost, loading, response, error } = useApiPost<NewUser, ApiResponse, ErrorResponse>();

  const handleRequest = () => {
    const newUser: NewUser = { name: 'John Doe', email: 'john@example.com' };
    fetchPost({ url: '/api/users', body: newUser });
  };

  return (
    <div>
      <button onClick={handleRequest}>Create User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <p>Response: {JSON.stringify(response)}</p>}
    </div>
  );
};
```

- **useApiPost<NewUser, ApiResponse, ErrorResponse>()**:

  - **NewUser** is the type of data you are sending in the **POST** request (in this case, user data).
  - **ApiResponse** is the type of the successful response (e.g., an object with **success** and **id**).
  - **ErrorResponse** is the type for errors returned from the API.

### 3 - useApiPut, useApiDelete, and useApiPatch Hook

The **useApiPut**, **useApiDelete**, and **useApiPatch** hooks work similarly to **POST**, but they correspond to the HTTP methods **PUT**, **DELETE**, and **PATCH** respectively. You will need to specify:

- **IBody**: The type of the request body (the data you want to update or delete).
- **IResponse**: The type of the successful response.
- **IErrorResponse**: The type of any error response.

### 4 - useQueryGet Hook

The **useQueryGet** hook allows you to make a **GET** request to an API url. You can define what kind of response and error you're expecting, and TypeScript will make sure everything is typed correctly.

**Generics:**

- **IResponse**: This is the type of the data you expect to receive in the response. For example, if you are fetching a list of users, you would define a **User** type.
- **IErrorResponse**: This is the type of the error that you might receive. This could be useful if your API returns a specific error structure.

**Example:**

```javascript
import { useApiGet } from 'api-fetch-hooks';

// Defining the expected types for the response and error
interface User {
  id: number;
  name: string;
}

interface ErrorResponse {
  message: string;
}

const MyComponent = () => {
  const token = 'your-bearer-token'; // Replace with the actual token

  // Here, we are specifying that the response is a User and the error is an ErrorResponse
  const { loading, response, error } = useQueryGet<User, ErrorResponse>({
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    init: {
      headers: { Authorization: `Bearer ${token}` },
    },
  });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <p>User: {response.name}</p>}
    </div>
  );
};
```

- **useQueryGet<User, ErrorResponse>()**: By passing **User** as the first generic type, you tell TypeScript that the API will return data of type **User**. Similarly, the second generic **ErrorResponse** tells TypeScript the type of the error data.
