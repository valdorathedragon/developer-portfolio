
# REST API & JSON Parsing Summary

## What is a REST API?

A **REST API (Representational State Transfer Application Programming Interface)** is a standardized architectural style that allows two software applications to communicate and exchange data over the internet using standard HTTP methods like `GET`, `POST`, `PUT`, and `DELETE`[cite: 8]. Each piece of data (or resource) is exposed via a unique URL endpoint, and the server typically returns structured, lightweight **JSON** responses[cite: 8]. Because REST is stateless, every request contains all the information the server needs to process it independently[cite: 8].

## HTTP Status Codes Observed

* **`200 OK`:** Indicates that the HTTP `GET` request succeeded and the server returned the requested JSON resource in the response body (observed when querying valid GitHub user endpoints and JSONPlaceholder `/posts`).
* **`404 Not Found`:** Indicates that the server could not find the requested resource at the specified URL endpoint (for example, querying a non-existent GitHub username or invalid route).

## `jq` Filter Breakdown

Command used:

```bash
cat API/github_profile.json | jq '{name:.name, repos:.public_repos, followers:.followers, joined:.created_at}'
```

* `{ ... }` — Constructs a brand-new JSON object containing only the keys we specify, filtering out all other metadata from the raw API response.
* `name:.name` — Creates a key named `"name"` and populates it with the value of the `.name` field from the input JSON.
* `repos:.public_repos` — Renames the `.public_repos` field to `"repos"` in our clean output.
* `followers:.followers` — Extracts the `.followers` count under the `"followers"` key.
* `joined:.created_at` — Renames the account creation timestamp `.created_at` to `"joined"`.
