export interface ListGatewayTupleOrdersResponse {
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 满足过滤条件的工单总数量。
         * @example `42`
         */
        TotalCount: number;
        /**
         * 查询到的网关密钥工单信息列表。
         */
        List: {
            /**
             * 网关密钥颁发数量。
             * @example `2`
             */
            RequiredCount: number;
            /**
             * 提交此工单的UNIX时间戳，单位为毫秒。
             * @example `1514736000000`
             */
            CreatedMillis: number;
            /**
             * 网关密钥类型。
             * - **singlechannel**：低速版（单通道型）。
             * - **standard**：标准版。
             * - **hybrid**：高速版（Hybrid型）。
             * - **noncontractual**：高速版。
             * @example `standard`
             */
            TupleType: string;
            /**
             * 工单审批通过的UNIX时间戳，单位为毫秒。
             * @example `1514822400000`
             */
            AcceptedMillis: number;
            /**
             * 网关密钥订单编号。
             * @example `1234`
             */
            OrderId: string;
            /**
             * 网关密钥申请状态。
             * @example `ACCEPTED`
             */
            OrderState: string;
        }[];
    };
}
