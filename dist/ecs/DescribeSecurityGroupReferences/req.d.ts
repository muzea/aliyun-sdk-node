export interface DescribeSecurityGroupReferencesRequest {
    /**
     * 安全组所属地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的第N个SecurityGroupId。N的取值范围：1~10
     * @example `sg-bp14vtedjtobkvi****`
     */
    "SecurityGroupId": string[];
}
