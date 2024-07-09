export interface ReleaseCapacityReservationRequest {
    /**
     * 容量预定服务所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 容量预定服务ID。
     * @example `crp-bp67acfmxazb4****`
     */
    "PrivatePoolOptions.Id": string;
    /**
     * 是否对此次请求进行检索。取值：false，目前仅支持不检索本次请求，直接释放容量预定服务。
     * @example `false`
     */
    "DryRun"?: boolean;
}
