interface DescribePropertyUserItemRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 是否强制刷新待查询数据。
    * @example `true`
    */ "ForceFlush"?: boolean;
    /**
    * 指定待查询的账号信息。
    * @example `adm`
    */ "User"?: string;
    /**
    * 指定返回结果的当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 指定列表每页显示数据条数 。
    * @example `2`
    */ "PageSize"?: number;
}
export { DescribePropertyUserItemRequest };