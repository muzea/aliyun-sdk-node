export interface QueryFaceUserIdByCustomUserIdResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 请求Id
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 错误描述
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口返回值
     */
    Data: {
        /**
         * 用户参数
         * @example `{"age":28, "sex":"male"}`
         */
        Params: string;
        /**
         * 调用者系统中的用户Id
         * @example `TestCustomUserId`
         */
        CustomUserId: string;
        /**
         * 用户名
         * @example `TestName`
         */
        Name: string;
        /**
         * 用户Id
         * @example `TestUserId`
         */
        UserId: string;
    };
}
