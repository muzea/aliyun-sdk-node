export interface GetNetworkDomainResponse {
    /**
     * 网络域的详细信息。
     */
    NetworkDomain: {
        /**
         * 网络域的备注。
         * @example `comment`
         */
        Comment: string;
        /**
         * 是否为内置网络域。
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        Default: boolean;
        /**
         * 网络域ID。
         * @example `2`
         */
        NetworkDomainId: string;
        /**
         * 网络域名称。
         * @example `SSH代理`
         */
        NetworkDomainName: string;
        /**
         * 网络域类型。取值：
         * - Direct：直连
         * - Proxy：代理
         * @example `Proxy`
         */
        NetworkDomainType: string;
        /**
         * 代理服务器信息。
         */
        Proxies: {
            /**
             * 代理方式。取值：
             * - SSHProxy：SSH代理
             * - HTTPProxy：HTTP代理
             * - Socks5Proxy：Socks代理
             * @example `HTTPProxy`
             */
            ProxyType: string;
            /**
             * 代理服务器节点。取值：
             * - Master：主代理服务器
             * - Slave：备代理服务器
             * @example `Master`
             */
            NodeType: string;
            /**
             * 代理服务器地址。
             * @example `47.102.**.**`
             */
            Address: string;
            /**
             * 代理服务器端口。
             * @example `22`
             */
            Port: number;
            /**
             * 代理服务器账户名。
             * @example `root`
             */
            User: string;
            /**
             * 代理服务器是否设置密码。取值：
             * - **true**：设置密码
             * - **false**：未设置密码
             * @example `true`
             */
            HasPassword: boolean;
            /**
             * 代理服务器状态。
             * - **Available**：可用
             * - **Unavailable**：不可用
             * @example `Unavailable`
             */
            ProxyState: string;
            /**
             * 代理服务器状态错误码。
             * - CHECK_PWD_FAILED：密码错误，验密失败
             * - CHECK_PWD_TIMEOUT：验密超时
             * - CHECK_PWD_NETWORK_ERR：网络错误
             * - UNEXPECTED：未知错误
             * @example `CHECK_PWD_TIMEOUT`
             */
            ProxyStateErrorCode: string;
        }[];
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `05F59944-2E24-595C-B21A-8C9955E60FAF`
     */
    RequestId: string;
}
