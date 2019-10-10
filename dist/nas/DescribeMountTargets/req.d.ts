interface DescribeMountTargetsRequest {
    "RegionId"?: string;
    /**
    * 文件系统 ID
    * @example `1ca404a666`
    */ "FileSystemId": string;
    /**
    * 挂载点域名
    * @example `1ca404a666-xog95.cn-hangzhou.nas.aliyuncs.com`
    */ "MountTargetDomain"?: string;
    /**
    * 每个分页包含的挂载点个数（默认 10）
    * @example `1`
    */ "PageSize"?: number;
    /**
    * 列表的分页页码（从 1 开始计数）
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeMountTargetsRequest };