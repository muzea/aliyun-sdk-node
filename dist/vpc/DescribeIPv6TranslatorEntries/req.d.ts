export interface DescribeIPv6TranslatorEntriesRequest {
    /**
     *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPv6转换服务实例的ID。
     * @example `ipv6trans-bp1858ysxx****`
     */
    "Ipv6TranslatorId"?: string;
    /**
     * 要查询的IPv6转换映射条目ID。
     * > 如果**Ipv6TranslatorId**参数和**Ipv6TranslatorEntryId**参数的值都为空，则返回所有IPv6转换映射条目信息。如果仅是**Ipv6TranslatorEntryId**参数的值为空，则返回当前IPv6转换服务实例下的所有IPv6转换映射条目信息。
     * @example `ipv6transentry-bp1g8bhrde****`
     */
    "Ipv6TranslatorEntryId"?: string;
    /**
     *  Pv6转换映射条目的名称。
     * @example `entryname`
     */
    "EntryName"?: string;
    /**
     * IPv6转换服务实例分配的IPv6地址。
     * @example `2400:3200:1600::XX`
     */
    "AllocateIpv6Addr"?: string;
    /**
     *  IPv6转换服务实例分配的IPv6地址使用的端口。
     * @example `80`
     */
    "AllocateIpv6Port"?: number;
    /**
     *  需要提供IPv6服务的公网IPv4地址
     * @example `47.99.XX.XX`
     */
    "BackendIpv4Addr"?: string;
    /**
     *  需要提供IPv6服务的公网IPv4地址使用的端口。
     * @example `80`
     */
    "BackendIpv4Port"?: number;
    /**
     *  转发数据的协议类型。
     * @example `tcp`
     */
    "TransProtocol"?: string;
    /**
     * 是否开启访问控制。取值：
     * - **on**：开启。
     * - **off**：不开启。
     * @example `off`
     */
    "AclStatus"?: string;
    /**
     * 访问控制策略类型。取值：
     * - **white**：允许访问策略组中的IPv6地址访问后端服务。
     * - **black**：禁止访问策略组中的IPv6地址访问后端服务。
     * @example `white`
     */
    "AclType"?: string;
    /**
     * 访问控制策略组ID。
     * @example `ipv6transacl-bp1de2****`
     */
    "AclId"?: string;
    /**
     *  列表的页码，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
