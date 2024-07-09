export interface CreateClusterDiagnosisRequest {
    /**
     * 集群ID。
     * @example `ce0da5a1d627e4e9e9f96cae8ad07****`
     */
    "cluster_id"?: string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 诊断类型。
         * @example `node`
         */
        type: string;
        /**
         * 用于指定诊断对象的参数。不同诊断类型的参数示例：
         * node:
         * ```
         * {"name": "cn-shanghai.10.10.10.107"}
         * ```
         * pod
         * ```
         * {"namespace": "kube-system", "name": "csi-plugin-2cg9f"}
         * ```
         * network
         * ```
         * {"src": "10.10.10.108", "dst": "10.11.247.16", "dport": "80"}
         * ```
         * ingress
         * ```
         * {"url": "https://example.com"}
         * ```
         * memory
         * ```
         * {"node":"cn-hangzhou.172.16.9.240"}
         * ```
         * service
         * ```
         * {"namespace": "kube-system", "name": "nginx-ingress-lb"}
         * ```
         * @example `{"namespace": "kube-system", "name": "csi-plugin-2cg9f"}`
         */
        target: any;
    };
}
