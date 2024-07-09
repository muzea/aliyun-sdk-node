export interface DescribeSecurityStatInfoResponse {
    /**
     * 本次查询是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A3E61730-85E2-4789-8017-B9B1B70F0568`
     */
    RequestId: string;
    /**
     * 待处理的告警数据的统计详情。
     */
    SecurityEvent: {
        /**
         * 当天发生的告警级别为**可疑**的告警个数。
         * @example `148`
         */
        SuspiciousCount: number;
        /**
         * 当天发生的告警级别为**紧急**的告警个数。
         * @example `404`
         */
        SeriousCount: number;
        /**
         * 当天检测到的告警级别为**提醒**的告警个数。
         * @example `0`
         */
        RemindCount: number;
        /**
         * 当天待处理的告警的总数量。
         * @example `552`
         */
        TotalCount: number;
        /**
         * 各个统计时间点对应的待处理告警的个数集合。
         */
        ValueArray: string[];
        /**
         * 相同告警统计时间段集合。
         */
        TimeArray: string[];
        /**
         * 各个统计时间点发生的告警级别为提醒的告警统计个数集合。
         */
        RemindList: string[];
        /**
         * 待处理告警参与统计的告警级别集合。
         */
        LevelsOn: string[];
        /**
         * 待处理告警趋势图的统计时间点集合。
         */
        DateArray: string[];
        /**
         * 各个统计时间点发生的告警级别为可疑的告警事件的统计个数集合。
         */
        SuspiciousList: string[];
        /**
         * 各个统计时间点发生的告警级别为紧急的告警事件的统计个数集合。
         */
        SeriousList: string[];
    };
    /**
     * 攻击次数统计详细信息。
     */
    AttackEvent: {
        /**
         * 当天的攻击次数。
         * @example `1096`
         */
        TotalCount: number;
        /**
         * 攻击次数趋势图的统计时间点集合。
         */
        DateArray: string[];
        /**
         * 各个统计时间点对应的攻击次数集合。
         */
        ValueArray: string[];
    };
    /**
     * 基线问题统计的详细信息。
     */
    HealthCheck: {
        /**
         * 当天高危风险基线问题的个数。
         * @example `10`
         */
        HighCount: number;
        /**
         * 当天低危风险基线问题的个数。
         * @example `0`
         */
        LowCount: number;
        /**
         * 当天基线问题的总数。
         * @example `32`
         */
        TotalCount: number;
        /**
         * 当天中危风险基线问题的个数。
         * @example `21`
         */
        MediumCount: number;
        /**
         * 各个统计时间点对应的基线总数集合。
         */
        ValueArray: string[];
        /**
         * 基线统计时间段集合。
         */
        TimeArray: string[];
        /**
         * 参与统计的基线的风险级别列表集合。
         */
        LevelsOn: string[];
        /**
         * 各个统计时间点发生的低危风险基线问题的个数集合。
         */
        LowList: string[];
        /**
         * 各个统计时间点发生的中危风险基线问题的个数集合。
         */
        MediumList: string[];
        /**
         * 基线问题趋势图的统计时间点集合。
         */
        DateArray: string[];
        /**
         * 各个统计时间点对应的高危风险基线的个数集合。
         */
        HighList: string[];
    };
    /**
     * 待修复漏洞统计信息。
     */
    Vulnerability: {
        /**
         * 当天待修复漏洞紧急程度为**低**的漏洞个数。
         * @example `0`
         */
        NntfCount: number;
        /**
         * 当天待修复漏洞紧急程度为**中**的漏洞个数。
         * @example `275`
         */
        LaterCount: number;
        /**
         * 当天待修复漏洞个数。
         * @example `384`
         */
        TotalCount: number;
        /**
         * 当天待修复漏洞紧急程度为**高**的漏洞个数。
         * @example `109`
         */
        AsapCount: number;
        /**
         * 各个统计时间点对应的待修复漏洞紧急程度为低的统计个数集合。
         */
        NntfList: string[];
        /**
         * 各个统计时间点对应的待修复漏洞紧急程度为高的统计个数集合。
         */
        AsapList: string[];
        /**
         * 各个统计时间点对应的待修复漏洞的个数集合。
         */
        ValueArray: string[];
        /**
         * 统计待修复漏洞的时间段集合。
         */
        TimeArray: string[];
        /**
         * 待修复漏洞参与统计的漏洞紧急程度集合。
         */
        LevelsOn: string[];
        /**
         * 各个统计时间点对应的待修复漏洞紧急程度为中的统计个数集合。
         */
        LaterList: string[];
        /**
         * 待修复漏洞趋势图的统计时间点集合。
         */
        DateArray: string[];
    };
}
