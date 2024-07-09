export interface PublishRuleResponse {
    /**
     * 返回结果详情。
     */
    result: {
        /**
         * 规则ID。
         * @example `98493A14-D619-4E88-9F8D-108939817F9F`
         */
        ruleId: string;
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
