export interface StopInstanceRequest {
    /**
     * 指定的实例ID。
     * @example `i-bp67acfmxazb4ph****`
     */
    "InstanceId": string;
    /**
     * 该参数即将被弃用，为提高兼容性暂作保留。您在调用该接口时请忽略该参数。
     * @example `true`
     */
    "ConfirmStop"?: boolean;
    /**
     * 停止实例时的是否强制关机策略。取值范围：
     * - true：强制关机。
     * - false：正常关机流程。
     * 默认值为false。
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
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会停止实例。检查项包括是否填写了必选参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - false：发送正常请求，通过检查后直接停止实例。
     * 默认值为false。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `hide`
     */
    "Hibernate"?: boolean;
}
