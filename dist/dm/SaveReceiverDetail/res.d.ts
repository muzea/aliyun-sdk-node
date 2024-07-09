export interface SaveReceiverDetailResponse {
    /**
     * 错误次数。
     * @example `638`
     */
    ErrorCount: number;
    /**
     * 请求ID
     * @example `10A1AD70-E48E-476D-98D9-39BD92193837`
     */
    RequestId: string;
    /**
     * 成功数量。
     * @example `274`
     */
    SuccessCount: number;
    Data: {
        /**
         * 邮件列表。
         */
        Detail: {
            /**
             * 邮件地址。
             * @example `test@mail.com`
             */
            Email: string;
        }[];
    };
}
