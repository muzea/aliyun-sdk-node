export interface ListWorkspaceQueuesRequest {
    /**
     * 工作空间ID
     * @example `w-26ca1703f6d71e6e`
     */
    "workspaceId"?: string;
    /**
     * 环境类型
     * @example `production`
     */
    "environment"?: string;
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
