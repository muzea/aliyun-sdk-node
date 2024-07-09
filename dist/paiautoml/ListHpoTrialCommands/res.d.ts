export interface ListHpoTrialCommandsResponse {
    /**
     * POP的请求id
     * @example `071A904D-5A49-597F-9F69-81C7701D04AC`
     */
    RequestId: string;
    /**
     * 内部错误码。只在响应出错时被设置。
     * @example `INVALID_USER_OR_EXP`
     */
    Code: string;
    /**
     * 响应错误信息。只在响应出错时被设置。
     * @example `Missing 'user_id' in request.`
     */
    Message: string;
    /**
     * 额外的错误信息。只在响应出错时被设置。
     */
    Detail: any;
    /**
     * 命令列表。
     */
    Commands: {
        /**
         * 序号
         * @example `1`
         */
        Id: number;
        /**
         * 命令内容
         * @example `dlc submit pytorch --name=test_nni_foo_bar`
         */
        Command: string;
        /**
         * 命令执行的输出
         * @example `foo`
         */
        Output: string;
    }[];
}
