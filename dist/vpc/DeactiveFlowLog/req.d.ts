export interface DeactiveFlowLogRequest {
    /**
     * 流日志所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 流日志ID。
     * @example `fl-m5e8vhz2t21sel1nq****`
     */
    "FlowLogId": string;
}
