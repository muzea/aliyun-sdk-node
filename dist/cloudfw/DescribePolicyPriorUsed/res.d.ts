export interface DescribePolicyPriorUsedResponse {
    /**
     * 您已创建的访问控制策略的最低优先级。
     * > -1表示最低优先级。
     * @example `150`
     */
    End: number;
    /**
     * 您已创建的访问控制策略的最高优先级。
     * > 0表示最高优先级。
     * @example `-1`
     */
    Start: number;
    /**
     * 结果的请求ID。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
}
