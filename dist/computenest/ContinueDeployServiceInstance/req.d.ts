export interface ContinueDeployServiceInstanceRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
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
    /**
     * 服务实例配置参数。
     * @example `{"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}`
     */
    "Parameters"?: string;
    /**
     * 是否对此次创建请求执行预检，包括权限、实例状态校验等。可能的值：
     * - true：发送请求，不创建服务实例。
     * - false：发送请求，检查通过后创建服务实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 重新创建选项。
     */
    "Option"?: string[];
}
