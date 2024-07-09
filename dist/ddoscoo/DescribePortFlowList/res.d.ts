export interface DescribePortFlowListResponse {
    /**
     * 本次请求的ID。
     * @example `FFC77501-BDF8-4BC8-9BF5-B295FBC3189B`
     */
    RequestId: string;
    /**
     * 查询到的流量数据。
     */
    PortFlowList: {
        /**
         * 返回数据的索引号。
         * @example `0`
         */
        Index: number;
        /**
         * 统计时间。时间戳格式，单位：秒。
         * @example `1582992000`
         */
        Time: number;
        /**
         * 入方向包转发率，单位：pps。
         * @example `2934`
         */
        InPps: number;
        /**
         * 入方向带宽，单位：bps。
         * @example `2176000`
         */
        InBps: number;
        /**
         * 访问流量来源地区。取值：
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
         * 出方向包转发率，单位：pps。
         * @example `5`
         */
        OutPps: number;
        /**
         * 攻击包转发率，单位：pps。
         * @example `0`
         */
        AttackPps: number;
        /**
         * 出方向带宽，单位：bps。
         * @example `4389`
         */
        OutBps: number;
        /**
         * 攻击带宽，单位：bps。
         * @example `0`
         */
        AttackBps: number;
        /**
         * 目的带宽，单位：bps。
         * @example `0`
         */
        SlaBpsDropBps: number;
        /**
         * 目的报文，单位：bps。
         * @example `0`
         */
        SlaPpsDropBps: number;
        /**
         * 目的新建连接数，单位：bps。
         * @example `0`
         */
        SlaCpsDropBps: number;
        /**
         * 目的并发连接数，单位：bps。
         * @example `0`
         */
        SlaConnDropBps: number;
        /**
         * 目的带宽包转发率，单位：pps。
         * @example `0`
         */
        SlaBpsDropPps: number;
        /**
         * 目的报文包转发率，单位：pps。
         * @example `0`
         */
        SlaPpsDropPps: number;
        /**
         * 目的新建连接数包转发率，单位：pps。
         * @example `0`
         */
        SlaCpsDropPps: number;
        /**
         * 目的并发连接数包转发率，单位：pps。
         * @example `0`
         */
        SlaConnDropPps: number;
    }[];
}
