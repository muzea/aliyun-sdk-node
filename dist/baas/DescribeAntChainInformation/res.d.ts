export interface DescribeAntChainInformationResponse {
    /**
     * 请求ID
     * @example `91246411-C7E9-4EFD-9074-3939AEDFC1BB`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 交易总数
         * @example `42`
         */
        TransactionSum: number;
        /**
         * 区块链版本
         * @example `0.10.2.4.7`
         */
        Version: string;
        /**
         * 区块链高度
         * @example `365236`
         */
        BlockHeight: number;
        /**
         * 创建时戳
         * @example `1562847396000`
         */
        CreateTime: number;
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
         * @example `pYogqb9v`
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
             * 节点状态：
             * - true：节点正常
             * - false：节点异常
             * @example `true`
             */
            Status: boolean;
            /**
             * 节点地址
             * @example `121.199.195.8 18130`
             */
            NodeName: string;
            /**
             * 运行版本
             * @example `0.10`
             */
            Version: string;
            /**
             * 区块链高度
             * @example `365216`
             */
            BlockHeight: number;
        }[];
    };
}
