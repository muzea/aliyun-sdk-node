export interface UpdateRepoBuildRuleResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 更新联系人是否成功，取值：
     * - `true`：更新成功
     * - `false`：更新失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `BC648259-91A7-4502-BED3-EDF64361FA83`
     */
    RequestId: string;
    /**
     * 构建规则ID
     * @example `crbr-ly77w5i3t31f****`
     */
    BuildRuleId: string;
}
