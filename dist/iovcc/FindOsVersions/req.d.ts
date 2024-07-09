export interface FindOsVersionsRequest {
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 分页索引，表示要获取第几页的数据，第一页从1开始。
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 每页大小，允许20、50、100三个选择。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 版本ID
     * @example `1205`
     */
    "VersionId"?: string;
    /**
     * 设备型号（机型）ID
     * @example `123`
     */
    "DeviceModelId"?: string;
    /**
     * 系统版本号
     * @example `2.0.1-R-20180402.1208`
     */
    "SystemVersion"?: string;
    /**
     * 版本状态，如：**TESTING**，**TEST_PASSED**，**PREPUBLISH**，**PUBLISHED**。
     * @example `TESTING`
     */
    "Status"?: string;
    /**
     * 是否里程碑，Y或N。
     * @example `N`
     */
    "IsMilestone"?: string;
    /**
     * 版本备注
     * @example `备注`
     */
    "Remark"?: string;
}
