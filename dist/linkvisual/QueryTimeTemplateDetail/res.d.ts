export interface QueryTimeTemplateDetailResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
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
     * @example `template owner error`
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
         * 是否7天*24小时录像：
         * - **1**：是。
         * - **0**：否，详细配置请查看**TimeSectionList**参数。
         * @example `0`
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
         * @example `test`
         */
        Name: string;
        /**
         * 时间模板ID。
         * @example `36f06322442e4e3f85a5ae8862c9****`
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
             * 时间。取值0~6，表示周日~周六。
             * @example `0`
             */
            DayOfWeek: number;
            /**
             * 每天开始的时间，单位为秒。
             * @example `20000`
             */
            Begin: number;
        }[];
    };
}
