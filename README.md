# Angular Spring Boot Paginator Component

During my summer internship, I encountered a challenge related to implementing Spring Boot pagination within an Angular application. To streamline the process and adhere to Angular's best practices for efficient code, I developed a customizable component named 'my-paginator'. This component is designed with @Input and @Output variables, allowing it to be easily integrated into any component within the project.

## Brief Explanation of Pagination in Spring Boot
Pagination in Spring Boot involves breaking down a large set of data into smaller, manageable portions, or pages. This prevents overwhelming users with all data at once. By specifying page size and number, users can navigate through data sections efficiently. Spring Boot's pagination simplifies data retrieval, enhances performance, and offers a user-friendly browsing experience.


This is an example JSON object representing a list of devices:

```bash
{
    "content": [
        {
            "deviceId": 2,
            "label": "string",
            "model": "SAMSUNG",
            "latitude": "string",
            "alarms": [],
            "credential": {
                "id": 2,
                "username": "string",
                "password": "string",
                "accessLevel": "string",
                "expirationDate": "2023-08-10T20:53:21.537+00:00"
            },
            "longitude": "string"
        }
    ],
    "pageable": {
        "sort": {
            "empty": true,
            "unsorted": true,
            "sorted": false
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 1,
        "unpaged": false,
        "paged": true
    },
    "last": false,
    "totalPages": 13,
    "totalElements": 13,
    "size": 1,
    "number": 0,
    "sort": {
        "empty": true,
        "unsorted": true,
        "sorted": false
    },
    "numberOfElements": 1,
    "first": true,
    "empty": false
}
```
- **`content`**: An array containing the actual data objects (devices) for the current page. It includes attributes like `deviceId`, `label`, `model`, `latitude`, `alarms`, `credential`, and `longitude`.

- **`pageable`**: Information about the current pagination state, such as sorting status, offset, page number, and page size.

- **`last`**: Indicates whether this is the last page of the data set.

- **`totalPages`**: The total number of pages required to display all the data based on the defined page size.

- **`totalElements`**: The total number of data elements available in the entire data set.

- **`size`**: The number of data elements in the current page.

- **`number`**: The current page number (0-based index).

- **`sort`**: Sorting information for the data.

- **`numberOfElements`**: The number of data elements in the current page.

- **`first`**: Indicates whether this is the first page of the data set.

- **`empty`**: Indicates whether the content of the current page is empty.


## Features
- Effortless Pagination: Seamlessly incorporate Spring Boot pagination into your Angular app without complex code.
- Reusable Component: The 'my-paginator' component is crafted for reusability, enhancing the modularity of your project.
- Customizable: Tailor the pagination component to fit your specific design and functionality requirements.
- Simple Integration: Utilize @Input variables to control the pagination logic and @Output events to capture user interactions.
- Enhanced User Experience: Improve user experience through organized and easily navigable data sets.

## Installation
To integrate the 'my-paginator' component into your Angular project, follow these steps:

1.First, clone the backend Spring Boot project from my previous repository and run it.
```bash
git clone https://github.com/ahmedg99/OpenAICodex.git
cd OpenAICodex
```

Clone this repository and navigate to your project's root directory.
```bash
git clone https://github.com/ahmedg99/paginator-app.git
cd paginator-app
```
npm install 
```bash
npm install
```

npm start 
```bash
npm start
```
## Demo 

https://github.com/ahmedg99/paginator-app/assets/80821066/6363b596-8958-49ec-8511-420a0a2963c2


