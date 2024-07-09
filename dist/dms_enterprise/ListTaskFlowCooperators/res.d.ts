export interface ListTaskFlowCooperatorsResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `54C99C70-2DFF-5A8C-A252-EBAA1EB668EC`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    CooperatorList: {
        /**
         * 相关人员列表。
         */
        Cooperator: {
            /**
             * 用户昵称。
             * @example `name`
             */
            NickName: string;
            /**
             * 用户邮箱。
             * @example `test@XX.com`
             */
            Email: string;
            /**
             * 用户名。
             * @example `name`
             */
            LoginName: string;
            /**
             * 用户ID。
             * @example `123`
             */
            UserId: string;
        }[];
    };
}
