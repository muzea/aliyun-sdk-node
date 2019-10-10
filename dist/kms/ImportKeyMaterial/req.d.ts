interface ImportKeyMaterialRequest {
    "RegionId"?: string;
    "KeyId": string;
    "EncryptedKeyMaterial": string;
    "ImportToken": string;
    "KeyMaterialExpireUnix": number;
}
export { ImportKeyMaterialRequest };