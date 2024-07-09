export interface GetDataArchiveCountResponse {
    /**
     * 返回的数据信息。
     */
    Data: {
        /**
         * 归档失败的工单数。
         * @example `12`
         */
        FailCount: number;
        /**
         * 正在进行归档的工单数。
         * @example `180`
         */
        ProcessingCount: number;
        /**
         * 归档成功的工单数。
         * @example `900`
         */
        SuccessCount: number;
        /**
         * 所有归档状态的工单数。
         * @example `1400`
         */
        TotalCount: number;
    };
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `4B63CAC5-BD7F-5C7C-82C9-59DFFBC3C5C2`
     */
    RequestId: string;
}
