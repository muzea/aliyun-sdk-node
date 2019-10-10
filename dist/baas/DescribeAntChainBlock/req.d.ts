interface DescribeAntChainBlockRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 查询区块高度
    * @example `1234`
    */ "Height": number;
    /**
    * 区块链ID
    * @example `pYogqb9v`
    */ "AntChainId": string;
}
export { DescribeAntChainBlockRequest };