export interface RemoveAccessControlListEntryRequest {
    /**
     * 访问控制策略组的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制策略组ID。
     * @example `acl-bp1l0kk4gxce43k******`
     */
    "AclId": string;
    /**
     * 设置访问控制策略组。取值：
     * * **entry**：访问控制策略组中的IP条目，可以指定IP地址或IP地址段（CIDR block），多个IP地址或地址段之间用半角逗号（,）隔开。
     * * **comment**：访问控制策略组备注说明。
     * @example `[{"entry":"10.0.10.0/24","comment":"privaterule1"}]`
     */
    "AclEntrys"?: string;
}
