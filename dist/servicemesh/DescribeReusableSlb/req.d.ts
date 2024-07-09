export interface DescribeReusableSlbRequest {
    /**
     * 数据平面集群ID。填写该参数时，不能填写ServiceMeshId。该参数和ServiceMeshId不能同时为空。
     * @example `ca2cfe41fefeb489d9b9dba18a7c5****`
     */
    "K8sClusterId"?: string;
    /**
     * 网络类型，取值：
     * - `intranet`：专有网络
     * - `internet`：公网
     * @example `internet`
     */
    "NetworkType": string;
    /**
     * 负载均衡类型，取值：
     * - `clb`：传统型负载均衡
     * - `nlb`：网络型负载均衡
     * 默认为`clb`。
     * @example `clb`
     */
    "LbType"?: string;
    /**
     * ASM实例ID。填写该参数时，不能填写K8sClusterId。该参数和K8sClusterId不能同时为空。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId"?: string;
}
