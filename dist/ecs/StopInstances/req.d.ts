export interface StopInstancesRequest {
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会停止实例。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回`DRYRUN.SUCCESS`。
     * > 如果参数`BatchOptimization`被设置为`SuccessFirst`，对应的`DryRun=true`的预检结果只会返回`DRYRUN.SUCCESS`。
     * - false：发送正常请求，通过检查后直接停止实例。
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
     * 是否强制关机。取值范围：
     * - true：强制关机。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。
     * - false：正常关机。
     * 默认值：false。
     * @example `false`
     */
    "ForceStop"?: boolean;
    /**
     * 停止按量付费ECS实例时，设置的停止模式。取值：
     * - StopCharging：节省停机模式。有关`StopCharging`生效的条件，请参见[按量付费实例节省停机模式](~~63353~~)的启用条件章节。
     * - KeepCharging：普通停机模式。实例停止后仍继续收费。
     * 默认值：如果您在ECS控制台上开启VPC内实例节省停机模式（更多信息，请参见[打开默认启用节省停机模式](~~63353#default~~)），并符合开启条件，则默认值为`StopCharging`。否则，默认值为`KeepCharging`。
     * @example `KeepCharging`
     */
    "StoppedMode"?: string;
    /**
     * 设置批量操作模式。取值范围：
     * - AllTogether：该模式下，如果实例全部停止成功，则返回成功信息；如果任意一个实例校验不通过，则所有实例停止失败，并返回失败信息。
     * - SuccessFirst：该模式下，分别停止每个实例，返回结果包含每个实例的操作结果信息。
     * 默认值：AllTogether。
     * @example `AllTogether`
     */
    "BatchOptimization"?: string;
    /**
     * 实例ID列表。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string[];
}
