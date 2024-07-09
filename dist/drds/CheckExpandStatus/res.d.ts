export interface CheckExpandStatusResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `7CDBA7D5-8D62-4D24-9C65-510D62******`
     */
    RequestId: string;
    /**
     * 校验结果。
     */
    Data: {
        /**
         * 附加说明信息。
         * @example `success`
         */
        Msg: string;
        /**
         * 是否可进行扩容操作。
         * @example `true`
         */
        IsActive: boolean;
    };
}
