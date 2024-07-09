export interface AddVersionGroupDevicesRequest {
    /**
     * 设备ID类型。支持：
     * - **device_id**：硬件ID
     * - **sn**：序列号
     * - **vin**：车架号
     * - **hardware_id**：硬件ID
     * @example `sn`
     */
    "DeviceIdType": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 云设备ID列表
     * @example `"b8fe2e24ff2b48e0a3aa4e49809fc1b3","b8f12e24ff2b48e0a3aa4e49809fc1b3"`
     */
    "DeviceIds": string;
    /**
     * 测试设备分组ID
     * @example `1`
     */
    "DeviceGroupId": string;
}
