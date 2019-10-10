interface DescribeFileSystemsRequest {
    "RegionId"?: string;
    /**
    * 文件系统 ID
    * @example `109c042666`
    */ "FileSystemId"?: string;
    /**
    * 文件系统类型，可选值：standard、extreme，默认值：standard
    * @example `standard`
    */ "FileSystemType"?: string;
    /**
    * 专有网络 ID
    * @example `vpc-bp1sevsgtqvk5gxblhhod`
    */ "VpcId"?: string;
    /**
    * 每个分页包含的文件系统个数（默认为 10）
    * @example `1`
    */ "PageSize"?: number;
    /**
    * 列表的分页页码（从 1 开始计数）
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeFileSystemsRequest };