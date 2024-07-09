export interface DescribeBackupSummaryRequest {
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `ld-bp169l540vc6c****`
     */
    "ClusterId": string;
    /**
     * 实例列表的页码，起始值为1，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页最多可显示的行数，最大值为100，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
