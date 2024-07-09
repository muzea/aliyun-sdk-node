export interface DeleteSkillGroupRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 技能组ID。
     * @example `skillgroup@ccc-test`
     */
    "SkillGroupId": string;
    /**
     * 是否强制删除，如果技能组关联了号码或坐席，需要启用强制删除标志才能删除成功。
     * @example `true`
     */
    "Force"?: boolean;
}
