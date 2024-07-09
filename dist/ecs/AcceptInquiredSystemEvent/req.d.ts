export interface AcceptInquiredSystemEventRequest {
    /**
     * 系统事件所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 系统事件ID。
     * @example `e-2zeielxl1qzq8slb****`
     */
    "EventId": string;
    /**
     * >该参数正在邀测中，暂不支持使用。
     * @example `hide`
     */
    "Choice"?: string;
}
