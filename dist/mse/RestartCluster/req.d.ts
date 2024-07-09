export interface RestartClusterRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-78v1l83****`
     */
    "InstanceId"?: string;
    /**
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * PodName，支持多个podName传入，多个用英文"," 分隔；
     * 如："mse-a8aba010-1629719288255-reg-center-0-1,mse-a8aba010-1629719288255-reg-center-0-2"
     * 传入的Pod必须属于当前集群，与instanceId绑定，否则重启异常
     * @example `mse-a8aba010-1629719288255-reg-center-0-1`
     */
    "PodNameList"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
