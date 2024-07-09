export interface DeleteVersionBlackDevicesRequest {
    /**
     * 设备ID列表，英文逗号隔开。具体设备ID使用哪个，由**DeviceIdType**决定。
     * @example `11,22,33`
     */
    "DeviceIds": string;
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本类型。支持：
     * - **FOTA**：系统升级
     * - **APP**：应用升级
     * @example `FOTA`
     */
    "VersionType": string;
    /**
     * 版本ID
     * @example `12345`
     */
    "VersionId": string;
    /**
     * 设备ID类型，支持：
     * - **device_id**：硬件ID
     * - **sn**：序列号
     * - **vin**：车架号
     * - **hardware_id**：硬件ID
     * @example `hardware_id`
     */
    "DeviceIdType": string;
}
