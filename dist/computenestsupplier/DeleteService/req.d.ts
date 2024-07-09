export interface DeleteServiceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务ID。
     * @example `service-0e6fca6a51a54420****`
     */
    "ServiceId": string;
    /**
     * 服务版本。
     * @example `2`
     */
    "ServiceVersion": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `10CM943JP0EN9D51H`
     */
    "ClientToken"?: string;
}
