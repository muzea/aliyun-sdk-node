interface DescribeACLsRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 访问控制集合ACL的ID。
    * 多个ID以逗号隔开，不填则查询region内所有ACL规则。
    * @example `acl-xhwhyuo43l*******`
    */ "AclIds"?: string;
    /**
    * ACL名称。
    * @example `test`
    */ "Name"?: string;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `1`
    */ "PageSize"?: number;
    /**
    * 列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeACLsRequest };