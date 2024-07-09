export interface CreateVersionDeviceGroupRequest {
    /**
     * 设备分组允许最大设备数
     * @example `100`
     */
    "MaxCount": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 分组名
     * @example `升级分组1`
     */
    "Name": string;
    /**
     * 分组描述
     * @example `测试分组`
     */
    "Description"?: string;
}
