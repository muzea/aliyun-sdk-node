export interface DeleteSecurityGroupRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 安全组ID。您可以调用[DescribeSecurityGroups](~~25556~~)查看安全组ID。
     * @example `sg-bp1fg655nh68xyz9****`
     */
    "SecurityGroupId": string;
}
