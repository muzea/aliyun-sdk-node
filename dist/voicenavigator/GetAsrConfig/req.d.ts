export interface GetAsrConfigRequest {
    /**
     * config_level对应的实体ID
     * @example `3b1d3031-8b6e-460a-8640-d330f2ca50b8`
     */
    "EntryId"?: string;
    /**
     * 策略级别，包含 0：系统，1:租户，2：实例
     * @example `1`
     */
    "ConfigLevel"?: number;
}
