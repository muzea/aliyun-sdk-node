export interface ListWorkFlowNodesRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `-1`
     */
    "Tid"?: number;
    /**
     * 搜索审批节点名称。
     * @example `admin`
     */
    "SearchName"?: string;
}
