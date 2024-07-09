export interface GetClusterCheckResponse {
    /**
     * Id of the request
     * @example `1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07****-clustercheck-lboto`
     */
    check_id: string;
    /**
     * 检查类型。
     * @example `ClusterUpgrade`
     */
    type: string;
    /**
     * 检查状态。
     * @example `Succeeded`
     */
    status: string;
    /**
     * 检查状态信息。
     * @example `task succeed`
     */
    message: string;
    /**
     * 创建时间。
     * @example `2023-10-16T08:31:20.292030178Z`
     */
    created_at: string;
    /**
     * 完成时间。
     * @example `2023-10-16T08:35:20.292030178Z`
     */
    finished_at: string;
    /**
     * 检查项。
     */
    check_items: any;
}
