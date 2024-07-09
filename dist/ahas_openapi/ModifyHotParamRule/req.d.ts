export interface ModifyHotParamRuleRequest {
    /**
     * 统计维度，0表示并发数，1表示通过请求数。
     * @example `1`
     */
    "MetricType"?: number;
    /**
     * 热点规则中针对每个热点参数的阈值，取值范围为≥0的整数。
     * @example `20`
     */
    "Threshold"?: number;
    /**
     * 规则是否开启。
     * @example `false`
     */
    "Enable"?: boolean;
    /**
     * 规则ID。
     * @example `123`
     */
    "RuleId": number;
    /**
     * 参数位置索引，埋点传入参数的索引位置。对应`SphU.entry(xxx,args)`中的参数索引位置。
     * 例如：`SphU.entry(resourceName,Entry Type.IN,1,paramA,paramB)`埋点中，`paramA`的参数索引是0，`paramB`的参数索引是1。
     * @example `1`
     */
    "ParamIdx"?: number;
    /**
     * 统计周期时间，单位秒。
     * @example `1`
     */
    "StatDurationSec"?: number;
    /**
     * 流控效果，0表示快速失败，2表示排队等待。
     * @example `0`
     */
    "ControlBehavior"?: number;
    /**
     * 缓冲请求数，流控效果为快速失败时需要设置。
     * @example `2`
     */
    "BurstCount"?: number;
    /**
     * 超时时间，单位秒。流控效果为排队等待时需要设置。
     * @example `3000`
     */
    "MaxQueueingTimeMs"?: number;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
