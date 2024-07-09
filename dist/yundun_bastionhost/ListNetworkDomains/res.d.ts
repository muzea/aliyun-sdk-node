export interface ListNetworkDomainsResponse {
    /**
     * 查询到的网络域列表。
     */
    NetworkDomains: {
        /**
         * 网络域的备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 是否为内置网络域。
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        Default: boolean;
        /**
         * 网络域的ID。
         * @example `2`
         */
        NetworkDomainId: string;
        /**
         * 网络域名称。
         * @example `test`
         */
        NetworkDomainName: string;
        /**
         * 网络域类型。取值：
         * - **Direct**：直连
         * - **Proxy**：代理
         * @example `Proxy`
         */
        NetworkDomainType: string;
        /**
         * 代理服务器信息。
         */
        ProxiesState: {
            /**
             * 代理服务器节点。取值：
             * - **Master**：主代理服务器
             * - **Slave**：备代理服务器
             * @example `Master`
             */
            NodeType: string;
            /**
             * 代理服务器状态。
             * - **Available**：可用
             * - **Unavailable**：不可用
             * @example `Available`
             */
            ProxyState: string;
        }[];
    }[];
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的网络域总数量。
     * @example `5`
     */
    TotalCount: number;
}
