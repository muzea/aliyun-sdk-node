export interface CreateIsolationRuleRequest {
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
     * 统计维度，0表示当前接口，1表示关联接口，2表示链路入口。
     * @example `0`
     */
    "RelationStrategy": number;
    /**
     * 并发数阈值，取值范围为≥0的整数。
     * @example `10`
     */
    "Threshold": number;
    /**
     * 是否开启，默认为false。
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
     * 关联接口名、callstack入口名，当统计维度为关联接口或链路入口时需设置该值。
     * @example `handleServiceB`
     */
    "RefResource"?: string;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
