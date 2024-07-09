export interface SetAccessControlListAttributeRequest {
    /**
     * 访问控制策略组的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制策略组ID。
     * @example `acl-bp1l0kk4gxce43kzet04s`
     */
    "AclId": string;
    /**
     * 访问控制策略组名称。
     * @example `test1`
     */
    "AclName": string;
}
