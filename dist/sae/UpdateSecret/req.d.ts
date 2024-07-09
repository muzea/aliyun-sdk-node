export interface UpdateSecretRequest {
    /**
     * Secret实例所在命名空间ID。默认同RegionId。
     * @example `cn-beijing:test`
     */
    "NamespaceId": string;
    /**
     * Secret实例ID。
     * @example `16`
     */
    "SecretId": number;
    "SecretData": {
        SecretData: string;
    };
}
