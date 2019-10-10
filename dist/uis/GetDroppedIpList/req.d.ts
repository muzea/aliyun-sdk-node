interface GetDroppedIpListRequest {
    "RegionId"?: string;
    /**
    * UIS实例ID。
    * @example `UIS-xxx88h4csbc6j8kkk****`
    */ "UisId": string;
    "OwnerId"?: number;
    /**
    * 数据日期，例如2019-02-27。
    * @example `2019-02-27`
    */ "ChartDate"?: string;
}
export { GetDroppedIpListRequest };