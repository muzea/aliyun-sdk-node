export interface DescribeRuleResponse {
    /**
     * 返回结果详情。
     */
    result: {
        /**
         * 通过规则ID查询。
         * @example `98493A14-D619-4E88-9F8D-108939817F9F`
         */
        ruleId: string;
        /**
         * 最后修改时间。
         * @example `2020-04-27T06:38:28.000Z`
         */
        gmtModified: string;
        /**
         * 规则状态：
         * **DRAFT:** 草稿状态
         * **EFFECTIVE:** 生效状态
         * **PUBLISHING:**发布中状态
         * **INEFFECTIVE:** 已失效状态
         * **FAILED:**未生效状态
         * @example `DRAFT`
         */
        status: string;
        /**
         * 创建时间。
         * @example `2020-04-27T06:38:28.000Z`
         */
        gmtCreate: string;
    };
    /**
     * 错误码。
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情。
     * @example `An internal server error occurred`
     */
    message: string;
}
