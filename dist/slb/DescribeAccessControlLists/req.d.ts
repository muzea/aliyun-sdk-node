interface DescribeAccessControlListsRequest {
    /**
    * 访问控制策略组的地域ID。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 访问控制策略组名称。
    * @example `rule1`
    */ "AclName"?: string;
    /**
    * 访问控制策略组绑定的实例的IP类型。取值：
    * - **ipv4**：负载均衡实例的IP地址是IPv4类型。
    * - **ipv6**：负载均衡实例的IP地址是IPv6类型。
    * @example `ipv4`
    */ "AddressIPVersion"?: string;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 企业资源组ID。
    * @example `rg-atstuj3rtoptyui`
    */ "ResourceGroupId"?: string;
    "Tag"?: string[];
}
export { DescribeAccessControlListsRequest };