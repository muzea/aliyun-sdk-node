export interface DescribeUserUsageDataExportTaskRequest {
    /**
     * 分页大小。默认值：**20**；最大值：**50**。
     * 取值：**1**~**50**之间的任意整数。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 取得第几页，取值范围：**1**~**100000**。
     * @example `1`
     */
    "PageNumber"?: string;
}
