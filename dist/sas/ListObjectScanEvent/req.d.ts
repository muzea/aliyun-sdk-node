export interface ListObjectScanEventRequest {
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 风险等级。取值：
     * - **high**：高危
     * - **medium**：中危
     * - **low**：低危
     * @example `low`
     */
    "RiskLevel"?: string;
    /**
     * 告警名称。
     * @example `WebShell`
     */
    "EventName"?: string;
    /**
     * 数据来源。取值：
     * - **API**：API检测
     * - **OSS**：OSS检测
     * @example `OSS`
     */
    "Source"?: string;
    /**
     * 文件在OSS Bucket中的存储Key。
     * @example `1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****`
     */
    "OssKey"?: string;
    /**
     * Bucket名称。
     * @example `ltrbuck****`
     */
    "BucketName"?: string;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 文件MD5值。
     * @example `0552c44e243abdea1729d4507bce****`
     */
    "Md5"?: string;
    /**
     * 异常事件发生时间的开始时间。
     * @example `1683603086000`
     */
    "TimeStart"?: number;
    /**
     * 异常事件发生时间的结束时间。
     * @example `1683862286000`
     */
    "TimeEnd"?: number;
    /**
     * 文件为压缩包子文件时，ParentEventId表示所在压缩包本身的告警。
     * @example `1`
     */
    "ParentEventId"?: number;
}
