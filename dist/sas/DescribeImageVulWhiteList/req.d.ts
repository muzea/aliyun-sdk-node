export interface DescribeImageVulWhiteListRequest {
    /**
     * 要查询的漏洞的别名。
     * @example `CVE-2007-5686:rpath_linux`
     */
    "AliasName"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 白名单的来源。取值：
     * - **image**：镜像
     * - **agentless**：agentless
     * @example `image`
     */
    "Source"?: string;
}
