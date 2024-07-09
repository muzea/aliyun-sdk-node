export interface DescribeImageBaselineItemListRequest {
    /**
     * 镜像UUID。
     * @example `0b5c7193300da2070220038718ad****`
     */
    "ImageUuid": string;
    /**
     * 基线风险的修复状态。取值：
     * - **0**：未修复
     * - **1**：已修复
     * - **2**：待验证
     * - **3**：修复失败
     * @example `0`
     */
    "Status"?: string;
    /**
     * 基线分类的key。
     * @example `ak_leak`
     */
    "BaselineClassKey"?: string;
    /**
     * 基线名称的key。
     * @example `Access Key泄露`
     */
    "BaselineNameKey"?: string;
    /**
     * 分页查询时，当前页显示数据条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 扫描范围集合。
     */
    "ScanRange"?: string[];
    /**
     * 镜像UUID列表。
     */
    "Uuids"?: string[];
}
