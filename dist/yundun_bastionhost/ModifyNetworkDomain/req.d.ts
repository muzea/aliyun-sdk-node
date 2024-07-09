export interface ModifyNetworkDomainRequest {
    /**
     * 要修改的网络域所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-x0r3hyr3f09`
     */
    "InstanceId": string;
    /**
     * 指定要修改的网络域所在堡垒机的区域ID。
     * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要修改的网络域ID。
     * @example `3`
     */
    "NetworkDomainId": string;
    /**
     * 指定修改后的网络域名称。
     * @example `test`
     */
    "NetworkDomainName"?: string;
    /**
     * 指定修改后的网络域类型。取值：
     * - **Direct**：直连
     * - **Proxy**：代理
     * @example `Proxy`
     */
    "NetworkDomainType"?: string;
    /**
     * 修改后的网络域备注信息。
     * @example `xxx`
     */
    "Comment"?: string;
    /**
     * 网络域中的代理服务器信息。
     */
    "Proxies"?: {
        /**
         * 修改后的代理方式。取值：
         * - **SSHProxy**：SSH代理
         * - **HTTPProxy**：HTTP代理
         * - **Socks5Proxy**：Socks代理
         * @example `HTTPProxy`
         */
        ProxyType: string;
        /**
         * 要修改的代理服务器节点。取值：
         * - **Master**：主代理服务器
         * - **Slave**：备代理服务器
         * @example `Slave`
         */
        NodeType: string;
        /**
         * 修改后的代理服务器地址。
         * @example `114.21**.**`
         */
        Address: string;
        /**
         * 修改后的代理服务器端口。
         * @example `22`
         */
        Port: number;
        /**
         * 修改后的代理服务器账户的密码。
         * @example `***`
         */
        Password: string;
        /**
         * 修改后的代理服务器的账户名。
         * @example `test`
         */
        User: string;
    }[];
}
