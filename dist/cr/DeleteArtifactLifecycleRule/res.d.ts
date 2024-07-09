export interface DeleteArtifactLifecycleRuleResponse {
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `True`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `001AB638-C99B-5A27-8AC9-B2DBABFFEBB5`
     */
    RequestId: string;
}
