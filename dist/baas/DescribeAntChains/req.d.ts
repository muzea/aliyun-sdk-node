interface DescribeAntChainsRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 联盟ID
    * @example `AroN3X2l`
    */ "ConsortiumId": string;
    /**
    * 当前页面编号
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 页面条例数
    * @example `20`
    */ "PageSize": number;
}
export { DescribeAntChainsRequest };