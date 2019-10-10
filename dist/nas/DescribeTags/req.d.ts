interface DescribeTagsRequest {
    "RegionId"?: string;
    /**
    * 文件系统ID。
    * @example `0addcw13cd`
    */ "FileSystemId"?: string;
    /**
    * 每个分页包含的标签数，默认值：10。
    * @example `1`
    */ "PageSize"?: number;
    /**
    * 列表的分页页码，从1开始计数 。
    * @example `1`
    */ "PageNumber"?: number;
    "Tag"?: string[];
}
export { DescribeTagsRequest };