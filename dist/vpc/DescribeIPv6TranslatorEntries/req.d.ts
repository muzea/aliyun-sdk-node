interface DescribeIPv6TranslatorEntriesRequest {
    /**
    *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * IPv6转换服务实例的ID。
    * @example `ipv6trans-bp1858ysxxxxxx`
    */ "Ipv6TranslatorId"?: string;
    "OwnerId"?: number;
    /**
    * 要查询的IPv6转换映射条目ID。
    * > 如果**Ipv6TranslatorId**参数和**Ipv6TranslatorEntryId**参数的值都为null，则返回所有IPv6转换映射条目信息。如果仅是**Ipv6TranslatorEntryId**参数的值为null，则返回当前IPv6转换服务实例下的所有IPv6转换映射条目信息。
    * @example `ipv6transentry-bp1g8bhrdexxxxx`
    */ "Ipv6TranslatorEntryId"?: string;
    /**
    *  Pv6转换映射条目的名称。
    * @example `entryname`
    */ "EntryName"?: string;
    /**
    * IPv6转换服务实例分配的IPv6地址。
    * @example `2400:3200:1600::xx`
    */ "AllocateIpv6Addr"?: string;
    /**
    *  IPv6转换服务实例分配的IPv6地址使用的端口。
    * @example `80`
    */ "AllocateIpv6Port"?: number;
    /**
    *  需要提供IPv6服务的公网IPv4地址
    * @example `47.99.xx.xx`
    */ "BackendIpv4Addr"?: string;
    /**
    *  需要提供IPv6服务的公网IPv4地址使用的端口。
    * @example `80`
    */ "BackendIpv4Port"?: number;
    /**
    *  转发数据的协议类型。
    * @example `tcp`
    */ "TransProtocol"?: string;
    /**
    * 是否开启访问控制。取值：**on|off**。
    * @example `off`
    */ "AclStatus"?: string;
    /**
    * 访问控制策略类型。取值：
    * - **white**：允许访问策略组中的IPv6地址访问后端服务。
    * - **black**：禁止访问策略组中的IPv6地址访问后端服务。
    * @example `white`
    */ "AclType"?: string;
    /**
    * 访问控制策略组ID。
    * @example `ipv6transacl-bp1de2xxxx`
    */ "AclId"?: string;
    /**
    *  列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `sha1111`
    */ "ClientToken"?: string;
}
export { DescribeIPv6TranslatorEntriesRequest };