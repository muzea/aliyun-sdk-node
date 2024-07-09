export interface DescribeDDoSEventsResponse {
    /**
     * 攻击事件总数。
     * @example `1`
     */
    Total: number;
    /**
     * 本次请求的ID。
     * @example `0CA72AF5-1795-4350-8C77-50A448A2F334`
     */
    RequestId: string;
    /**
     * DDoS攻击事件列表。
     */
    DDoSEvents: {
        /**
         * 攻击结束时间。时间戳格式，单位：秒。
         * @example `1583933330`
         */
        EndTime: number;
        /**
         * 攻击开始时间。时间戳格式，单位：秒。
         * @example `1583933277`
         */
        StartTime: number;
        /**
         * 攻击事件类型。取值：
         * - **defense**：清洗事件。
         * - **blackhole**：黑洞事件。
         * @example `blackhole`
         */
        EventType: string;
        /**
         * 攻击来源地区。取值：
         * - **cn**：中国内地。
         * - **alb-ap-northeast-1-gf-x**：日本。
         * - **alb-ap-southeast-gf-x**：新加坡。
         * - **alb-cn-hongkong-gf-x**：中国香港。
         * - **alb-eu-central-1-gf-x**：德国。
         * - **alb-us-west-1-gf-x**：美国西部。
         * >**cn**以外的取值只有在DDoS高防（国际）服务（**RegionId**为**ap-southeast-1**）中提供。
         * @example `cn`
         */
        Region: string;
        /**
         * 被攻击IP。
         * @example `203.***.***.132`
         */
        Ip: string;
        /**
         * 被攻击端口。
         * @example `80`
         */
        Port: string;
        /**
         * 攻击流量带宽大小。单位：bps。
         * @example `0`
         */
        Bps: number;
        /**
         * 攻击流量包转发率。单位：pps。
         * @example `0`
         */
        Pps: number;
    }[];
}
