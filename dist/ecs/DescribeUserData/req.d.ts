export interface DescribeUserDataRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的实例ID。
     * @example `i-bp14bnftyqhxg9ij****`
     */
    "InstanceId": string;
}
