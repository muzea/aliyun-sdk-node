export interface ListRuleTasksResponse {
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 完成时间
         * @example `1588240081`
         */
        finishTime: number;
        /**
         * 完成率
         * @example `50`
         */
        finishRate: number;
    };
    /**
     * 错误码
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求id
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `An internal server error occurred`
     */
    message: string;
}
