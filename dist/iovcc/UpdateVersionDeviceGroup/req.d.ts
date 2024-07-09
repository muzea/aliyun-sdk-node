export interface UpdateVersionDeviceGroupRequest {
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 分组名
     * @example `测试分组-2`
     */
    "Name": string;
    /**
     * 分组描述
     * @example `测试描述`
     */
    "Description"?: string;
    /**
     * 测试设备分组ID
     * @example `1`
     */
    "Id"?: string;
}
