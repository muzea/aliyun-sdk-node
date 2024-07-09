export interface DescribeEncryptionKeyRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 实例的自定义密钥ID，可调用[DescribeEncryptionKeyList](~~302339~~)接口查询。
     * @example `ad463061-992d-4195-8a94-ed63********`
     */
    "EncryptionKey"?: string;
}
