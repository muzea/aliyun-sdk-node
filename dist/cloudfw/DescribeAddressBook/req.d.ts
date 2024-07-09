export interface DescribeAddressBookRequest {
    /**
     * 请求消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，设置当前页面的页码。
     * 默认值为1，表示返回第1页数据。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 分页查询时，设置每页包含的地址簿的数量。
     * 默认值为10，表示每页包含10条结果。最大值为50。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 搜索条件，输入待查询地址簿信息。
     * @example `192.0.XX.XX`
     */
    "Query"?: string;
    /**
     * 地址簿的类型。取值：
     * - **ip**：IP地址簿。
     * - **domain**：域名地址簿。
     * - **port**：端口地址簿。
     * - **tag**：ECS标签地址簿。
     * - **allCloud**：云服务地址簿。
     * - **threat**：威胁情报地址簿。
     * > 不设置该参数表示查询IP地址簿和ECS标签地址簿。
     * @example `ip`
     */
    "GroupType"?: string;
    /**
     * 查询包含指定端口的地址簿。仅当**GroupType**参数的值为**port**时，该参数才会作为本次查询的条件。
     * @example `80`
     */
    "ContainPort"?: string;
}
