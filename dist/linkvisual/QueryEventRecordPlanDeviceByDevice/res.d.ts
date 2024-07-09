export interface QueryEventRecordPlanDeviceByDeviceResponse {
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
     * 查询结果。
     */
    Data: {
        /**
         * 预录时长，单位为秒。
         * @example `5`
         */
        PreRecordDuration: number;
        /**
         * 智能告警事件录像名称。
         * @example `planAA`
         */
        Name: string;
        /**
         * 智能告警事件录像计划ID。
         * @example `5b60bf0dd55944c19d7817442bc9****`
         */
        PlanId: string;
        /**
         * 时间模板ID。
         * @example `36f06322442e4e3f85a5ae8862c9****`
         */
        TemplateId: string;
        /**
         * 录像时长，包括预录时长，单位为秒。
         * @example `120`
         */
        RecordDuration: number;
        /**
         * 时间模板详情。
         */
        TemplateInfo: {
            /**
             * 是否7天*24小时录像：
             * - **1**：是。
             * - **0**：否，详细配置请查看**TimeSectionList**参数。
             * @example `0`
             */
            AllDay: number;
            /**
             * 时间模板类型：
             * - **1**：默认模板
             * - **0**：自定义模板
             * @example `0`
             */
            Default: number;
            /**
             * 时间模板名称。
             * @example `testtime1`
             */
            Name: string;
            /**
             * 时间模板ID。
             * @example `36f06322442e4e3f85a5ae8862c9****`
             */
            TemplateId: string;
            /**
             * 时间模板列表。
             */
            TimeSectionList: {
                /**
                 * 每天结束的时间，取值范围1~86399，单位为秒。
                 * @example `86399`
                 */
                End: number;
                /**
                 * 每周的周几，取值范围0~6，表示周日~周六。
                 * @example `0`
                 */
                DayOfWeek: number;
                /**
                 * 每天开始的时间，取值范围0~86399，单位为秒。
                 * @example `0`
                 */
                Begin: number;
            }[];
        };
    };
}
