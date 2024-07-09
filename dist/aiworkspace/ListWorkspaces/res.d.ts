export interface ListWorkspacesResponse {
    /**
     * 请求ID。
     * @example `8D7B2E70-F770-505B-A672-09F1D8F2EC1E`
     */
    RequestId: string;
    /**
     * 工作空间详情列表，当Option为GetWorkspaces时会返回该列表。
     */
    Workspaces: {
        /**
         * 工作空间ID。
         * @example `123`
         */
        WorkspaceId: string;
        /**
         * 工作空间名称。
         * @example `workspace-example`
         */
        WorkspaceName: string;
        /**
         * 工作空间创建时间。以ISO8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ss.SSSZ。
         * @example `2021-01-21T17:12:35.232Z`
         */
        GmtCreateTime: string;
        /**
         * 工作空间修改时间。以ISO8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。
         * @example `2021-01-21T17:12:35.232Z`
         */
        GmtModifiedTime: string;
        /**
         * 工作空间描述。
         * @example `workspace description example`
         */
        Description: string;
        /**
         * 创建者用户ID。
         * @example `122424353535`
         */
        Creator: string;
        /**
         * 工作空间包含的环境列表。
         */
        EnvTypes: string[];
        /**
         * 工作空间状态。
         * @example `ENABLED`
         */
        Status: string;
        /**
         * 管理员账户名称列表。
         */
        AdminNames: string[];
        /**
         * 是否为默认工作空间。
         * @example `false`
         */
        IsDefault: boolean;
        /**
         * 扩展信息，目前包含TenantId，代表租户ID。
         * @example `{"TenantId": "4286******98"}`
         */
        ExtraInfos: any;
    }[];
    /**
     * 符合查询条件的工作空间总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 用户在一个工作空间内允许开通的资源类型和数量限制，当Option为GetResourceLimits时会返回该列表。
     * 目前支持的资源类型包括：
     * * MaxCompute_share：MaxCompute后付费。
     * * MaxCompute_isolate：MaxCompute预付费。
     * * DLC_share：DLC后付费。
     * * PAI_isolate：PAI预付费。
     * * PAI_share：PAI后付费。
     * * DataWorks_isolate：Dataworks预付费。
     * * DataWorks_share：Dataworks后付费。
     * @example `{
       "MaxCompute_share": 1,
       "MaxCompute_isolate": 1,
       "DLC_share": 1
    }`
     */
    ResourceLimits: any;
}
