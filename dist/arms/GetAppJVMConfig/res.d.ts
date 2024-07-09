export interface GetAppJVMConfigResponse {
    /**
     * 请求ID。
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
    /**
     * 接口状态。
     * - 2XX：成功。
     * - 3XX：重定向。
     * - 4XX：请求错误。
     * - 5XX：服务器错误。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时返回的信息。
     * @example `message`
     */
    Message: string;
    /**
     * 操作是否成功：
     * - true：操作成功
     * - false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * JVM信息列表。
     */
    JvmInfoList: {
        /**
         * 应用ID。
         * @example `dsv9zcel92@1455182510c5369`
         */
        Pid: string;
        /**
         * VM参数。
         * @example `[-javaagent:/home/admin/.opt/ArmsAgent/arms-bootstrap-1.7.0-SNAPSHOT.jar, -Doneagent.plugin.arms-agent.enabled=true, -Darms.licenseKey=[******], -Darms.agent.env=K8s, -Darms.agent.podinfo.path=/etc/podinfo, -Darms.appName=productservice, -Doneagent.region=cn-hangzhou, -Dproject.name=Product]`
         */
        VmArgs: string;
        /**
         * 主机名。
         * @example `host_name`
         */
        HostName: string;
        /**
         * IP地址。
         * @example `47.91.59.244`
         */
        Ip: string;
        /**
         * Agent的版本。
         * @example `1.7.0-SNAPSHOT_3.0.3_3756244`
         */
        AgentVersion: string;
        /**
         * 进程ID。
         * @example `1`
         */
        ProcId: string;
    }[];
}
