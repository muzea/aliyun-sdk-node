interface DescribeCdnHttpsDomainListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 取得第几页，取值范围为：**1**~**100000**。
    * @example `5`
    */ "PageNumber"?: number;
    /**
    * 分页大小，默认**20**。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 搜索关键字。
    * @example `com`
    */ "Keyword"?: string;
}
export { DescribeCdnHttpsDomainListRequest };