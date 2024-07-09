export interface UpdateLogStoreMeteringModeRequest {
    /**
     * Project名称
     * @example `projectName`
     */
    "project": string;
    /**
     * LogStore名称
     * @example `logstoreName`
     */
    "logstore": string;
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 计量模式。ChargeByFunction 默认计量模式，ChargeByDataIngest 流量模式。
         * @example `ChargeByFunction`
         */
        meteringMode: string;
    };
}
