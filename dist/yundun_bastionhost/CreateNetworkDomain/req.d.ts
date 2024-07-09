export interface CreateNetworkDomainRequest {
    /**
     * 指定要创建网络域的堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-lbj3bw4ma02`
     */
    "InstanceId": string;
    /**
     * 指定要创建网络域的堡垒机的地域ID。
     * > 区域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要创建的网络域名称，最大128字符。
     * @example `SSH代理`
     */
    "NetworkDomainName": string;
    /**
     * 指定要创建的网络域类型。取值：
     * - Direct：直连，表示堡垒机直接和资产网络连通，不经过中间代理服务器。
     * - Proxy：代理，资产所在网络与堡垒机网络不通的情况下，可以通过代理服务器转发网络请求，实现对不同网络环境下的资产进行运维。
     * @example `Proxy`
     */
    "NetworkDomainType": string;
    /**
     * 网络域的备注。最多500字符。
     * @example `comment`
     */
    "Comment"?: string;
    /**
     * 代理服务器信息。
     */
    "Proxies"?: {
        /**
         * 代理方式。取值：
         * - SSHProxy：SSH代理
         * - HTTPProxy：HTTP代理
         * - Socks5Proxy：Socks代理
         * @example `SSHProxy`
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
         * @example `47.104.**.**`
         */
        Address: string;
        /**
         * 代理服务器端口。
         * @example `22`
         */
        Port: number;
        /**
         * 代理服务器主机账户。
         * @example `root`
         */
        User: string;
        /**
         * Base64处理后的代理服务器账户的密码。
         * @example `UWdi******Ng==`
         */
        Password: string;
    }[];
}
