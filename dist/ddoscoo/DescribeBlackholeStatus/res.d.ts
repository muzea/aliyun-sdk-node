export interface DescribeBlackholeStatusResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * DDoS高防实例的黑洞状态信息。
     */
    BlackholeStatus: {
        /**
         * 黑洞结束时间。时间戳格式，单位：秒。
         * @example `1540196323`
         */
        EndTime: number;
        /**
         * 黑洞开始时间。时间戳格式，单位：秒。
         * @example `1540195323`
         */
        StartTime: number;
        /**
         * DDoS高防实例的IP。
         * @example `203.***.***.132`
         */
        Ip: string;
        /**
         * 黑洞状态。取值：
         * - **blackhole**：黑洞中
         * - **normal**：正常
         * @example `blackhole`
         */
        BlackStatus: string;
    }[];
}
