export interface DescribeWebLockBindListRequest {
    /**
     * 访问源的IP地址。
     * @example `116.30.XX.XX`
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
     * 服务器的模糊匹配字段，可以是服务器名称或IP地址。
     * @example `192.168.XX.XX`
     */
    "Remark"?: string;
    /**
     * 指定需要查看的服务器的防护状态。取值：
     * - **on**：已开启防护。
     * - **off**：已关闭防护。
     * @example `on`
     */
    "Status"?: string;
    /**
     * 分页查询时，显示的当前页的页码。起始值为1，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
}
