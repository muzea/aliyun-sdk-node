export interface QueryRecordPlansResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `tenant auth error`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询信息。
     */
    Data: {
        /**
         * 每页显示的记录数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 查询到的录像计划的总记录数。
         * @example `2`
         */
        Total: number;
        /**
         * 当前页面号。
         * @example `1`
         */
        Page: number;
        /**
         * 返回的录像计划模板列表。
         */
        List: {
            /**
             * 录像计划ID。
             * @example `6c5a397bc17c4b48ace86f0f0c30****`
             */
            PlanId: string;
            /**
             * 录像计划名称。
             * @example `plan1`
             */
            Name: string;
            /**
             * 录像计划对应的时间模板ID。
             * @example `693e244a038f4255bb2f5db32874****`
             */
            TemplateId: string;
        }[];
    };
}
