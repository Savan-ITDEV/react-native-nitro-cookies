"use strict";

/**
 * TypeScript type definitions for React Native Nitro Cookies
 *
 * These types define the structure of cookies and error handling
 * for the Nitro-based cookie management library.
 */

/**
 * Represents an HTTP cookie with all RFC 6265 attributes
 */

/**
 * Collection of cookies keyed by cookie name
 * Using type alias instead of interface for Nitrogen compatibility
 */

/**
 * Error codes for cookie operations
 */
export let CookieErrorCode = /*#__PURE__*/function (CookieErrorCode) {
  /** URL is malformed or missing protocol */
  CookieErrorCode["INVALID_URL"] = "INVALID_URL";
  /** Cookie domain doesn't match URL host */
  CookieErrorCode["DOMAIN_MISMATCH"] = "DOMAIN_MISMATCH";
  /** Method not available on current platform */
  CookieErrorCode["PLATFORM_UNSUPPORTED"] = "PLATFORM_UNSUPPORTED";
  /** WebKit operations on iOS < 11 */
  CookieErrorCode["WEBKIT_UNAVAILABLE"] = "WEBKIT_UNAVAILABLE";
  /** Failed to parse Set-Cookie header */
  CookieErrorCode["PARSE_ERROR"] = "PARSE_ERROR";
  /** Network request failed */
  CookieErrorCode["NETWORK_ERROR"] = "NETWORK_ERROR";
  /** Platform storage operation failed */
  CookieErrorCode["STORAGE_ERROR"] = "STORAGE_ERROR";
  return CookieErrorCode;
}({});

/**
 * Structured error for cookie operations
 */
//# sourceMappingURL=types.js.map