export interface MonitorCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `device`
     */
    "DeviceId"?: string;
    /**
     * 被监听的座席的ID。
     * @example `agent2@ccc-test`
     */
    "MonitoredUserId": string;
    /**
     * 监听超时时间，经过指定的时间监听仍未成功，则取消监听，正常情况下，监听操作会马上成功，设置超时时间是为了防止异常发生，此字段选填，默认30，单位秒。
     * @example `30`
     */
    "TimeoutSeconds"?: number;
}
