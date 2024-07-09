export interface DescribeServiceMeshKubeconfigRequest {
    /**
     * 网格服务ID
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * 是否内网访问
     * @example `false`
     */
    "PrivateIpAddress"?: boolean;
}
