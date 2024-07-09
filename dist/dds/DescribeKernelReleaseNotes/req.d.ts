export interface DescribeKernelReleaseNotesRequest {
    /**
     * 数据库小版本号，例如：**mongodb_20180522_0.4.8**。
     * 您可以前往MongoDB控制台的实例**基本信息**页面，在**规格信息**区域获取**小版本**。
     * > 该参数必传，将返回大于该版本的版本号列表。
     * @example `mongodb_20180522_0.4.8`
     */
    "KernelVersion"?: string;
}
