export interface QuerySmsSignListResponse {
    /**
     * 请求ID。
     * @example `819BE656-D2E0-4858-8B21-B2E47708****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     *
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 结果列表。
     */
    SmsSignList: {
        /**
         * 签名名称。
         * @example `阿里云`
         */
        SignName: string;
        /**
         * 签名审批状态。取值：
         * - **AUDIT_STATE_INIT**：审核中。
         * - **AUDIT_STATE_PASS**：审核通过。
         * - **AUDIT_STATE_NOT_PASS**：审核未通过，请在返回参数Reason中查看审核未通过原因。
         * - **AUDIT_STATE_CANCEL**：取消审核。
         * @example `AUDIT_STATE_NOT_PASS`
         */
        AuditStatus: string;
        /**
         * 短信签名的创建日期和时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2020-01-08 16:44:13`
         */
        CreateDate: string;
        /**
         * 审核备注。
         * - 如果审核状态为**审核通过**或**审核中**，参数Reason显示为“无审核备注”。
         * - 如果审核状态为**审核未通过**，参数Reason显示审核的具体原因。
         */
        Reason: {
            /**
             * 审批未通过的备注信息。
             * @example `文件不能证明信息真实性，请重新上传。`
             */
            RejectSubInfo: string;
            /**
             * 审批未通过的时间，格式为yyyy-MM-dd HH:mm:ss。
             * @example `2020-01-08 19:02:13`
             */
            RejectDate: string;
            /**
             * 审批未通过的原因。
             * @example `文件不能证明信息真实性，请重新上传。`
             */
            RejectInfo: string;
        };
        /**
         * 签名场景类型。返回值以”类型“结尾。取值：
         * - 验证码类型。
         * - 通用类型。
         * @example `验证码类型`
         */
        BusinessType: string;
        /**
         * 工单ID。
         * @example `236****5`
         */
        OrderId: string;
    }[];
    /**
     * 签名总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 页码。默认取值为**1**。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 每页展示的签名条数。取值范围：**1~50**。
     * @example `10`
     */
    PageSize: number;
}
