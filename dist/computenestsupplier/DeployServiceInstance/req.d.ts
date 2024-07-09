export interface DeployServiceInstanceRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 服务实例ID。
     * @example `si-0e6fca6a51a54420****`
     */
    "ServiceInstanceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
