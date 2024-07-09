export interface CoachCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起辅导的坐席ID。
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
     * @example `job-65382141036853491`
     */
    "JobId": string;
    /**
     * 被辅导的坐席ID。
     * @example `coached-agent@ccc-test`
     */
    "CoachedUserId": string;
    /**
     * 辅导超时时间，超过指定时间辅导没有建立，则取消辅导操作，此字段选填，默认30，单位秒。
     * @example `30`
     */
    "TimeoutSeconds"?: number;
}
