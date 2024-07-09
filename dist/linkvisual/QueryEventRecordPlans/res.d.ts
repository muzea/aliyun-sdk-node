export interface QueryEventRecordPlansResponse {
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
     * 查询结果。
     */
    Data: {
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 总条数。
         * @example `1`
         */
        Total: number;
        /**
         * 当前页面号。
         * @example `1`
         */
        Page: number;
        /**
         * 智能告警事件录像计划列表。
         */
        List: {
            /**
             * 智能告警事件类型。请在物联网平台控制台，**产品详情**页面的**功能定义**页签，找到**智能告警**，查看全部智能告警事件类型。
             * 详细信息，请参考[智能告警事件](~~207701~~)。
             * @example `1`
             */
            EventType: string;
            /**
             * 录像时长，包括预录时长，单位为秒。
             * @example `60`
             */
            RecordDuration: number;
            /**
             * 预录时长，单位为秒。
             * @example `5`
             */
            PreRecordDuration: number;
            /**
             * 智能告警事件录像计划ID。
             * @example `5b60bf0dd55944c19d7817442bc9****`
             */
            PlanId: string;
            /**
             * 智能告警事件录像名称。
             * @example `test`
             */
            Name: string;
            /**
             * 时间模板ID。
             * @example `36f06322442e4e3f85a5ae8862c9****`
             */
            TemplateId: string;
        }[];
    };
}
