export interface DescribeDeviceModelRequest {
    /**
     * 设备型号ID。
     * 和**DeviceModel**不能同时为空。
     * @example `10`
     */
    "DeviceModelId"?: number;
    /**
     * 设备型号名。
     * 和**DeviceModelId**不能同时为空。
     * @example `X1`
     */
    "DeviceModel"?: string;
    /**
     * 项目ID。
     * @example `projectTest`
     */
    "ProjectId"?: string;
}
