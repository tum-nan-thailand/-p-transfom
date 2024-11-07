/**
 * Converts string to uppercase
 * Example:
 *   toUpperCase('hello') → 'HELLO'
 *   toUpperCase('Hello World') → 'HELLO WORLD'
 *   toUpperCase(123) → 123 // Returns input if not string
 */
function toUpperCase(data) {
  if (typeof data === 'string') {
    return data.toUpperCase();
  }
  return data;
}

/**
 * Converts string to lowercase
 * Example: 
 *   toLowerCase('HELLO') → 'hello'
 *   toLowerCase('Hello World') → 'hello world'
 *   toLowerCase(null) → null // Returns input if not string
 */
function toLowerCase(data) {
  if (typeof data === 'string') {
    return data.toLowerCase();
  }
  return data;
}

/**
 * Capitalizes first letter only
 * Example:
 *   capitalize('hello') → 'Hello'
 *   capitalize('hello world') → 'Hello world'
 *   capitalize('HELLO') → 'HELLO' // Rest of string unchanged
 */
function capitalize(data) {
  if (typeof data === 'string') {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }
  return data;
}

/**
 * Removes whitespace from start and end
 * Example:
 *   trim('  hello  ') → 'hello'
 *   trim('\n\thello\t\n') → 'hello'
 *   trim('hello') → 'hello' // No change if no whitespace
 */
function trim(data) {
  if (typeof data === 'string') {
    return data.trim();
  }
  return data;
}

/**
 * Global string replacement
 * Example:
 *   replaceAll('hello hello', 'hello', 'hi') → 'hi hi'
 *   replaceAll('abc123abc', 'abc', 'xyz') → 'xyz123xyz'
 *   replaceAll('a.b.c', '.', '-') → 'a-b-c'
 */
function replaceAll(data, searchValue, replaceValue) {
  if (typeof data === 'string') {
    return data.split(searchValue).join(replaceValue);
  }
  return data;
}

/**
 * Creates URL-friendly string
 * Example:
 *   slugify('Hello World!') → 'hello-world'
 *   slugify('My Article Title 123') → 'my-article-title-123'
 *   slugify('__Hello--World__') → 'hello-world'
 */
function slugify(data) {
  if (typeof data === 'string') {
    return data
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  return data;
}

/**
 * Truncates text with ellipsis
 * Example:
 *   truncate('Hello World', 5) → 'Hello...'
 *   truncate('Hi', 5) → 'Hi' // No truncate if shorter
 *   truncate('Hello World', 0) → '...'
 */
function truncate(data, maxLength) {
  if (typeof data === 'string' && typeof maxLength === 'number') {
    if (data.length > maxLength) {
      return data.substring(0, maxLength) + '...';
    }
    return data;
  }
  return data;
}

/**
 * Reverses string characters
 * Example:
 *   reverse('hello') → 'olleh'
 *   reverse('Hello World') → 'dlroW olleH'
 *   reverse('12345') → '54321'
 */
function reverse(data) {
  if (typeof data === 'string') {
    return data.split('').reverse().join('');
  }
  return data;
}

/**
 * Counts substring occurrences
 * Example:
 *   countOccurrences('hello hello', 'hello') → 2
 *   countOccurrences('banana', 'na') → 2
 *   countOccurrences('abc', 'xyz') → 0
 */
function countOccurrences(data, searchStr) {
  if (typeof data === 'string' && typeof searchStr === 'string') {
    return (data.match(new RegExp(searchStr, 'g')) || []).length;
  }
  return 0;
}

/**
 * Extracts all numbers from string
 * Example:
 *   extractNumbers('abc123def456') → [123, 456]
 *   extractNumbers('Price: $19.99') → [19, 99]
 *   extractNumbers('no numbers') → []
 */
function extractNumbers(data) {
  if (typeof data === 'string') {
    return data.match(/\d+/g)?.map(Number) || [];
  }
  return [];
}

/**
 * Validates email format
 * Example:
 *   isValidEmail('test@example.com') → true
 *   isValidEmail('invalid.email') → false
 *   isValidEmail('test@domain') → false
 */
function isValidEmail(data) {
  if (typeof data === 'string') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data);
  }
  return false;
}

/**
 * Removes all special characters
 * Example:
 *   removeSpecialChars('Hello@World!') → 'HelloWorld'
 *   removeSpecialChars('user.name@email.com') → 'usernameemailcom'
 *   removeSpecialChars('123-456-789') → '123456789'
 */
function removeSpecialChars(data) {
  if (typeof data === 'string') {
    return data.replace(/[^a-zA-Z0-9]/g, '');
  }
  return data;
}

/**
 * Base64 encoding
 * Example:
 *   toBase64('Hello') → 'SGVsbG8='
 *   toBase64('Hello World') → 'SGVsbG8gV29ybGQ='
 *   toBase64('12345') → 'MTIzNDU='
 */
function toBase64(data) {
  if (typeof data === 'string') {
    return Buffer.from(data).toString('base64');
  }
  return data;
}

/**
 * Base64 decoding
 * Example:
 *   fromBase64('SGVsbG8=') → 'Hello'
 *   fromBase64('SGVsbG8gV29ybGQ=') → 'Hello World'
 *   fromBase64('MTIzNDU=') → '12345'
 */
function fromBase64(data) {
  if (typeof data === 'string') {
    return Buffer.from(data, 'base64').toString();
  }
  return data;
}

/**
 * Masks portion of string
 * Example:
 *   mask('1234567890', 4, 8, '*') → '1234****90'
 *   mask('user@email.com', 0, 4) → '****@email.com'
 *   mask('password', 1, -1) → 'p******d'
 */
function mask(data, start, end, maskChar = '*') {
  if (typeof data === 'string') {
    const len = data.length;
    start = Math.max(0, start);
    end = Math.min(len, end);
    return data.slice(0, start) + maskChar.repeat(end - start) + data.slice(end);
  }
  return data;
}

/**
 * Currency formatting
 * Example:
 *   toCurrency(1234.56) → '$1,234.56'
 *   toCurrency(1234.56, 'EUR', 'de-DE') → '1.234,56 €'
 *   toCurrency(1234.56, 'THB', 'th-TH') → '฿1,234.56'
 */
function toCurrency(data, currency = 'USD', locale = 'en-US') {
  const num = Number(data);
  if (!isNaN(num)) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(num);
  }
  return data;
}

/**
 * Converts to title case
 * Example:
 *   toTitleCase('hello world') → 'Hello World'
 *   toTitleCase('HELLO WORLD') → 'Hello World'
 *   toTitleCase('hello_world') → 'Hello_World'
 */
function toTitleCase(data) {
  if (typeof data === 'string') {
    return data.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }
  return data;
}

/**
 * Extracts URLs from text
 * Example:
 *   extractUrls('Visit https://example.com and http://test.com')
 *   → ['https://example.com', 'http://test.com']
 *   extractUrls('No URLs here') → []
 */
function extractUrls(data) {
  if (typeof data === 'string') {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return data.match(urlRegex) || [];
  }
  return [];
}

/**
 * Generates random string
 * Example:
 *   random(5) → 'Ax7Bd'
 *   random(10) → 'qW3rTy5Ui9'
 *   random(3, 'ABC') → 'BAC' // Custom charset
 */
function random(length, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * Word wraps text
 * Example:
 *   wordWrap('Long text here', 4) → 'Long\ntext\nhere'
 *   wordWrap('Short', 10) → 'Short'
 *   wordWrap('VeryLongWord', 4) → 'VeryLongWord'
 */
function wordWrap(data, maxLength) {
  if (typeof data === 'string') {
    const regex = new RegExp(`(?![^\\n]{1,${maxLength}}$)([^\\n]{1,${maxLength}})\\s`, 'g');
    return data.replace(regex, '$1\n');
  }
  return data;
}

/**
 * Checks if string has only letters
 * Example:
 *   isAlpha('Hello') → true
 *   isAlpha('Hello123') → false
 *   isAlpha('Hello World') → false // Space not allowed
 */
function isAlpha(data) {
  if (typeof data === 'string') {
    return /^[A-Za-z]+$/.test(data);
  }
  return false;
}

module.exports = {
  toUpperCase,
  toLowerCase,
  capitalize,
  trim,
  replaceAll,
  slugify,
  truncate,
  reverse,
  countOccurrences, 
  extractNumbers,
  isValidEmail,
  removeSpecialChars,
  toBase64,
  fromBase64,
  mask,
  toCurrency,
  toTitleCase,
  extractUrls,
  random,
  wordWrap,
  isAlpha
};
