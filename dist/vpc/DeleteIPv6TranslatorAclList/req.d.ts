interface DeleteIPv6TranslatorAclListRequest {
    /**
    *  IPv6转换服务实例的地域。 您可以通过调用 DescribeRegions接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  要删除的访问控制策略组ID。
    * @example `ipv6transacl-bp1de2xxxx`
    */ "AclId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `sha123456`
    */ "ClientToken"?: string;
}
export { DeleteIPv6TranslatorAclListRequest };