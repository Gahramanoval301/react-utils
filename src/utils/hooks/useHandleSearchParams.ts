

import * as ReactRouterDom from "react-router-dom";
import React from "react";

type HandleSearchParamsProps = (
  key: string,
  value: string | number,
  options?: { enableToggle: boolean },
) => void;

type UseHandleSearchParamsProps = (
  defaultValues?: Record<string, string>,
) => HandleSearchParamsProps;

/**
 * Reusable hook to handle search params.
 * @example
 * const handleSearchParams = useHandleSearchParams();
 * handleSearchParams("key", "value")
 *
 * NEW: Set default values on mount.
 * This feature will only be triggered if you specify any default values.
 * @param {Record<string, string>} defaultValues - Default values to set on mount.
 * @example
 * const handleSearchParams = useHandleSearchParams({
 *     key: "value",
 * })
 */
const useHandleSearchParams: UseHandleSearchParamsProps = (defaultValues) => {
  const [searchParams, setSearchParams] = ReactRouterDom.useSearchParams();

  const handleSearchParams: HandleSearchParamsProps = React.useCallback(
    (key, value, options) => {
      setSearchParams(
        (prev) => {
          const newParams = new URLSearchParams(prev.toString());

          if (value === "") {
            newParams.delete(key);
          } else {
            if (options?.enableToggle) {
              if (newParams.get(key) === value) {
                newParams.delete(key);
              } else {
                newParams.set(key, value.toString());
              }
            } else {
              newParams.set(key, value.toString());
            }
          }
          return newParams;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  React.useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length > 0) {
      for (const [key, value] of Object.entries(defaultValues)) {
        if (searchParams.get(key) == null) {
          handleSearchParams(key, value);
        }
      }
    }
  }, [defaultValues, handleSearchParams, searchParams]);

  return handleSearchParams;
};

/**
 * A custom hook that provides a function to update multiple search parameters in the URL.
 *
 * The returned function accepts an object where the keys represent the names of the query parameters
 * and the values represent the new values for those parameters. If a value is `null` or an empty string,
 * the corresponding parameter is removed from the URL.
 *
 * @returns {Function} A function to update multiple search parameters. The function takes an object
 * where keys are parameter names and values are the desired parameter values. Passing a `null` or `""`
 * value removes the parameter from the URL.
 *
 * @example
 * const updateMultipleSearchParams = useHandleMultipleSearchParams();
 * updateMultipleSearchParams({
 *     param1: "value1",
 *     param2: "value2",
 * })
 */
const useHandleMultipleSearchParams = () => {
  const [, setSearchParams] = ReactRouterDom.useSearchParams();

  return (updates: Record<string, string | null | undefined>) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev.toString());

        for (const [key, value] of Object.entries(updates)) {
          if (value === undefined || value === null || value === "") {
            newParams.delete(key);
          } else {
            newParams.set(key, value);
          }
        }

        return newParams;
      },
      { replace: true },
    );
  };
};

/**
 * Remove all specified values with only one function.
 * @example
 * const reset = useResetSearchParams();
 * reset("key1", "key2", "key3", ...)
 */
const useResetSearchParams = () => {
  const [, setSearchParams] = ReactRouterDom.useSearchParams();

  return (...keys: string[]) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      keys.forEach((key) => newParams.delete(key));
      return newParams;
    });
  };
};

export {
  useHandleSearchParams,
  useResetSearchParams,
  useHandleMultipleSearchParams,
};

