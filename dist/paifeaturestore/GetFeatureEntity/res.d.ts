export interface GetFeatureEntityResponse {
    /**
     * 请求ID。
     * @example `E23EFF09-58AA-5420-934F-8453AE01548D`
     */
    RequestId: string;
    /**
     * 特征实体名称。
     * @example `feature_entity_1`
     */
    Name: string;
    /**
     * 项目ID。
     * @example `3`
     */
    ProjectId: string;
    /**
     * 项目名称。
     * @example `project_1`
     */
    ProjectName: string;
    /**
     * 关联特征视图用的Join ID。
     * @example `user_id`
     */
    JoinId: string;
    /**
     * 创建者的阿里云账号ID。
     * @example `123456789*****`
     */
    Owner: string;
    /**
     * 创建时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtCreateTime: string;
}
