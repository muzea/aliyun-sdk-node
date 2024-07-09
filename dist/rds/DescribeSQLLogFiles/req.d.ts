export interface DescribeSQLLogFilesRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 审计文件名称。
     * @example `custins****.csv`
     */
    "FileName"?: string;
    /**
     * 每页记录数，取值：**30~200**。默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：**1-100000**。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
