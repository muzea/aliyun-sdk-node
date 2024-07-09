export interface ListNodeTupleOrdersResponse {
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
         * 满足过滤条件的工单数量。
         * @example `42`
         */
        TotalCount: number;
        /**
         * 满足过滤条件的节点元组工单信息列表。
         */
        List: {
            /**
             * 节点颁发失败数。
             * @example `0`
             */
            FailedCount: number;
            /**
             * 节点密钥申请数量。
             * @example `1`
             */
            RequiredCount: number;
            /**
             * 提交此工单的UNIX时间戳，单位为毫秒。
             * @example `1514736000000`
             */
            CreatedMillis: number;
            /**
             * 是否是Kpm发起的工单。
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            IsKpm: boolean;
            /**
             * 节点密钥类型。
             * @example `noncontractual`
             */
            TupleType: string;
            /**
             * 工单审批通过的UNIX时间戳，单位为毫秒。
             * @example `1514822400000`
             */
            AcceptedMillis: number;
            /**
             * 节点密钥颁发数量。
             * @example `1`
             */
            SuccessCount: number;
            /**
             * LoRaWAN协议版本。
             * @example `1.0.2`
             */
            LoraVersion: string;
            /**
             * 节点密钥申请状态。
             * @example `ACCEPTED`
             */
            OrderState: string;
            /**
             * 工单编号。
             * @example `1234`
             */
            OrderId: string;
        }[];
    };
}
