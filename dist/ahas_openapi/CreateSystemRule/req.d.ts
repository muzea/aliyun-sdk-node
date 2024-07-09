export interface CreateSystemRuleRequest {
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
     * 统计维度，0表示Load，1表示入口平均RT，2表示线程数，3表示入口总QPS，4表示CPU使用率。
     * @example `4`
     */
    "MetricType": number;
    /**
     * CPU阈值，取值范围0~1。
     * @example `0.6`
     */
    "Threshold": number;
    /**
     * 规则是否开启。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
