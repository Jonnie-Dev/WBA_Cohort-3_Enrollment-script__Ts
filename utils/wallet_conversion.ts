import bs58 from "bs58";
import promptSync from "prompt-sync";

// Initialize prompt-sync
const prompt = promptSync();

// Function to convert Base58 to wallet bytes (Uint8 Array)
function base58_to_wallet() {
  const base58 = prompt("Enter your Base58 encoded string: "); // Read input synchronously

  try {
    const wallet = bs58.decode(base58); // Decode Base58 string to bytes
    console.log(wallet); // Print the decoded bytes
  } catch (error) {
    console.error("Error decoding Base58");
  }
}

// Function to convert wallet bytes to Base58
function wallet_to_base58() {
  const wallet: number[] = [
    34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44, 122, 15,
    172, 63, 62, 153, 150, 99, 255, 202, 89, 105, 77, 41, 89, 253, 130, 27, 195,
    134, 14, 66, 75, 24, 2, 7, 132, 234, 160, 203, 109, 195, 116, 251, 144, 44,
    28, 56, 231, 114, 50, 131, 185, 168, 138, 61, 35, 98, 78, 53,
  ];

  try {
    const base58String = bs58.encode(Buffer.from(wallet)); // Encode bytes to Base58 string
    console.log(base58String); // Print the encoded Base58 string
  } catch (error) {
    console.error("Error encoding wallet bytes");
  }
}

base58_to_wallet();
// wallet_to_base58();
