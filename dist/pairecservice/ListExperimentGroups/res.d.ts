export interface ListExperimentGroupsResponse {
    /**
     * Id of the request
     * @example `59CE7EC6-F268-5D71-9215-32922CC50D72`
     */
    RequestId: string;
    /**
     * 列表内元素总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 实验组列表。
     */
    ExperimentGroups: {
        /**
         * 实验组ID。
         * @example `3`
         */
        ExperimentGroupId: string;
        /**
         * 层ID。
         * @example `3`
         */
        LayerId: string;
        /**
         * 实验室ID。
         * @example `4`
         */
        LaboratoryId: string;
        /**
         * 场景ID。
         * @example `1`
         */
        SceneId: string;
        /**
         * 实验组名称。
         * @example `experiment_group1`
         */
        Name: string;
        /**
         * 实验组描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 调试用户。
         * @example `1124512470******,1124512471******,1124512472******`
         */
        DebugUsers: string;
        /**
         * 调试人群ID。
         * @example `4`
         */
        DebugCrowdId: string;
        /**
         * 创建人。
         * @example `1124512470******`
         */
        Owner: string;
        /**
         * 是否需要AB实验组。
         * @example `true`
         */
        NeedAA: boolean;
        /**
         * 过滤条件。
         * @example `gender=female`
         */
        Filter: string;
        /**
         * 分流方式。
         * ● UserId-用户ID
         * ● TimeDuration-时段
         * @example `UserId`
         */
        DistributionType: string;
        /**
         * 分流时段。
         * @example `5`
         */
        DistributionTimeDuration: number;
        /**
         * 人群ID。
         * @example `3`
         */
        CrowdId: string;
        /**
         * 实验组配置。
         * @example `{}`
         */
        Config: string;
        /**
         * 预留桶号。
         * @example `1,2,3,4`
         */
        ReservedBuckets: string;
        /**
         * 实验组状态。
         * ● Offline-未上线
         * ● Online-已上线
         * ● Pushed-已推全
         * @example `Offline`
         */
        Status: string;
        CrowdTargetType: string;
        RandomFlow: number;
        HoldingBuckets: string;
    }[];
}
