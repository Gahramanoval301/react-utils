# @lemanghrmnva/react-utils

A lightweight collection of reusable React utility components and hooks.

## ✨ Features

- 📌 Simple, reusable React utilities
- 🔄 Custom hooks for common patterns
- ⚛️ Lightweight and tree-shakable

---

## 📦 Installation

```
npm install @lemanghrmnva/react-utils
# or
yarn add @lemanghrmnva/react-utils
```

# Available Functions and Hooks
 #### Hooks
 - ``` useHandleSearchParams(defaultValues?)```
    1. Hook to read and update URL search parameters easily.
    2. You can toggle or set values, and initialize default params on mount.
 
    #### Example 
     Reusable hook to handle search params.
    
    ```
    const handleSearchParams = useHandleSearchParams();
    handleSearchParams("key", "value")
    ```
    NEW: Set default values on mount.
    This feature will only be triggered if you specify any default values.
    
     @param {Record<string, string>} defaultValues - Default values to set on mount.
    ```
    const handleSearchParams = useHandleSearchParams({
          key: "value",
    }) 
    ```

- ``` useHandleMultipleSearchParams() ```
    --> Returns a function to update multiple search params at once by passing an object.

    #### Example 
    A custom hook that provides a function to update multiple search parameters in the URL.
 
     The returned function accepts an object where the keys represent the names of the query parameters and the values represent the new values for those parameters. If a value is `null` or an empty string, the corresponding parameter is removed from the URL.

    @returns {Function} A function to update multiple search parameters. The function takes an object where keys are parameter names and values are the desired parameter values. Passing a `null` or `""` value removes the parameter from the URL.


     ```const updateMultipleSearchParams =  useHandleMultipleSearchParams();
     updateMultipleSearchParams({
          param1: "value1",
          param2: "value2",
     })

 - ```useResetSearchParams()```
    --> Returns a function to remove one or more search params by keys. 
    
    #### Example 
     Remove all specified values with only one function.
    ``` 
    const reset = useResetSearchParams();
    reset("key1", "key2", "key3", ...)
    ```
#### Utility Functions

 - ```formatDate(inputDate: string): string```
    --> Formats an ISO date string into a localized month/day/year string. For example: Jan 24, 2025

- ``` formatDateByHours(inputDate: string, format: "text" | "date" | "hh:mm", isUtc?: boolean): string ```
     --> Formats an ISO date string with time in several customizable formats.

    ```
    formatDateByHours("2025-07-21T19:45:00Z", "text", true);
    // Output: "Jul 21 at 07:45 pm"
    ```
    #### 🔧 Parameters:
     - inputDate: ISO date string (e.g., "2025-07-21T19:45:00Z")
    - format: Determines the output style:
        -  "text" → Jul 21 at 07:45 pm
        - "date" → Jul 21, 2025 19:45
        - "hh:mm" → 19:45
        - isUtc (optional): If true, time is treated in UTC; otherwise, local time is used.

- ```toBase64(file: File): Promise<string>```
    --> converts a file to a base64 encoded data URL.

- ```toKb(file: File): string```
    --> Returns file size in kilobytes as a string with 1 decimal.

- ```useCurrentMonth(): string```
    --> Returns the current month name as a localized string.

- ```shortenNumber(_count: number): string | number```
    --> Abbreviates large numbers (e.g. 1500 → "2K", 1500000 → "1M").

- ```generateCaptcha(length?: number): string```
    --> Generates a random alphanumeric captcha string.