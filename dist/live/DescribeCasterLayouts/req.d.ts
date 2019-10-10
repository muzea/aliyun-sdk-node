interface DescribeCasterLayoutsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
    */ "CasterId": string;
    /**
    * 布局ID。
    * 若未指定，则查询导播台下所有布局列表。
    * @example `72d2ec7a-4cd7-4a01-974b-7cd53947f053`
    */ "LayoutId"?: string;
}
export { DescribeCasterLayoutsRequest };