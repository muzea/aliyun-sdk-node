export interface ListAccessPointNetworkQualitiesResponse {
    /**
     * 接入点网络质量信息。
     */
    AccessPointNetworkQualities: {
        /**
         * 丢包率。
         * @example `0.00%`
         */
        Loss: string;
        /**
         * 时延。单位：毫秒。
         * @example `4.98`
         */
        Rtt: string;
        /**
         * 接入点ID。
         * @example `115`
         */
        Id: number;
    }[];
    /**
     * 请求ID。
     * @example `8E8E8C86-1404-122A-A1BB-84BBC2E9A4B1`
     */
    RequestId: string;
}
