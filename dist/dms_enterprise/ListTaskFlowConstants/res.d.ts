export interface ListTaskFlowConstantsResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `028BF827-3801-5869-8548-F4A039256304`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，取值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    DagConstants: {
        /**
         * 任务流常量键值对列表。
         */
        DagConstant: {
            /**
             * 常量键。
             * @example `example`
             */
            Key: string;
            /**
             * 常量值。
             * @example `0`
             */
            Value: string;
        }[];
    };
}
