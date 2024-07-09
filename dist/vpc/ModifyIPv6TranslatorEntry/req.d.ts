export interface ModifyIPv6TranslatorEntryRequest {
    /**
     *  IPv6转换服务实例的地域。 您可以通过调用 DescribeRegions接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  IPv6转换服务映射条目ID。
     * @example `ipv6trans-bp1858ys****`
     */
    "Ipv6TranslatorEntryId": string;
    /**
     *  IPv6转换映射条目的名称。长度为2~100个字符，必须以字母或中文开头，可包含数字，英文句号（.），下划线（_）和短划线（-）。但不能以http:// 或https://开头。
     * @example `entry1`
     */
    "EntryName"?: string;
    /**
     *  IPv6转换映射条目的描述信息。长度为2~100个字符，必须以字母或中文开头，可包含数字，英文句号（.），下划线（_）和短划线（-）。但不能以http:// 或https://开头。
     * @example `entrydescription`
     */
    "EntryDescription"?: string;
    /**
     *  IPv6转换服务实例分配的IPv6地址的使用端口。
     * @example `80`
     */
    "AllocateIpv6Port"?: number;
    /**
     *  需要提供IPv6服务的公网IPv4地址（IPv4-only的服务器的IPv4地址）。
     * @example `47.11.XX.XX`
     */
    "BackendIpv4Addr"?: string;
    /**
     * 需要提供IPv6服务的公网IPv4地址的端口。
     * @example `80`
     */
    "BackendIpv4Port"?: number;
    /**
     * 协议类型。取值：
     * - **tcp**：转发TCP协议的报文。
     * - **udp**：转发UDP协议的报文。
     * @example `tcp`
     */
    "TransProtocol"?: string;
    /**
     * IPv6转换映射条目的带宽峰值。单位：Mbps。取值：
     * - **-1**（默认值）：不限制IPv6转换映射条目的带宽峰值。
     * - **1**~**200**：改映射条目的带宽值。
     * > 所有IPv6转换映射条目的带宽峰值之和不能超过实例的带宽峰值。
     * @example `10`
     */
    "EntryBandwidth"?: number;
    /**
     * 是否开启访问控制。取值：
     * - **on**：开启。
     * - **off**：不开启。
     * @example `off`
     */
    "AclStatus"?: string;
    /**
     * 访问控制策略类型：
     * - **white**：允许访问策略组中的IPv6地址访问后端服务。
     * - **black**：禁止访问策略组中的IPv6地址访问后端服务。
     * @example `white`
     */
    "AclType"?: string;
    /**
     * 关联的访问控制策略组ID。
     * @example `ipv6transacl-bp1de27sou71g0lf****`
     */
    "AclId"?: string;
}
