interface DescribeRegionsRequest {
    "RegionId"?: string;
    /**
    * 每个分页包含的区域个数（默认 10）
    * @example `2`
    */ "PageSize"?: number;
    /**
    * 列表的分页页码（从 1 开始计数）
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 文件系统类型，可选值：standard、extreme，默认值：standard
    * @example `standard`
    */ "FileSystemType"?: string;
}
export { DescribeRegionsRequest };