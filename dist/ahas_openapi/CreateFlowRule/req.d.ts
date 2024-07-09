export interface CreateFlowRuleRequest {
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名，若为EDAS应用，则AppName为EDAS中的App ID，可在EDAS控制台“应用管理>基本信息”中查看对应的ID。
     * @example `ahas-demo`
     */
    "AppName": string;
    /**
     * 统计维度。0表示当前接口，1表示关联接口，2表示链路入口。
     * @example `0`
     */
    "RelationStrategy": number;
    /**
     * 流控规则的阈值，取值范围为≥0的整数。
     * @example `50`
     */
    "Threshold": number;
    /**
     * 规则是否开启，默认为false。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 资源名。不能超过1024个字符，且该资源名需要与接口详情页面的资源名称相对应。
     * @example `handleServiceA`
     */
    "Resource": string;
    /**
     * 来源应用，默认为default。
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
    "ControlBehavior": number;
    /**
     * 预热时间，单位秒。当controlBehavior值为1（预热启动）时，需要设置该字段。
     * @example `30`
     */
    "WarmUpPeriodSec"?: number;
    /**
     * 超时时间，单位毫秒。当controlBehavior值为2（排队等待）时，需要设置该字段。
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
