export interface BindProduceAuthorizationResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `AC492C5D-29D0-5103-9271-2C3A9D99F5CA`
     */
    RequestId: string;
    /**
     * 错误code
     * @example `200`
     */
    ErrorCode: string;
    /**
     * 授权用户结果列表
     */
    Data: {
        /**
         * 返回信息
         * @example `以上标红的不为阿里云账号`
         */
        Message: string;
        /**
         * 是否成功
         * @example `false`
         */
        Success: boolean;
        /**
         * 授权用户结果记录列表
         */
        AuthorizedUserList: {
            /**
             * 绑定被授权用户名
             * @example `test@alibaba-inc.com`
             */
            UserName: string;
            /**
             * 绑定被授权用户ID
             * @example `1219541161213058`
             */
            UserId: string;
            /**
             * 0：未知 1：有效 2：账号不存在
             * @example `2`
             */
            AccountValidType: number;
        }[];
    };
}
