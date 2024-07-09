export interface ListTemplatesResponse {
    /**
     * 返回数据。
     */
    Data: {
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
         * 分页返回的模板列表。
         */
        Templates: {
            /**
             * 模板内容。
             * @example `模板内容`
             */
            Content: string;
            /**
             * 创建时间 (UTC+8)。
             * @example `2020-01-01 12:00:00`
             */
            CreatedTime: string;
            /**
             * 申请说明。
             * @example `申请说明`
             */
            Description: string;
            /**
             * 模板ID。
             * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
             */
            Id: string;
            /**
             * 模板名称。
             * @example `模板召回-20220101`
             */
            Name: string;
            /**
             * 审核意见。
             * @example `同意`
             */
            Reason: string;
            /**
             * 签名ID。
             * @example `5480e3e7-f578-42d2-8ce8-217dec75f2e6`
             */
            SignatureId: string;
            /**
             * 审核状态。
             * - 0 : 审核中。
             * - 1 : 审核通过。
             * - 2 : 审核不通过。
             * @example `0`
             */
            Status: number;
            /**
             * 模板Code。
             * @example `SMS_123456`
             */
            TemplateCode: string;
            /**
             * 模板类型。
             * - 0：验证码。
             * - 1：短信通知。
             * - 2：推广短信。
             * @example `1`
             */
            Type: number;
            /**
             * 更新时间 (UTC+8)。
             * @example `2020-01-01 12:00:00`
             */
            UpdatedTime: string;
        }[];
        /**
         * 全部模板注册记录数量。
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
