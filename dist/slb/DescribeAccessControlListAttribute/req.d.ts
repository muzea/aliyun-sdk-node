interface DescribeAccessControlListAttributeRequest {
    /**
    * 访问控制策略组的地域ID。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要查询的访问控制策略组ID。
    * @example `acl-bp1l0kk4gxce43kzet04s`
    */ "AclId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 访问控制策略组的条目的备注信息。
    * @example `test`
    */ "AclEntryComment"?: string;
}
export { DescribeAccessControlListAttributeRequest };