export interface DescribeReservedInstanceAutoRenewAttributeRequest {
    /**
     * 预留实例券所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 预留实例券ID。
     */
    "ReservedInstanceId"?: string[];
}
