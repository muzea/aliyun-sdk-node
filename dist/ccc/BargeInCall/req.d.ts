export interface BargeInCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起强插的坐席ID。
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
     * 被强插的座席ID。
     * @example `agent2@ccc-test`
     */
    "BargedUserId": string;
    /**
     * 强插超时时间，经过指定的时间强插仍未成功，则取消强插，正常情况下，强插操作会马上成功，设置超时时间是为了防止异常发生，此字段选填，默认30，单位秒。
     * @example `60`
     */
    "TimeoutSeconds"?: number;
}
