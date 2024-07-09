export interface DeleteRuleResponse {
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
     * 无
     */
    Data: {
        /**
         * 创建日期
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 名称
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
     * 状态码
     * @example `OK`
     */
    Code: string;
}
