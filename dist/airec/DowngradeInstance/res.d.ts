export interface DowngradeInstanceResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 实例ID。
         * @example `airec-cn-****`
         */
        instanceId: string;
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
     * 错误信息。
     * @example `An internal server error occurred`
     */
    message: string;
}
