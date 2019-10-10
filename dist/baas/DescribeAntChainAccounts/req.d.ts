interface DescribeAntChainAccountsRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 区块链ID
    * @example `pYogqb9v`
    */ "AntChainId": string;
    /**
    * 页面编号
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数量
    * @example `10`
    */ "PageSize": number;
}
export { DescribeAntChainAccountsRequest };