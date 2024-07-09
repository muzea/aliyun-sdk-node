export interface DeleteRepoTriggerResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `85180AE4-9A57-48F8-9EF9-68ECCE54B552`
     */
    RequestId: string;
}
