interface EncryptRequest {
    "RegionId"?: string;
    "KeyId": string;
    "Plaintext": string;
    "EncryptionContext"?: string;
}
export { EncryptRequest };