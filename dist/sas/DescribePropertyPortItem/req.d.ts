interface DescribePropertyPortItemRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 是否强制刷新待查询数据。
    * @example `true`
    */ "ForceFlush"?: boolean;
    /**
    * 指定待查询端口。
    * @example `22`
    */ "Port"?: string;
    /**
    * 指定返回结果的当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 指定列表每页显示数据条数。
    * @example `5`
    */ "PageSize"?: number;
}
export { DescribePropertyPortItemRequest };