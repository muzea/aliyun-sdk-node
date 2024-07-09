export interface CreateExperimentGroupRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 层ID，可通过接口ListLayers获取。
         * @example `3`
         */
        LayerId: string;
        /**
         * 实验组名称。
         * @example `experiment_group_test`
         */
        Name: string;
        /**
         * 实验组描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 调试用户（需为阿里云账户主账号/子账号uid），多个用户需通过逗号作间隔。
         * @example `1124512470******,1124512471******,1124512472******`
         */
        DebugUsers: string;
        /**
         * 调试人群ID，可通过接口ListCrowds获取。
         * @example `3`
         */
        DebugCrowdId: string;
        /**
         * 是否需要AA实验组。
         * @example `true`
         */
        NeedAA: boolean;
        /**
         * 人群定向指定的过滤条件。
         * @example `gender=male`
         */
        Filter: string;
        /**
         * 人群定向的指定人群ID，可通过接口ListCrowds获取。
         * @example `1`
         */
        CrowdId: string;
        /**
         * 分流方式。
         * ● UserId-用户ID
         * ● TimeDuration-时段
         * @example `UserId`
         */
        DistributionType: string;
        /**
         * 分流时段。
         * @example `3`
         */
        DistributionTimeDuration: number;
        /**
         * 实验组配置。
         * @example `{"RankBy": "Score"}`
         */
        Config: string;
        /**
         * 预留桶号。
         * @example `1,2,3`
         */
        ReservedBuckets: string;
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-test1`
         */
        InstanceId: string;
        CrowdTargetType: string;
        RandomFlow: number;
    };
}
