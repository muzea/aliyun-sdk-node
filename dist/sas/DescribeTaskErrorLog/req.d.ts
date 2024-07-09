export interface DescribeTaskErrorLogRequest {
    /**
     * 镜像修复任务的ID。
     * > 通过调用[DescribeImageFixTask](~~DescribeImageFixTask~~)接口查询镜像漏洞修复任务获取BuildTaskId。
     * @example `ivf-6e520160-205d-4801-b8e9-9e7e****`
     */
    "BuildTaskId": string;
}
