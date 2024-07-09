export interface StartInstanceRequest {
    /**
     * 指定启动的实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string;
    /**
     * 适用于实例规格族d1、i1或者i2等包含本地盘的实例。当d1、i1或者i2的本地盘出现故障时，可通过此参数指定启动实例时，是否将实例恢复到最初的健康状态。取值范围：
     * - true：将实例恢复到最初的健康状态，实例原有本地盘中的数据将会丢失。
     * - false：不做任何处理，维持现状。
     * 默认值为false。
     * @example `true`
     */
    "InitLocalDisk"?: boolean;
    /**
     * 是否只预检查此次请求。取值范围：
     * - true：仅检查此次请求，不会启动实例。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
     * - false：发送正常请求，请求通过检查后，返回2XX的HTTP状态码并直接启动实例。
     * 默认值为false。
     * @example `true`
     */
    "DryRun"?: boolean;
}
