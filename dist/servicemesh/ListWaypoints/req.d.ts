export interface ListWaypointsRequest {
    /**
     * 服务网格实例ID
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * 数据面集群ID。
     * @example `ce3c25e247da24f3aab9b7edfae83****`
     */
    "ClusterId": string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * waypoint名称。为空时，返回所有waypoint；不为空时，查询指定名称waypoint。
     * @example `bookinfo-productpage`
     */
    "Name"?: string;
    /**
     * 限制返回的waypoint数量。
     * @example `30`
     */
    "Limit"?: number;
    /**
     * 配合Limit使用，用于从指定offset开始查询waypoint。第一次调用时，填写空即可。如果返回结果中Continue不为空，即代表还有未返回的数据，需要带上返回的Continue继续调用。
     * @example `eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6MjY4Njc5Miwic3RhcnQiOiJkZWZhdWx0L2Jvb2tpbmZvLXByb2R1Y3RwYWdlXHUwMDAwIn0`
     */
    "Continue"?: string;
}
