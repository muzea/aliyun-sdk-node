export interface DescribeExportInfoResponse {
    /**
     * 导出后Excel的下载链接。
     * @example `http://www.aliyun.com`
     */
    Link: string;
    /**
     * 导出进度百分比（%）。
     * @example `16`
     */
    Progress: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F3B45`
     */
    RequestId: string;
    /**
     * 当前已导出数据的条数。
     * @example `20`
     */
    CurrentCount: number;
    /**
     * 导出结果提示信息。固定值：**success**。表示导出成功。
     * @example `success`
     */
    Message: string;
    /**
     * 导出的Excel文件名称。
     * @example `health_check_export_20171123`
     */
    FileName: string;
    /**
     * 导出的Excel表格中数据的总条数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 导出任务的状态。
     * 取值：
     * - **init**：导出初始化
     * - **exporting**：导出进行中
     * - **success**：导出成功
     * @example `success`
     */
    ExportStatus: string;
    /**
     * 导出任务的ID。
     * @example `131231`
     */
    Id: number;
}
