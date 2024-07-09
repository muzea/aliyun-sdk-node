export interface GetGatewayTupleOrderResponse {
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
     * 网关安全密钥工单信息。
     */
    Data: {
        /**
         * 工单审批通过的 UNIX 时间戳，以毫秒为单位。
         * @example `1514822400000`
         */
        AcceptedMillis: number;
        /**
         * 工单申请的网关安全密钥数量。
         * @example `10`
         */
        RequiredCount: number;
        /**
         * 提交此工单的 UNIX 时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        CreatedMillis: number;
        /**
         * 工单的状态。
         * 参考工单状态取值
         * @example `ACCEPTED`
         */
        OrderState: string;
        /**
         * 工单 Id。
         * @example `1234`
         */
        OrderId: string;
    };
}
