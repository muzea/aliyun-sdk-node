export interface DescribeAntChainInformationV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果消息
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
    /**
     * 请求消息
     * @example `OK`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 节点角色，只有fasle，保留字段（未使用）。
         * @example `false`
         */
        IsRole: boolean;
        /**
         * 交易总数
         * @example `6`
         */
        TransactionSum: number;
        /**
         * 区块链版本
         * @example `0.10`
         */
        Version: string;
        /**
         * 创建时戳
         * @example `1609221924000`
         */
        CreateTime: number;
        /**
         * 区块链高度
         * @example `259988`
         */
        BlockHeight: number;
        /**
         * 节点总数
         * @example `4`
         */
        NodeNumber: number;
        /**
         * 异常节点数
         * @example `0`
         */
        AbnormalNodes: number;
        /**
         * 区块链ID
         * @example `8bd720bde18c4b37b0f4a1c7834db163`
         */
        AntChainId: string;
        /**
         * 运行状态
         * @example `true`
         */
        Normal: boolean;
        /**
         * 节点信息
         */
        NodeInfos: {
            /**
             * 节点状态
             * @example `true`
             */
            Status: boolean;
            /**
             * 节点地址
             * @example `8.136.158.115 18130`
             */
            NodeName: string;
            /**
             * 运行版本
             * @example `0.10`
             */
            Version: string;
            /**
             * 区块链高度
             * @example `259988`
             */
            BlockHeight: number;
        }[];
    };
}
