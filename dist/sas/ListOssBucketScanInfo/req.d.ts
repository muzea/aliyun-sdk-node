export interface ListOssBucketScanInfoRequest {
    /**
     * 指定分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * Bucket名称。
     * @example `iboxpublic****`
     */
    "BucketName"?: string;
    /**
     * 检测状态。取值：
     * - **1**：未检测过。
     * - **2**：全量检测中。
     * - **3**：增量检测中。
     * - **4**：检测过。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 是否检测出风险文件。取值：
     * - **0**：未检测出风险。
     * - **1**：有风险文件。
     * @example `1`
     */
    "HasRisk"?: number;
    /**
     * 模糊匹配的Bucket名称。
     * @example `test`
     */
    "FuzzBucketName"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
