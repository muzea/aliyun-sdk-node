export interface DescribeReadDBInstanceDelayResponse {
    /**
     * 主实例ID。
     * @example `rm-bp****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `F1BDDEA8-452D-450B-AB10-CD5C5BAFC5DF`
     */
    RequestId: string;
    /**
     * 延迟时间，单位为秒。
     * @example `0`
     */
    DelayTime: number;
    /**
     * 只读实例ID。
     * @example `rr-bp****`
     */
    ReadDBInstanceId: string;
    Items: {
        /**
         * 延迟信息列表。
         */
        Items: {
            /**
             * 主实例ID。
             * @example `rm-bp****`
             */
            DBInstanceId: string;
            ReadonlyInstanceDelay: {
                /**
                 * 预写式日志（WAL）延迟信息列表。
                 * >仅PostgreSQL返回此参数。
                 */
                ReadonlyInstanceDelay: {
                    /**
                     * 预写式日志（WAL）回写延迟空间。单位：MB。
                     * @example `0`
                     */
                    WriteLatency: string;
                    /**
                     * 预写式日志（WAL）持久化延迟空间。单位：MB。
                     * @example `0`
                     */
                    FlushLatency: string;
                    /**
                     * 只读实例ID。
                     * @example `rr-bp****`
                     */
                    ReadDBInstanceName: string;
                    /**
                     * 预写式日志（WAL）回写延迟时间。单位：秒（s）。
                     * @example `0`
                     */
                    WriteLag: string;
                    /**
                     * 预写式日志（WAL）持久化延迟时间。单位：秒（s）。
                     * @example `0`
                     */
                    FlushLag: string;
                    /**
                     * 预写式日志（WAL）发送延迟空间。单位：MB。
                     * @example `0`
                     */
                    SendLatency: string;
                    /**
                     * 预写式日志（WAL）回放延迟时间。单位：秒（s）。
                     * @example `0`
                     */
                    ReplayLag: string;
                    /**
                     * 预写式日志（WAL）回放延迟空间。单位：MB。
                     * @example `0`
                     */
                    ReplayLatency: string;
                }[];
            };
            ReadDelayTimes: {
                /**
                 * 延迟时间列表。
                 */
                ReadDelayTime: string[];
            };
            ReadDBInstanceNames: {
                /**
                 * 只读实例的信息列表。
                 */
                ReadDBInstanceName: string[];
            };
        }[];
    };
}
