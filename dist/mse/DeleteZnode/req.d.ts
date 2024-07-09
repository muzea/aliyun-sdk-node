export interface DeleteZnodeRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId": string;
    /**
     * 节点路径。
     * @example `/zookeeper`
     */
    "Path": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
