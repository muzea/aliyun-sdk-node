export interface CreateHotParamRuleRequest {
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
     * 统计维度，0表示并发数，1表示通过请求数。
     * @example `1`
     */
    "MetricType": number;
    /**
     * 热点规则中针对每个热点参数的阈值，取值范围为≥0的整数。
     * @example `20`
     */
    "Threshold": number;
    /**
     * 是否开启，默认false。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 资源名。不能超过1024个字符，且该资源名需要与接口详情页面的资源名称相对应。
     * @example `handleService`
     */
    "Resource": string;
    /**
     * 参数位置索引，埋点传入参数的索引位置。对应`SphU.entry(xxx,args)`中的参数索引位置。
     * 例如：`SphU.entry(resourceName,Entry Type.IN,1,paramA,paramB)`埋点中，`paramA`的参数索引是0，`paramB`的参数索引是1。
     * @example `1`
     */
    "ParamIdx": number;
    /**
     * 统计周期时间，单位秒。
     * @example `1`
     */
    "StatDurationSec": number;
    /**
     * 流控效果，0表示快速失败，2表示排队等待。
     * @example `0`
     */
    "ControlBehavior": number;
    /**
     * 缓冲请求数，流控效果为快速失败时需要设置。
     * @example `2`
     */
    "BurstCount"?: number;
    /**
     * 超时时间，流控效果为排队等待时需要设置，单位毫秒。
     * @example `3000`
     */
    "MaxQueueingTimeMs"?: number;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
