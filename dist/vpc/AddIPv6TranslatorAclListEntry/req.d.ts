interface AddIPv6TranslatorAclListEntryRequest {
    /**
    * 访问控制策略组的地域。 您可以通过调用DescribeRegions接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  IP条目的访问控制策略组ID。
    * @example `ipv6transacl-bp1de2xxxx`
    */ "AclId": string;
    /**
    * 访问控制策略组条目中要添加的单个IPv6地址，或者IPv6地址段，如12ab:0:0:dc30::0102或12ab:0:0:dc30::/60。
    * @example `12ab:0:0:dc30::0102`
    */ "AclEntryIp": string;
    "OwnerId"?: number;
    /**
    * 访问控制策略组条目的备注信息，长度为2-100个字符，以大小字母或中文开头，可包含数字，"_"或"-"。
    * @example `clientIP1`
    */ "AclEntryComment"?: string;
}
export { AddIPv6TranslatorAclListEntryRequest };