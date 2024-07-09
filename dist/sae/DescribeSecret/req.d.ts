export interface DescribeSecretRequest {
    /**
     * Secret实例所在命名空间ID。默认同RegionId。
     * @example `cn-beijing:test`
     */
    "NamespaceId": string;
    /**
     * 查询的Secret实例ID。需要调用[ListSecrets](~~466929~~)接口查看。
     * @example `16`
     */
    "SecretId": number;
}
