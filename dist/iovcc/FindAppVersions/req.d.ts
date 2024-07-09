export interface FindAppVersionsRequest {
    /**
     * 版本状态，如**TESTING**，**TEST_PASSED**，**PREPUBLISH**，**PUBLISHED**。
     * @example `PUBLISHED`
     */
    "Status"?: string;
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 每页大小，支持20，50。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 版本ID
     * @example `12345`
     */
    "VersionId"?: string;
    /**
     * 设备型号ID
     * @example `1230`
     */
    "DeviceModelId"?: string;
    /**
     * 分页索引，从1开始。
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 应用ID
     * @example `123`
     */
    "AppId"?: string;
    /**
     * 备注
     * @example `sample remark`
     */
    "Remark"?: string;
}
