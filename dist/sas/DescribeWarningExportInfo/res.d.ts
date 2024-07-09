export interface DescribeWarningExportInfoResponse {
    /**
     * 导出后Excel的下载链接。
     * @example `https://eds.aliyun.com/notification/entitle/64b5c3e2-e52b-4d29-9617-e7e6d74XXXX`
     */
    Link: string;
    /**
     * 导出进度百分比（%）。
     * @example `100`
     */
    Progress: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `79CFF74D-E967-5407-8A78-EE03B925FDAA`
     */
    RequestId: string;
    /**
     * 当前已导出基线数据的条数。
     * @example `1`
     */
    CurrentCount: number;
    /**
     * 导出结果提示信息。固定值：**successful**。表示导出成功。
     * @example `successful`
     */
    Message: string;
    /**
     * 导出的Excel文件名称。
     * @example `app_20210917`
     */
    FileName: string;
    /**
     * 查询到的基线信息的总数量。
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
     * 基线导出任务ID。
     * @example `131231`
     */
    Id: number;
}
