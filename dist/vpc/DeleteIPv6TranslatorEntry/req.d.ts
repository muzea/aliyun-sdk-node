export interface DeleteIPv6TranslatorEntryRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  要删除的IPv6转换服务映射条目ID。
     * @example `ipv6transentry-bp1g8bhrde****`
     */
    "Ipv6TranslatorEntryId"?: string;
    /**
     * IPv6转换服务的实例ID。
     * > 如果您不指定**Ipv6TranslatorEntryId**参数，则删除指定实例下所有的映射条目。
     * @example `ipv6trans-bp1858ys****`
     */
    "Ipv6TranslatorId"?: string;
}
