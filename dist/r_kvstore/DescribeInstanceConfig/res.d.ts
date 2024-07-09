export interface DescribeInstanceConfigResponse {
    /**
     * 实例的默认配置参数，更全面的参数配置请调用[Describeparamters](~~473847~~)接口。
     * @example `{\"EvictionPolicy\":\"volatile-lru\",\"hash-max-ziplist-entries\":512,\"zset-max-ziplist-entries\":128,\"list-max-ziplist-entries\":512,\"list-max-ziplist-value\":64,\"zset-max-ziplist-value\":64,\"set-max-intset-entries\":512,\"hash-max-ziplist-value\":64}`
     */
    Config: string;
    /**
     * 请求ID。
     * @example `4E2C08F6-2D11-4ECD-9A4C-27EF2D3D****`
     */
    RequestId: string;
}
