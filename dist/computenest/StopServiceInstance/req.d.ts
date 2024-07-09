export interface StopServiceInstanceRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 服务实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 服务实例ID。
     * 您可以通过调用[ListServiceInstances - 查询服务实例列表](~~396200~~)获取服务实例ID。
     * @example `si-b58c874912fc4294****`
     */
    "ServiceInstanceId": string;
}
