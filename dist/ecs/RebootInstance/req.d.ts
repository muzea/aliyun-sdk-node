export interface RebootInstanceRequest {
    /**
     * 指定实例的ID。
     * @example `i-bp67acfmxazb4ph****`
     */
    "InstanceId": string;
    /**
     * 重启ECS实例前，是否强制关机。取值范围：
     * -   true：强制关机。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。
     * -   false（默认）：正常关机。
     * @example `false`
     */
    "ForceStop"?: boolean;
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会重启实例。检查项包括是否填写了必选参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - false：发送正常请求，通过检查后直接重启实例。
     * 默认值：false
     * @example `false`
     */
    "DryRun"?: boolean;
}
