export interface DescribeRiskListCheckResultRequest {
    /**
     * 访问源IP地址。
     * @example `59.57.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，显示的当前页的页码。起始值为1，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 需要查询的云产品实例ID。多个ID使用英文逗号（,）隔开。
     * > 不传入实例ID时，调用该接口会返回空的风险项列表信息。
     */
    "InstanceIds"?: string[];
}
