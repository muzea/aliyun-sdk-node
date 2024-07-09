export interface GetUserTokenResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-xxxx`
     */
    RequestId: string;
    /**
     * token信息
     */
    Data: {
        /**
         * token失效日期
         * @example `1614528000000`
         */
        Expires: number;
        /**
         * 用户访问token
         * @example `xxx-xxx-xxxx`
         */
        Token: string;
    };
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
}
