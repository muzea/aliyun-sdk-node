interface RemoveIPv6TranslatorAclListEntryRequest {
    /**
    * 访问控制策略组的地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制策略条目所属的访问控制策略组ID。
    * @example `ipv6transacl-bp1de2xxxx`
    */ "AclId": string;
    /**
    * 要删除的访问控制策略条目ID。
    * @example `ipv6transaclentry-bp105jrsxxxx`
    */ "AclEntryId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `sha123456`
    */ "ClientToken"?: string;
}
export { RemoveIPv6TranslatorAclListEntryRequest };