export interface QueryTimeTemplateResponse {
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
     * 调用成功时，返回时间模板信息。
     */
    Data: {
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `1`
         */
        Total: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 当前页面号。
         * @example `1`
         */
        Page: number;
        /**
         * 返回的模板列表。
         */
        List: {
            /**
             * 是否7天*24小时录像：
             * - 1：是。
             * - 0：否，详细配置请查看TimeSectionList参数。
             * @example `1`
             */
            AllDay: number;
            /**
             * 是否是默认模板：
             * - **1**：默认模板。
             * - **0**：自定义模板。
             * @example `1`
             */
            Default: number;
            /**
             * 时间模板名称。
             * @example `exampleName`
             */
            Name: string;
            /**
             * 时间模板ID。
             * @example `adxxx`
             */
            TemplateId: string;
            /**
             * 时间模板信息。
             */
            TimeSectionList: {
                /**
                 * 每天结束的时间，单位为秒。
                 * @example `60000`
                 */
                End: number;
                /**
                 * 每周的周几，取值范围0~6，表示周日~周六。
                 * @example `0`
                 */
                DayOfWeek: number;
                /**
                 * 每天开始的时间，单位为秒。
                 * @example `20000`
                 */
                Begin: number;
            }[];
        }[];
    };
}
