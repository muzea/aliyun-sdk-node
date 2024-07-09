export interface GetEffectivePolicyResponse {
    /**
     * 请求ID。
     * @example `BB532282-94F5-5F56-877F-32D5E2A04F3F`
     */
    RequestId: string;
    /**
     * 有效策略。
     * @example `{\"tags\":{\"costcenter\":{\"tag_value\":[\"Beijing\",\"Shanghai\"],\"tag_key\":\"CostCenter\"}}}`
     */
    EffectivePolicy: string;
}
