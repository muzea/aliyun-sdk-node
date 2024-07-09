export interface DeleteVersionGroupDeviceRequest {
    /**
     * 原始设备ID
     * @example `b8fe2e24ff2b48e0a3aa4e49809fc1b3`
     */
    "DeviceIds": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 设备所属测试设备分组ID
     * @example `1`
     */
    "DeviceGroupId": string;
    /**
     * 用于判断的DeviceIds的类型，取值有：**device_id**，**sn**，**vin**，**hardware_id**，**uuid**。
     * @example `device_id`
     */
    "DeviceIdType": string;
}
