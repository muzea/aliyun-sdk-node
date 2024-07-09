export interface DescribeServiceMeshAdditionalStatusRequest {
    /**
     * ASM实例ID。
     * @example `ca04bc38979214bf2882be79d39b4****`
     */
    "ServiceMeshId": string;
    /**
     * 网格检查模式，取值：
     * - `normal`：将仅检查API Server负载均衡、Pilot负载均衡、审计日志、数据面Logtail安装的状态。
     * - `full`：将检查包括normal模式下检查项以及控制面日志、访问日志、网格安全组、APIServer EIP的状态。
     * @example `full`
     */
    "CheckMode"?: string;
}
