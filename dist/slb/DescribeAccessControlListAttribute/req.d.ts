export interface DescribeAccessControlListAttributeRequest {
    /**
     * 访问控制策略组的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的访问控制策略组ID。
     * @example `acl-bp1ut10zzvh1y8dfs****`
     */
    "AclId": string;
    /**
     * 访问控制策略组的条目的备注信息。
     * @example `test`
     */
    "AclEntryComment"?: string;
    /**
     * 分页查询页码。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
