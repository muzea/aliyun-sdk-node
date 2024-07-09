export interface DescribeFlowStatisticResponse {
    /**
     * 当前办公网络的可用云电脑数量。
     * @example `2`
     */
    DesktopCount: number;
    /**
     * 请求ID。
     * @example `269BDB16-2CD8-4865-84BD-11C40BC2****`
     */
    RequestId: string;
    /**
     * 云电脑粒度的流量统计记录列表。
     */
    DesktopFlowStatistic: {
        /**
         * 云电脑名称。
         * @example `desktop-1`
         */
        DesktopName: string;
        /**
         * 云电脑ID。
         * @example `ecd-8bslxqq0csytn****`
         */
        DesktopId: string;
        /**
         * 流量排名。
         * @example `1`
         */
        FlowRank: number;
        /**
         * 流量大小。单位：KB。
         * @example `1000`
         */
        FlowIn: string;
    }[];
}
