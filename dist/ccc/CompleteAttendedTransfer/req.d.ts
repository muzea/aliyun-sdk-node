export interface CompleteAttendedTransferRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起咨询转接的坐席ID。
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
}
