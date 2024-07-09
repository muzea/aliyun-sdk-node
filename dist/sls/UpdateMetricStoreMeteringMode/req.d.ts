export interface UpdateMetricStoreMeteringModeRequest {
    /**
     * Project名称
     * @example `projectName`
     */
    "project": string;
    /**
     * MetricStore名称
     * @example `metricStoreName`
     */
    "metricStore": string;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 计量模式。ChargeByFunction 默认计量模式，ChargeByDataIngest 流量模式。
         * @example `ChargeByFunction`
         */
        meteringMode: string;
    };
}
