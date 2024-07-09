export interface DescribeHybridMonitorNamespaceListRequest {
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 搜索关键字。
     * @example `aliyun`
     */
    "Keyword"?: string;
    /**
     * 指标仓库名称。
     * 格式：由大写字母、小写字母、数字和短划线（-）组成。
     * @example `aliyun-test`
     */
    "Namespace"?: string;
    /**
     * 是否显示阿里云产品的数据接入任务的配置详情和非阿里云产品的数据接入任务数量。取值：
     * - true：显示。
     * - false（默认值）：不显示。
     * @example `false`
     */
    "ShowTaskStatistic"?: boolean;
}
