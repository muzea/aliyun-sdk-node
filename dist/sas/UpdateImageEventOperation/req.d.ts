export interface UpdateImageEventOperationRequest {
    /**
     * 告警处置规则ID。
     * @example `814163`
     */
    "Id"?: number;
    /**
     * 规则范围。JSON格式，key取值：
     * - **type**：范围类型。
     * - **value**：范围值。
     * @example `{\"type\": \"repo\", \"value\": \"test-aaa/shenzhen-repo-01\"}`
     */
    "Scenarios"?: string;
}
