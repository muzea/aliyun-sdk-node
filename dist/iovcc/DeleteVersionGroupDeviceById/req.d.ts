export interface DeleteVersionGroupDeviceByIdRequest {
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 设备分组ID
     * @example `1234`
     */
    "DeviceGroupId": string;
    /**
     * 分组下设备记录的ID列表，英文逗号分割。
     * @example `11,22,33`
     */
    "Ids": string;
}
