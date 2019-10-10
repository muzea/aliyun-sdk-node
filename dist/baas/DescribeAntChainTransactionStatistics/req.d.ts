interface DescribeAntChainTransactionStatisticsRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 统计开始时间
    * @example `1563206400000`
    */ "Start": number;
    /**
    * 统计结束时间
    * @example `1563897600000`
    */ "End": number;
    /**
    * 区块链ID
    * @example `pYogqb9v`
    */ "AntChainId": string;
}
export { DescribeAntChainTransactionStatisticsRequest };