export interface GetOrderBaseInfoResponse {
    /**
     * 工单基本信息。
     */
    OrderBaseInfo: {
        RelatedUserNickList: {
            /**
             * 工单相关人昵称列表。
             */
            UserNicks: string[];
        };
        /**
         * 备注信息。
         * @example `test`
         */
        Comment: string;
        /**
         * 工单创建时间。
         * @example `2019-10-10 00:00:00`
         */
        CreateTime: string;
        /**
         * 提交者。
         * @example `xxx`
         */
        Committer: string;
        /**
         * 审批流ID。
         * @example `1`
         */
        WorkflowInstanceId: number;
        /**
         * 提交者ID，注意不是提交者的阿里云UID。
         * @example `1`
         */
        CommitterId: number;
        /**
         * 工单最后修改时间。
         * @example `2019-10-10 00:00:00`
         */
        LastModifyTime: string;
        /**
         * 工单状态码，取值如下：
         * - **new**：新建
         * - **toaudit**：审批中
         * - **approved**：审批通过
         * - **reject**：审批拒绝
         * - **processing**：执行中
         * - **success**：执行成功
         * - **closed**：已关闭
         * @example `success`
         */
        StatusCode: string;
        RelatedUserList: {
            /**
             * 工单相关人ID列表。
             */
            UserIds: string[];
        };
        /**
         * 审批描述信息。
         * @example `approved`
         */
        WorkflowStatusDesc: string;
        /**
         * 状态描述信息。
         * @example `success`
         */
        StatusDesc: string;
        /**
         * 工单类型。取值及说明可参考[CreateOrder](~~465865~~)接口的相应入参说明。
         * @example `DC_COMMON`
         */
        PluginType: string;
        /**
         * 工单号。
         * @example `12345`
         */
        OrderId: number;
        /**
         * 工单附件Key。仅当工单创建时上传了附件，才会返回此信息。
         * @example `upload_order_info_856887_f356366f-f0f8-42fc-ba57-4a509303e814_18072d8a9bce876e3073bc655c2865f.png`
         */
        AttachmentKey: string;
        /**
         * 工单附件原始文件名。仅当工单创建时上传了附件，才会返回此信息。
         * @example `18072d8a9bce876e3073bc655c2865f.png`
         */
        OriginAttachmentName: string;
    };
    /**
     * 请求ID。
     * @example `7133DF67-5B25-460F-8285-C4CC93472C2F`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
