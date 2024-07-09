export interface QueryReleaseMetricRequest {
    /**
     * EDAS或K8s应用ID。
     * @example `8b46d03f-5947-449d-90fd-3a96c2******`
     */
    "Pid": string;
    /**
     * 发布单ID。
     * @example `a341a2f2-ed07-4257-aae9-dfb1be******`
     */
    "ChangeOrderId": string;
    /**
     * 版本发布的开始时间。
     * @example `1632798686692`
     */
    "ReleaseStartTime": number;
    /**
     * 版本发布的截止时间。
     * @example `1632798718632`
     */
    "ReleaseEndTime": number;
    /**
     * 发布单创建时间。
     * @example `1634005438000`
     */
    "CreateTime"?: number;
    /**
     * 查询的指定接口。
     * @example `clothservice`
     */
    "Service"?: string;
    /**
     * 查询的指标类型。
     * @example `SystemContrast`
     */
    "MetricType"?: string;
    /**
     * 当前参数暂不支持使用。
     * @example `null`
     */
    "ProxyUserId"?: string;
}
