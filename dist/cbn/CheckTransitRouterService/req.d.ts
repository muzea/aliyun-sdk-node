export interface CheckTransitRouterServiceRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，需保证该参数在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
}
