export interface GetLogStoreMeteringModeResponse {
    /**
     * 计量模式。ChargeByFunction 默认计量模式，ChargeByDataIngest 流量模式。
     * @example `ChargeByFunction`
     */
    meteringMode: string;
}
