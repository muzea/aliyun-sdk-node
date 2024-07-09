export interface DeleteVSwitchRequest {
    /**
     * 要删除的交换机的ID。
     * @example `vsw-asdfjlna****`
     */
    "VSwitchId": string;
    /**
     * 要删除的交换机的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
