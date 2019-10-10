interface DescribeKernelReleaseNotesRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 数据库小版本号，例如：**mongodb_20180522_0.4.8**。
    * - 如果传入该参数，返回大于该版本的版本号列表。
    * - 如果不传入该参数，返回所有版本号列表。
    * @example `mongodb_20180522_0.4.8`
    */ "KernelVersion"?: string;
}
export { DescribeKernelReleaseNotesRequest };