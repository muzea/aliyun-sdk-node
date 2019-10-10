interface DescribeIPv6TranslatorAclListsRequest {
    /**
    * 访问控制策略组的地域。 您可以通过调用DescribeRegions接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    *  访问控制策略组ID。
    * @example `ipv6transacl-bp1de2xxxx`
    */ "AclId"?: string;
    /**
    * 列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    *  访问控制策略组的名称。
    * @example `acl1`
    */ "AclName"?: string;
}
export { DescribeIPv6TranslatorAclListsRequest };