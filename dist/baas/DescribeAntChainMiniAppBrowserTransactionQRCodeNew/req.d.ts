export interface DescribeAntChainMiniAppBrowserTransactionQRCodeNewRequest {
    /**
     * 区块链ID
     * @example `bDXK6boZ`
     */
    "AntChainId": string;
    /**
     * 交易哈希值
     * @example `4a1f1371012cf840a9e4c6bde430d5ba600e422e592d153bd2689783cd1f87d0`
     */
    "TransactionHash": string;
    /**
     * 合约ID
     * @example `9782291a957d28bec9e02f3dcb27d78392815ede7670b70793e0fd9763309cda`
     */
    "ContractId"?: string;
}
