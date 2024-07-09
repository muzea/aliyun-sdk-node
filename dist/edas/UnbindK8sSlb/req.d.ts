export interface UnbindK8sSlbRequest {
    /**
     * 应用ID，可以通过调用[ListApplication](~~149390~~)获取。
     * @example `5a166fbd-****-****-a286-781659d9f54c`
     */
    "AppId": string;
    /**
     * 集群ID，可以通过调用[GetK8sCluster](~~181437~~)获取。
     * @example `712082c3-****-****-9217-a947b5cde6ee`
     */
    "ClusterId"?: string;
    /**
     * 设置SLB的类型：
     * - **internet**：公网
     * - **intranet**：私网
     * @example `internet`
     */
    "Type": string;
    /**
     * 负载均衡SLB实例名称。
     * @example `a2d4ab12666544a479cdd0711a97****`
     */
    "SlbName"?: string;
}
