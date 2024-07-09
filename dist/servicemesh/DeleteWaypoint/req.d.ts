export interface DeleteWaypointRequest {
    /**
     * 服务网格实例ID。
     * @example `cb8963379255149cb98c8686f274x****`
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
    "Namespace": string;
    /**
     * Waypoint名称。
     * @example `bookinfo-reviews`
     */
    "Name": string;
}
