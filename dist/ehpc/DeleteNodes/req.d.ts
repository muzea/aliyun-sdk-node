export interface DeleteNodesRequest {
    /**
     * 集群ID。
     * 您可以调用[ListClusters](~~87116~~)查询集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 是否释放由E-HPC创建的节点。
     * 默认值：true
     * @example `true`
     */
    "ReleaseInstance"?: boolean;
    /**
     * 是否直接删除节点。取值范围：
     * - true：是
     * - false：否
     * @example `false`
     */
    "Sync"?: boolean;
    /**
     * 待删除的节点信息。
     */
    "Instance": {
        /**
         * 要删除的计算节点ID。N的取值范围：1~100
         * 您可以调用[DescribeCluster](~~87126~~)查询指定集群中的节点ID。
         * @example `i-bp13p7vlcb1uihfv****`
         */
        Id: string;
    }[];
}
