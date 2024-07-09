export interface DeleteIPv6TranslatorRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `ClientToken`
     */
    "ClientToken"?: string;
    /**
     * IPv6转换服务实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPv6转换服务实例ID。
     * @example `ipv6trans-bp1i8ahxut1ie****`
     */
    "Ipv6TranslatorId": string;
}
