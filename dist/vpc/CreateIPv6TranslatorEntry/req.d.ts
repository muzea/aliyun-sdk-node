export interface CreateIPv6TranslatorEntryRequest {
    /**
     *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  IPv6转换服务的实例ID。
     * @example `ipv6trans-bp1858ys57xxxxxx`
     */
    "Ipv6TranslatorId": string;
    /**
     *  IPv6转换映射条目的名称。长度为 2~100个字符，必须以字母或中文开头，可包含数字，半角句点（.），下划线（_）和短划线（-）。但不能以`http://`或`https://`开头。
     * @example `name1`
     */
    "EntryName"?: string;
    /**
     * IPv6转换映射条目的描述。
     * @example `description`
     */
    "EntryDescription"?: string;
    /**
     *  IPv6转换服务实例分配的IPv6地址的使用端口。
     * @example `80`
     */
    "AllocateIpv6Port": number;
    /**
     *  需要提供IPv6服务的公网IPv4地址（IPv4-only的服务器的IPv4地址）。
     * @example `46.22.xx.xx`
     */
    "BackendIpv4Addr": string;
    /**
     * 需要提供IPv6服务的公网IPv4地址的端口。
     * @example `80`
     */
    "BackendIpv4Port": number;
    /**
     * 协议类型。取值：
     * - **tcp**：转发TCP协议的报文。
     * - **udp**：转发UDP协议的报文。
     * @example `tcp`
     */
    "TransProtocol": string;
    /**
     * IPv6转换映射条目的带宽峰值。取值：
     *
     * - -1（默认值）：不限制IPv6转换映射条目的带宽峰值。
     * - 1-200Mbps：该映射条目的带宽值。
     * > 所有IPv6转换映射条目的带宽峰值之和不能超过实例的带宽峰值。
     * @example `2`
     */
    "EntryBandwidth"?: number;
    /**
     * 是否开启访问控制。取值：
     * - **on**：是。
     * - **off**：否。
     * @example `on`
     */
    "AclStatus"?: string;
    /**
     * 是否开启访问控制：
     * - **white**：允许访问策略组中的IPv6地址访问后端服务。
     * - **black**：禁止访问策略组中的IPv6地址访问后端服务。
     * @example `white`
     */
    "AclType"?: string;
    /**
     * 关联的访问控制策略组ID。
     * @example `ipv6transacl-bp1g8bhrdexnrxxxx`
     */
    "AclId"?: string;
}
