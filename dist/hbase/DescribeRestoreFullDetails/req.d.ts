export interface DescribeRestoreFullDetailsRequest {
    /**
     * 集群Id。
     * @example `ld-m5eznlga4k5bcxxxx`
     */
    "ClusterId": string;
    /**
     * 恢复记录Id，可通过DescribeRestoreSummary接口获取。
     * @example `2020110514xxxx`
     */
    "RestoreRecordId": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小。
     * @example `10`
     */
    "PageSize"?: number;
}
