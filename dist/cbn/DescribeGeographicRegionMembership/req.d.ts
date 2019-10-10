interface DescribeGeographicRegionMembershipRequest {
    "RegionId"?: string;
    /**
    * 指定区域的ID，取值：
    * - **china**：中国大陆。
    * - **asia-pacific** ：亚太。
    * - **europe**：欧洲。
    * - **australia**：澳洲。
    * - **north-america**：北美。
    * @example `china `
    */ "GeographicRegionId": string;
    "OwnerId"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `1`
    */ "PageSize"?: number;
}
export { DescribeGeographicRegionMembershipRequest };