export interface ReleaseEipAddressRequest {
    /**
     * 要释放的EIP所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要释放的EIP的ID。
     * @example `eip-2zeerraiwb7uj6i0d****`
     */
    "AllocationId": string;
}
