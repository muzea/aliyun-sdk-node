export interface BatchDescribeCdnIpInfoRequest {
    /**
     * 待查询的IP地址列表参数，IP地址之间用半角逗号（,）分隔，一次性最多查询20个IP地址。
     * >- IPv4举例：192.0.2.1。
     * >- IPv6举例：2001:db8:ffff:ffff:ffff:****:ffff。
     * @example `111.XXX.XXX.230,47.XXX.XXX.243`
     */
    "IpAddrList": string;
    /**
     * 查询结果语言控制。取值：
     * - **zh**（默认值）：简体中文。
     * - **en**：英文。
     * @example `en`
     */
    "Language"?: string;
}
