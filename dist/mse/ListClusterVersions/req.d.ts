export interface ListClusterVersionsRequest {
    /**
     * 集群类型，包括ZooKeeper、Nacos-Ans和Eureka。
     * @example `Nacos-Ans`
     */
    "ClusterType"?: string;
    /**
     * 取值如下：
     * - `mse_dev`：表示开发版。
     * - `mse_pro`：表示专业版（默认取值）。
     * @example `mse_pro`
     */
    "MseVersion"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
