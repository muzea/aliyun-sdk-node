export interface ListSpaceRequest {
    /**
     * 页码，从0开始。
     * @example `0`
     */
    "PageNum"?: number;
    /**
     * 每页显示的行数。默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 服务空间id列表。
     */
    "SpaceIds"?: string[];
    /**
     * EMAS项目空间id。
     * @example `3821658`
     */
    "EmasWorkspaceId"?: string;
}
