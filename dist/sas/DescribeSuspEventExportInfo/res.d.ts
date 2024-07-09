export interface DescribeSuspEventExportInfoResponse {
    /**
     * 导出后Excel的下载链接。
     * @example `http://suspicious-xxxxxxx.oss-cn-shanghai.aliyuncs.com/xxxxxxxxxxx/suspicious_event_20221221_1671590525269.zip?Expires=1671594125&OSSAccessKeyId=LTAIxxxxxxxxxxxxxx&Signature=xxxxxxxxxxxxxxxxxx`
     */
    Link: string;
    /**
     * 导出任务类型，固定为 suspiciousEvent。
     * @example `suspiciousEvent`
     */
    Type: string;
    /**
     * 异常事件的导出进度百分比。
     * @example `100`
     */
    Progress: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578AXXXXX`
     */
    RequestId: string;
    /**
     * 创建时间。
     * @example `2022-12-20T15:18Z`
     */
    GmtCreate: number;
    /**
     * 导出的文件名称。
     * @example `suspicious_event_20221221_1671590521234.zip`
     */
    FileName: string;
    /**
     * 异常事件的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 修改时间。
     * @example `2022-12-20T15:18Z`
     */
    GmtModified: number;
    /**
     * 异常事件处理状态。取值包括：
     * - **exporting**：处理中
     * - **success**：处理成功
     * - **failed**：处理失败
     * - **pending**：等待中
     * @example `success`
     */
    ExportStatus: string;
    /**
     * 异常事件的导出任务id。
     * @example `11`
     */
    Id: number;
    /**
     * 异常事件的导出参数。
     * @example `id,eventSubType,eventDetail,level,status,ip,instanceName,desc,lastTime,operateTime,note`
     */
    Properties: string;
}
