export interface ExecutePolicyV2Request {
    /**
     * 策略ID。
     * @example `po-000************hky`
     */
    "PolicyId": string;
    /**
     * 数据源ID。
     * @example `i-bp1************dtv`
     */
    "DataSourceId"?: string;
    /**
     * 数据源类型，取值范围：
     * - **UDM_ECS**：表示ECS整机备份
     * @example `UDM_ECS`
     */
    "SourceType"?: string;
    /**
     * 规则ID，仅限执行**RuleType**为**BACKUP**类型的规则。
     * @example `rule-0002*****ux8`
     */
    "RuleId": string;
}
