export interface DescribeHcExportInfoResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3C2C94CF-ED08-50C0-BC72-C5029251****`
     */
    RequestId: string;
    /**
     * 导出文件的名称。
     * @example `health_check_export_2022****`
     */
    FileName: string;
    /**
     * 当前已导出数据的条数。
     * @example `148`
     */
    CurrentCount: number;
    /**
     * 导出文件的下载链接。
     * @example `https://hc-export.oss-cn-shanghai.aliyuncs.com/export_hc/health_check_export_20221222_1671699255808.zip?Expires=1672304056&OSSAccessKeyId=****&Signature=****`
     */
    Link: string;
    /**
     * 导出进度百分比（%）。
     * @example `89`
     */
    Progress: number;
    /**
     * 导出任务id。
     * @example `1082278`
     */
    Id: number;
    /**
     * 导出数据的总条数。
     * @example `624`
     */
    TotalCount: number;
    /**
     * 创建任务的时间。
     * @example `2022-11-03T15:15Z`
     */
    GmtCreate: number;
    /**
     * 导出任务的状态。取值：
     * - **exporting**：导出进行中
     * - **success**：导出成功
     * @example `exporting`
     */
    ResultStatus: string;
}
