interface DeleteIPv6TranslatorEntryRequest {
    /**
    *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `sha11112222`
    */ "ClientToken"?: string;
    /**
    *  要删除的IPv6转换服务映射条目ID。
    * @example `ipv6transentry-bp1g8bhrdexxxxx`
    */ "Ipv6TranslatorEntryId"?: string;
    /**
    * IPv6转换服务的实例ID。
    * > 如果您不指定**Ipv6TranslatorEntryId**参数，则删除指定实例下所有的映射条目。
    * @example `ipv6trans-bp1858ysxxxxxx`
    */ "Ipv6TranslatorId"?: string;
}
export { DeleteIPv6TranslatorEntryRequest };