export interface ListCommonAreasRequest {
    /**
     * 接入全球加速服务的IP地址协议，取值：
     * - **IPv4**（默认值）：IPv4地址协议，即查询支持IPv4的地域。
     * - **IPv6**：IPv6地址协议，即查询支持IPv6的地域。
     * @example `IPv4`
     */
    "IpVersion"?: string;
    /**
     * 是否为全球加速支持的加速地域。
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `true`
     */
    "IsIpSet"?: boolean;
    /**
     * 是否为全球加速支持的终端节点组地域。
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `true`
     */
    "IsEpg"?: boolean;
}
