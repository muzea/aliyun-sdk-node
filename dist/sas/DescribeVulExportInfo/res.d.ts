export interface DescribeVulExportInfoResponse {
    /**
     * 导出后Excel的下载链接。
     * @example `http://www.aliyun.com`
     */
    Link: string;
    /**
     * 导出进度百分比（%）。
     * @example `100`
     */
    Progress: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4C1AE3F3-18FA-4108-BXXX-AFA1A032756C`
     */
    RequestId: string;
    /**
     * 当前已导出数据的条数。
     * @example `1`
     */
    CurrentCount: number;
    /**
     * 导出结果提示信息。固定值：**success**。表示导出成功。
     * @example `success`
     */
    Message: string;
    /**
     * 导出的Excel文件名称。
     * @example `app_20210917`
     */
    FileName: string;
    /**
     * 导出的Excel表格中数据的总条数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 导出任务的状态。取值：
     * - **init**：导出初始化
     * - **exporting**：导出进行中
     * - **success**：导出成功
     * @example `success`
     */
    ExportStatus: string;
    /**
     * 漏洞导出任务ID。
     * @example `14356`
     */
    Id: number;
}
