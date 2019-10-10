interface DescribeAntChainMembersRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 联盟ID
    * @example `q0oWq92P`
    */ "ConsortiumId": string;
    /**
    * 页面编号
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 页面包含条例数
    * @example `10`
    */ "PageSize": number;
}
export { DescribeAntChainMembersRequest };