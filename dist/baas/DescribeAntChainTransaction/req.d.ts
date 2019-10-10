interface DescribeAntChainTransactionRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 交易哈希
    * @example `b3b0d2db83d3e670449d1e2a39d1d13b7e0e6080b0f9c6945f79eca68d1dd2ca`
    */ "Hash": string;
    /**
    * 区块链ID
    * @example `pYogqb9v`
    */ "AntChainId": string;
}
export { DescribeAntChainTransactionRequest };