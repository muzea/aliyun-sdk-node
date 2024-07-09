export interface DescribeContainerServiceK8sClustersResponse {
    /**
     * 唯一请求ID。
     * @example `20456DD5-5CBF-5015-9173-12CA4246B***`
     */
    RequestId: string;
    /**
     * 集群信息。
     */
    K8sClusters: {
        /**
         * 集群名称。
         * @example `cluster-test`
         */
        Name: string;
        /**
         * 集群ID。
         * @example `cdbbe7aa56cbf4b8f830f83718d26****`
         */
        ClusterId: string;
    }[];
}
