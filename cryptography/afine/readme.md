# Affine Cipher

The affine cipher is a classical encryption technique that utilizes a combination of modular arithmetic and linear algebra for message encryption and decryption. It represents a simple yet effective method for securing information, employing a pair of keys for the process.

## Encryption Process:

1. Plaintext Conversion: Each letter in the message (plaintext) is assigned a numerical value based on its alphabetical position (A = 1, B = 2, ..., Z = 26).

2. Key Selection: Two key values are chosen:
    - An integer relatively prime to the alphabet size (26) for ensuring the invertibility of the operation.
    - An integer representing a shift value.
3. Encryption Formula: Each plaintext character is transformed using the following formula:
    - `ciphertext_value = (a * plaintext_value + b) mod 26`
    - mod 26 ensures the result remains within the alphabet range (0-25).
Ciphertext Conversion: The resulting numerical values are converted back into corresponding letters, forming the ciphertext.

## Decryption Process:

1. Inverse Calculation: To reverse the encryption and obtain the original message, the following formula is applied:

    `plaintext_value = a^-1 * (ciphertext_value - b) mod 26`
    - `a^-1` denotes the modular inverse of `a` (the value that, when multiplied by `a`, gives 1 modulo 26). This can be efficiently calculated using the Extended Euclidean Algorithm.
2. Plaintext Conversion: The derived numerical values are converted back into their corresponding letters, revealing the original message.

## Example

Consider the message "HELLO" and the key pair (a = 3, b = 5).

- **Encryption**
    - `H (8) -> (3 * 8 + 5) mod 26 = 29 -> Z (26)`
    - `E (5) -> (3 * 5 + 5) mod 26 = 20 -> T (20)`
    - `L (12) -> (3 * 12 + 5) mod 26 = 41 -> A (1)`
    - `L (12) -> (3 * 12 + 5) mod 26 = 41 -> A (1)`
    - `O (15) -> (3 * 15 + 5) mod 26 = 50 -> Y (25)`

- Ciphertext: ZTAA