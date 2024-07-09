export interface StopServiceInstanceRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `10CM943JP0EN9****`
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
     * @example `si-c39ed4779cec449f****`
     */
    "ServiceInstanceId": string;
}
