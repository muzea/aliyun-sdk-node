export interface CreateRepoBuildRuleResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `4CE1F661-75DD-4EBD-A4AD-057B26834ABB`
     */
    RequestId: string;
    /**
     * 构建规则ID
     * @example `crbr-ly77w5i3t31f****`
     */
    BuildRuleId: string;
}
