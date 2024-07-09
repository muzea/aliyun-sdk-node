export interface DescribeDefenseCountStatisticsResponse {
    /**
     * 本次请求的ID。
     * @example `310A41FD-0990-5610-92E0-A6A55D7C6444`
     */
    RequestId: string;
    /**
     * 高级防护次数统计数据。
     */
    DefenseCountStatistics: {
        /**
         * 高级防护资源包中剩余可用的保险版高级防护次数。
         * @example `0`
         */
        FlowPackCountRemain: number;
        /**
         * 当前自然月可使用的高级防护次数（包含实例自带的高级防护和高级防护资源包提供的高级防护）的上限。
         * @example `20`
         */
        MaxUsableDefenseCountCurrentMonth: number;
        /**
         * 当前自然月已使用的高级防护总次数（包含实例自带的高级防护和高级防护资源包提供的高级防护）。
         * @example `0`
         */
        DefenseCountTotalUsageOfCurrentMonth: number;
        /**
         * 高级防护资源包中剩余可用的安全加速线路高级防护次数。
         * @example `0`
         */
        SecHighSpeedCountRemain: number;
    };
}
