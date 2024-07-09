export interface ResetNodesRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 要重置的节点信息。
     */
    "Instance": {
        /**
         * 第N个要重置的计算节点ID。N的取值范围：1~100
         * 您可以通过调用[ListNodes](~~87161~~)获取节点ID。
         * @example `i-bp13p7vlcb1uihfv****`
         */
        Id: string;
    }[];
}
