interface DescribeIPv6TranslatorAclListAttributesRequest {
    /**
    * 访问控制策略组的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制策略组ID。
    * @example `ipv6transacl-bp1de2xxxx`
    */ "AclId": string;
    "OwnerId"?: number;
    /**
    * 列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeIPv6TranslatorAclListAttributesRequest };