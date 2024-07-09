export interface CreateProjectRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 项目名称。
         * @example `project1`
         */
        Name: string;
        /**
         * 工作空间ID，可通过[ListWorkspaces](~~449124~~)获取。
         * @example `324`
         */
        WorkspaceId: string;
        /**
         * 项目描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 离线数据源ID，可通过接口ListDatasources获取。
         * @example `4`
         */
        OfflineDatasourceId: string;
        /**
         * 离线数据生命周期（天）。
         * @example `90`
         */
        OfflineLifeCycle: number;
        /**
         * 在线数据源ID，可通过接口ListDatasources获取。
         * @example `3`
         */
        OnlineDatasourceId: string;
    };
}
