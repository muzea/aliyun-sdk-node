export interface ListRulesResponse {
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
         * 数据
         */
        Items: {
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
        }[];
        /**
         * 总页数
         * @example `1`
         */
        TotalPages: number;
        /**
         * 总条目数
         * @example `1`
         */
        TotalElements: number;
    };
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}
