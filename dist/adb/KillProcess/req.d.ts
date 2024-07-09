export interface KillProcessRequest {
    /**
     * 集群ID。
     * @example `am-bp1xxxxxxxx47`
     */
    "DBClusterId": string;
    /**
     * 需要被终止任务的唯一标识，调用[DescribeProcessList](~~190092~~)返回。
     * @example `202011191048151921681492420315100****`
     */
    "ProcessId"?: string;
}
