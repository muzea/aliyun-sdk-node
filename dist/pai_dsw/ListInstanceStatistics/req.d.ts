export interface ListInstanceStatisticsRequest {
    /**
     * 工作空间ID列表。多个ID间使用半角逗号（,）分隔。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `27218,34956`
     */
    "WorkspaceIds": string;
}
