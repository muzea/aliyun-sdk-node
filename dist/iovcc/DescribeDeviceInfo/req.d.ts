export interface DescribeDeviceInfoRequest {
    /**
     * 设备ID。
     * 和**DeviceToken**不能同时为空。
     * @example `100`
     */
    "DeviceId"?: string;
    /**
     * 设备Token。
     * 和**DeviceId**不能同时为空。
     * @example `cn.xxxxxxx`
     */
    "DeviceToken"?: string;
    /**
     * 项目ID。
     * @example `projectTest`
     */
    "ProjectId"?: string;
}
