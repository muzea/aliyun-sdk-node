export interface DeleteAggregatorsResponse {
    /**
     * 请求ID。
     * @example `8195B664-9565-4685-89AC-8B5F04B44B92`
     */
    RequestId: string;
    /**
     * 删除账号组的操作结果。
     */
    OperateAggregatorsResult: {
        /**
         * 账号组信息。
         */
        OperateAggregators: {
            /**
             * 错误码。
             * > 如果删除账号组成功，则错误码为空。
             * @example `AccountNotExisted`
             */
            ErrorCode: string;
            /**
             * 操作是否成功。取值：
             * - true：成功。
             * - false：失败。
             * @example `false`
             */
            Success: boolean;
            /**
             * 账号组ID。
             * @example `ca-dacf86d8314e00eb****`
             */
            AggregatorId: string;
        }[];
    };
}
