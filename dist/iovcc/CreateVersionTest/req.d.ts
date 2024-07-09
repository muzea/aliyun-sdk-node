export interface CreateVersionTestRequest {
    /**
     * 测试设备分组ID
     * @example `1`
     */
    "DeviceGroupId": string;
    /**
     * 测试描述
     * @example `第一次测试`
     */
    "Description"?: string;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId": string;
    /**
     * 版本类型。取值：
     * - **FOTA**：系统版本
     * - **APP**：应用版本
     * @example `FOTA`
     */
    "VersionType": string;
    /**
     * 测试名
     * @example `第一次测试`
     */
    "Name": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
}
