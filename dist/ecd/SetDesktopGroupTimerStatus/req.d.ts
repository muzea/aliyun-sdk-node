export interface SetDesktopGroupTimerStatusRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-fgxsniu6at****`
     */
    "DesktopGroupId": string;
    /**
     * 定时任务类型。
     * @example `1`
     */
    "TimerType": number;
    /**
     * 定时任务状态。
     * @example `1`
     */
    "Status"?: number;
}
