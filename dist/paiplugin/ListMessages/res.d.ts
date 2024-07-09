export interface ListMessagesResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 短信列表。
         */
        Messages: {
            /**
             * 短信错误码。
             * @example `DELIVERED`
             */
            ErrorCode: string;
            /**
             * 关联人群ID。
             * @example `51d20163-1b10-4af2-8a23-58ad52201f2f`
             */
            GroupId: string;
            /**
             * 短信序列号。
             * @example `92d05e19-751b-4346-a7c5-8808bb49b8a2`
             */
            Id: string;
            /**
             * 外部拓展字段。
             * @example `1234567890`
             */
            OutId: string;
            /**
             * 手机号码。
             * @example `1234567890`
             */
            PhoneNumber: string;
            /**
             * 关联发送计划ID。
             * @example `0604d49d-fd23-4515-bb26-9b537cbf1f6d`
             */
            ScheduleId: string;
            /**
             * 签名名称。
             * @example `PAI通知`
             */
            Signature: string;
            /**
             * 短信发送状态。
             * - 0 : 发送中。
             * - 1 : 发送成功。
             * - 2 : 发送失败。
             * @example `0`
             */
            Status: number;
            /**
             * 模板号。
             * @example `SMS_123456`
             */
            TemplateCode: string;
            /**
             * 模板参数。
             * @example `{}`
             */
            TemplateParams: string;
            /**
             * 模板类型。
             * - 0 : 验证码。
             * - 1 : 短信通知。
             * - 2 : 推广短信。
             * @example `2`
             */
            TemplateType: number;
        }[];
        /**
         * 分页数，从1开始，默认为1。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，默认为10。
         * @example `10`
         */
        PageSize: number;
        /**
         * 短信数量。
         * @example `10`
         */
        TotalCount: number;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
