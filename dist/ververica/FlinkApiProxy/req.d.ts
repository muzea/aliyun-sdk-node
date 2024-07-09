export interface FlinkApiProxyRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 资源类型，支持以下类型：
     * <ul>
     * <li>
     * jobs
     * </li>
     * <li>
     * sessionclusters
     * </li>
     * </ul>
     * @example `jobs`
     */
    "resourceType": string;
    /**
     * 资源ID。
     * @example `5a27a3aa-c5b9-4dc1-8c86-be57d2d6****`
     */
    "resourceId": string;
    /**
     * flink-ui路径。
     * @example `/jobs/4df35f8e54554b23bf7dcd38a151****`
     */
    "flinkApiPath": string;
}
