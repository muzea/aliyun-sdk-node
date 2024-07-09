export interface GetProjectFeatureEntityResponse {
    /**
     * 请求ID。
     * @example `37D19490-AB69-567D-A852-407C94E510E9`
     */
    RequestId: string;
    /**
     * 特征实体名称。
     * @example `feature_entity_1`
     */
    Name: string;
    /**
     * 特征实体ID。
     * @example `3`
     */
    FeatureEntityId: string;
    /**
     * 项目名称。
     * @example `project_1`
     */
    ProjectName: string;
    /**
     * 工作空间ID。
     * @example `34245`
     */
    WorkspaceId: string;
    /**
     * 关联特征视图用的Join ID。
     * @example `user_id`
     */
    JoinId: string;
}
