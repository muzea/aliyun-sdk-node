export interface InterceptCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起强拆的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `device`
     */
    "DeviceId"?: string;
    /**
     * 通话ID。
     * @example `job-6538214103685****`
     */
    "JobId": string;
    /**
     * 被强拆的座席ID。
     * @example `agent2@ccc-test`
     */
    "InterceptedUserId": string;
    /**
     * 强拆超时时间，经过指定的时间强拆仍未成功，则取消强拆，正常情况下，强拆操作会马上成功，设置超时时间是为了防止异常发生，此字段选填，默认30，单位秒。
     * @example `60`
     */
    "TimeoutSeconds"?: number;
}
