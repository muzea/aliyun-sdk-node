export interface RebootInstancesRequest {
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会重启实例。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回`DRYRUN.SUCCESS`。
     * > 如果参数`BatchOptimization`被设置为`SuccessFirst`，对应的`DryRun=true`的预检结果只会返回`DRYRUN.SUCCESS`。
     * - false：发送正常请求，通过检查后直接重启实例。
     * 默认值：false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 实例所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否强制重启。取值范围：
     * -   true：强制重启。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。
     * -   false：正常重启。
     * 默认值：false。
     * @example `false`
     */
    "ForceReboot"?: boolean;
    /**
     * 设置批量操作模式。取值范围：
     * - AllTogether：该模式下，如果实例全部重启成功，则返回成功信息；如果任意一个实例校验不通过，则所有实例重启失败，并返回失败信息。
     * - SuccessFirst：该模式下，分别重启每个实例，返回结果包含每个实例的操作结果信息。
     * 默认值：AllTogether。
     * @example `AllTogether`
     */
    "BatchOptimization"?: string;
    /**
     * 实例ID列表。最多100个实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string[];
}
