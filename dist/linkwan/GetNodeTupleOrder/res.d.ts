export interface GetNodeTupleOrderResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097	`
     */
    RequestId: string;
    /**
     * 节点安全元组工单信息。
     */
    Data: {
        /**
         * 工单申请的节点安全密钥数量。
         * @example `10`
         */
        RequiredCount: number;
        /**
         * 提交工单的 UNIX 时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        CreatedMillis: number;
        /**
         * 是否是安全产线发起的密钥申请。
         * @example `false`
         */
        IsKpm: boolean;
        /**
         * 工单审批通过的 UNIX 时间戳，以毫秒为单位。
         * @example `1514822400000`
         */
        AcceptedMillis: number;
        /**
         * 工单 Id。
         * @example `1234`
         */
        OrderId: string;
        /**
         * 工单状态。
         * 审批状态取值
         * APPLYING		申请中。
         * ACCEPTING		颁发中。
         * ACCEPTED		颁发成功。
         * ACCEPTING_FAILED		颁发失败。
         * REJECTED		已拒绝。
         * REVOKING		撤回中。
         * REVOKING_FAILED		撤回失败。
         * REVOKED		撤回成功。
         * @example `ACCEPTED`
         */
        OrderState: string;
    };
}
