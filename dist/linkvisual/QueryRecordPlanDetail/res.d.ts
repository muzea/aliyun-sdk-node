export interface QueryRecordPlanDetailResponse {
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
     * 录像计划详细信息。
     */
    Data: {
        /**
         * 录像计划ID。
         * @example `5b60bf0dd55944c19d7817442bc9****`
         */
        PlanId: string;
        /**
         * 录像计划模板名称。
         * @example `test`
         */
        Name: string;
        /**
         * 录像计划的时间模板ID。
         * @example `693e244a038f4255bb2f5db32874****`
         */
        TemplateId: string;
        /**
         * 时间模板信息。
         */
        TemplateInfo: {
            /**
             * 是否7天*24小时录像：
             * - 1：7天*24小时录像。
             * - 0：非7天*24小时录像。
             * @example `1`
             */
            AllDay: number;
            /**
             * 模板类型：
             * - **1**：默认模板
             * - **0**：自定义模板
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
             * @example `693e244a038f4255bb2f5db32874****`
             */
            TemplateId: string;
            /**
             * 时间模板信息。
             */
            TimeSectionList: {
                /**
                 * 每天结束的时间，取值范围1~86399，单位为秒。
                 * @example `20000`
                 */
                End: number;
                /**
                 * 每周的周几，取值范围0~6，表示周日~周六。
                 * @example `0`
                 */
                DayOfWeek: number;
                /**
                 * 每天开始的时间，取值范围0~86399，单位为秒。
                 * @example `6000`
                 */
                Begin: number;
            }[];
        };
    };
}
