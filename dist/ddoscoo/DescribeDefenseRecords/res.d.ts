export interface DescribeDefenseRecordsResponse {
    /**
     * 高级防护总次数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc`
     */
    RequestId: string;
    /**
     * 高级防护日志记录。
     */
    DefenseRecords: {
        /**
         * 防护结束时间。时间戳格式，单位：毫秒。
         * @example `1583683200000`
         */
        EndTime: number;
        /**
         * 高级防护的状态。取值：
         * - **0**：使用中
         * - **1**：已使用
         * @example `0`
         */
        Status: number;
        /**
         * 防护开始时间。时间戳格式，单位：毫秒。
         * @example `1582992000000`
         */
        StartTime: number;
        /**
         * 被攻击次数。
         * @example `2`
         */
        EventCount: number;
        /**
         * DDoS高防实例ID。
         * @example `ddoscoo-cn-mp91j1ao****`
         */
        InstanceId: string;
        /**
         * 攻击峰值。单位：bps。
         * @example `6584186000`
         */
        AttackPeak: number;
    }[];
}
