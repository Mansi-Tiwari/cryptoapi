# Crypto API
Crypto Currency api 

This API provides information about cryptocurrencies.

## Table of Contents

- [Getting Started](#getting-started)
- - [API Usage](#api-usage)
- [Features](#features)
- [Fetch all](#fetch-all)
- [Search](#search)
- [Pagination](#pagination)
- [Development](#development)
- [Feedback and Support](#feedback-and-support)
- [License](#license)

## Getting Started

To get started with the Crypto API, you can follow the instructions provided in the [API Usage](#api-usage) section of the README. It explains how to make requests to the API and provides example code snippets.


## API Usage

To use this API, you can send HTTP requests to the provided endpoints using your preferred programming language or tool. Here's an example code snippet using JavaScript and the `fetch` function:

```javascript
fetch('https://sore-gold-chimpanzee-yoke.cyclic.app/crypto/api/id/1')
  .then(res => res.json())
  .then(json => console.log(json));
```

```The response will be in the following format:
{
  "id": 1,
  "name": "0xBitcoin",
  "symbol": "0xbtc",
  "Image_Url": "https://i.postimg.cc/FKCBDVDz/0xbtc.png",
  "label": "0XBTC"
}
```
Feel free to explore the API using different routes and HTTP methods to retrieve information about cryptocurrencies.

## Features

The Crypto API offers the following features:

- Retrieving information about all cryptocurrencies
- Retrieving information about a specific cryptocurrency by ID, name, or symbol
- Pagination support for retrieving a list of cryptocurrencies

## Fetch all

To retrieve information about all cryptocurrencies, you can use the `/crypto/all` route.

## Search

To search for a specific cryptocurrency by ID, name, or symbol, you can use the corresponding routes:

- `/crypto/api/id/{id}`
- `/crypto/api/name/{name}`
- `/crypto/api/symbol/{symbol}`

## Pagination

The Crypto API provides a list of cryptocurrencies with optional pagination parameters. You can use the `/crypto/api` route to retrieve this information.

## Development

If you would like to contribute to the development of the Crypto API, you can follow the guidelines provided in the [CONTRIBUTING](CONTRIBUTING.md) file.

## Feedback and Support

For any feedback, suggestions, or issues related to the Crypto API, please open an issue on the [GitHub repository](https://github.com/Mansi-Tiwari/cryptoapi).

## License

This project is licensed under the [MIT License](LICENSE).
