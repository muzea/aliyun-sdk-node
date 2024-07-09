export interface CancelSimulatedSystemEventsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 系统事件ID列表。可输入最多100个事件ID。
     * @example `e-xhskHun1256****`
     */
    "EventId": string[];
}
