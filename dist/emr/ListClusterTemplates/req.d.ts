interface ListClusterTemplatesRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 分页大小。
    * @example `10`
    */ "PageSize": number;
    /**
    * 页数，从 1 开始。
    * @example `1`
    */ "PageNumber": number;
    /**
    * 集群模版ID。
    * @example `CT-4A6799A79D73385B`
    */ "BizId"?: string;
}
export { ListClusterTemplatesRequest };