export interface ModifyFlowRuleRequest {
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 规则ID。
     * @example `123`
     */
    "RuleId": number;
    /**
     * 统计维度。0表示当前接口，1表示关联接口，2表示链路入口。
     * @example `0`
     */
    "RelationStrategy"?: number;
    /**
     * 流控阈值。
     * @example `50`
     */
    "Threshold"?: number;
    /**
     * 来源应用。
     * @example `default`
     */
    "LimitOrigin"?: string;
    /**
     * 关联接口名、入口资源名。当统计维度relationStrategy值为1（关联接口）或2（链路入口）时，需要设置该字段。
     * @example `handleServiceB`
     */
    "RefResource"?: string;
    /**
     * 流控效果。0表示快速失败，1表示预热启动，2表示排队等待。
     * @example `0`
     */
    "ControlBehavior"?: string;
    /**
     * 预热时间。当controlBehavior值为1（预热启动）时，需要设置该字段。
     * @example `30`
     */
    "WarmUpPeriodSec"?: number;
    /**
     * 超时时间。当controlBehavior值为2（排队等待）时，需要设置该字段。
     * @example `2000`
     */
    "MaxQueueingTimeMs"?: number;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
    /**
     * 流控阈值模式。
     * @example `2`
     */
    "ThresholdMode"?: number;
}
