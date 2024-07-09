export interface DeleteVSwitchCidrReservationRequest {
    /**
     * 要删除的交换机预留网段的实例ID。
     * @example `vcr-bp1m12saqteraw3rp****`
     */
    "VSwitchCidrReservationId": string;
    /**
     * 交换机所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
