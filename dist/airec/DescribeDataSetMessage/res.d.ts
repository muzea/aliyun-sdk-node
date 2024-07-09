export interface DescribeDataSetMessageResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 数据诊断错误详情。
         * @example `item商品表合法率0.36，可被采纳数据（符合规范）较少。会影响预热期推荐效果。请检查数据，补充相关字段信息，重新导入。建议优化。`
         */
        message: string;
        /**
         * 数据诊断错误时间。
         * @example `20181211 17:27:44`
         */
        timestamp: string;
        /**
         * 数据诊断错误级别。
         * @example `warn`
         */
        errorLevel: string;
        /**
         * 数据诊断错误类型。
         * @example `合法率`
         */
        errorType: string;
    }[];
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
     * 错误信息。
     * @example `An internal server error occurred`
     */
    message: string;
}
