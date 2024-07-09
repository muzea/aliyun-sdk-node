export interface ReleaseAnycastEipAddressRequest {
    /**
     * 要释放的Anycast EIP实例ID。
     * @example `aeip-bp1ix34fralt4ykf3****`
     */
    "AnycastId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * >
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
}
