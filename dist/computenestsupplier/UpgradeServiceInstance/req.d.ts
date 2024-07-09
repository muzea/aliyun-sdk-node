export interface UpgradeServiceInstanceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 服务实例ID。
     * @example `si-5cbae874da0e47xxxxxx`
     */
    "ServiceInstanceId"?: string;
    /**
     * 服务版本。
     * @example `2`
     */
    "ServiceVersion"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `10CM943JP0EN9D51H`
     */
    "ClientToken"?: string;
    /**
     * 是否对此次创建请求执行预检，包括权限、实例状态校验等。可能的值：
     * - true：发送请求，不创建服务实例。
     * - false：发送请求，检查通过后创建服务实例。
     * @example `false`
     */
    "DryRun"?: string;
    /**
     * 服务实例配置参数。
     * @example `{
          "param": "value"
    }`
     */
    "Parameters"?: any;
}
