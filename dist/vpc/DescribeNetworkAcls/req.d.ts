interface DescribeNetworkAclsRequest {
    /**
    * 网络ACL所属的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 网络ACL的ID。
    * @example `nacl-bp1lhl0taikrxxxxxxxx`
    */ "NetworkAclId"?: string;
    /**
    * 网络ACL的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `acl-1`
    */ "NetworkAclName"?: string;
    /**
    * 网络ACL关联的VPC的ID。
    * @example `vpc-123456`
    */ "VpcId"?: string;
    /**
    * 关联实例的类型。
    * `ResourceType`和`ResourceId`需要同时指定才生效。
    * @example `VSwitch`
    */ "ResourceType"?: string;
    /**
    * 关联实例的ID。
    * `ResourceType`和`ResourceId`需要同时指定才生效。
    * @example `vsw-bp1de348lntdwxxxxxxxx`
    */ "ResourceId"?: string;
    /**
    * 列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
    "OwnerId"?: number;
    /**
    * @example `123`
    */ "ClientToken"?: string;
}
export { DescribeNetworkAclsRequest };