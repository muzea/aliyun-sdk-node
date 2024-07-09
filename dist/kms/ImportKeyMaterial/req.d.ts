export interface ImportKeyMaterialRequest {
    /**
     * 待导入的主密钥ID。
     * @example `1234abcd-12ab-34cd-56ef-12345678****`
     */
    "KeyId": string;
    /**
     * 使用**GetParametersForImport**返回的公钥加密并用base64编码后的密钥材料。
     * @example `bCPZx7I6v6KXsqEpr2OXKxuj2CCRtKdwp75Bw+BGncYqBdfjFBYRtOE6HRlT0oeiRDWzwnw9OA54OL36smDJrq4Lo9x0CyYDiuKnRkcKtMtlzW0din7Pd7IlZWWRdVueiw2qpzl7PkUWQGTdsdbzpfJJQ+qj/cRIrk/E83UGyeyytSpgnb+lu0xEYcPajRyWNsbi98N3pqqQzHXNNHO2NJqHlnQgglqTiBEjkGeKFhfKmTc3vjulIdVa3EaVIN6lwWfgx+UUYSrvbA77WDYKlDsZ4SbK2/T7za9Tp1qU7Ynqba7OKGVVj7PMbiaO80AxWZnjUMYCgEp5w7V+seOXqw==`
     */
    "EncryptedKeyMaterial": string;
    /**
     * 通过调用**GetParametersForImport**获得的导入令牌。
     * @example `Base64String`
     */
    "ImportToken": string;
    /**
     * 密钥材料过期时间。
     * 不指定该参数或取值为0，表示密钥材料不会过期。
     * > 取值不可早于调用该API的时间（以服务器时间为准）。
     * @example `0`
     */
    "KeyMaterialExpireUnix": number;
}
