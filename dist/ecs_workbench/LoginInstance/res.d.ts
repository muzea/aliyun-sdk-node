export interface LoginInstanceResponse {
    /**
     * Id of the request
     * @example `abc-123`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true/false`
     */
    Success: string;
    /**
     * 错误码
     * @example `InvalidParamter`
     */
    Code: string;
    /**
     * 错误信息
     * @example `用户名密码错误`
     */
    Message: string;
    /**
     * 登录成功返回的具体信息
     */
    Root: {
        /**
         * 登录成功返回的地址列表
         */
        InstanceLoginInfoList: {
            /**
             * 登录的实例View信息
             */
            InstanceLoginView: {
                /**
                 * 登录的实例的默认View，使用这个url必须要有阿里云的登录态，也就是当前浏览器处于阿里云的合理登录状态
                 * @example `abc`
                 */
                DefaultViewUrl: string;
            };
            /**
             * 登录的实例ID
             * @example `i-abc`
             */
            InstanceId: string;
            /**
             * 登录的会话的Token
             * @example `134`
             */
            InstanceLoginToken: string;
            /**
             * 登录是否成功
             * @example `true`
             */
            LoginSuccess: boolean;
        }[];
        /**
         * 扩展参数，一次性账户的登录信息
         */
        DisposableAccount: {
            /**
             * 一次性账户的登录URL，目前暂不开放
             * @example `abc`
             */
            LoginUrl: string;
            /**
             * 一次性账户的登录Action的地址，目前暂不开放
             * @example `abc`
             */
            LoginFormActionUrl: string;
        };
        /**
         * 登录的控制地址信息
         */
        SessionControl: {
            /**
             * 登录的控制地址信息
             * @example `abc`
             */
            BaseUrl: string;
        };
    };
}
