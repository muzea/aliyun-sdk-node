interface DescribeUserTagsRequest {
    "RegionId"?: string;
    /**
    * 指定访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定返回结果语言环境。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 根据搜索信息查询特定资产标签列表。
    * @example `test.**.com`
    */ "Search"?: string;
    /**
    * 指定待查询列表的当前页码。
    * @example `20`
    */ "CurrentPage"?: number;
    /**
    * 指定待查询结果每页显示数据总数量。
    * @example `2`
    */ "PageSize"?: number;
}
export { DescribeUserTagsRequest };