export interface DescribeFabricCandidateOrganizationsResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 结果
     */
    Result: {
        /**
         * 服务状态
         * @example `Running`
         */
        ServiceState: string;
        /**
         * 组织名
         * @example `org1`
         */
        OrganizationName: string;
        /**
         * 集群状态
         * @example `Running`
         */
        ClusterState: string;
        /**
         * 组织ID
         * @example `peers-1oxw31d04****`
         */
        OrganizationId: string;
    }[];
}
