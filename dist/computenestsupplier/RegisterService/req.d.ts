export interface RegisterServiceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务ID。
     * @example `service-f7024a22ea5149xxxxxx`
     */
    "ServiceId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `10CM943JP0EN9D51H`
     */
    "ClientToken"?: string;
}
