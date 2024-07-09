export interface CreateRuleResponse {
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 规则名称
         * @example `default`
         */
        Name: string;
        /**
         * 规则内容
         * @example `{}`
         */
        Content: string;
        /**
         * ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
    };
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}
