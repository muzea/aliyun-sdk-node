export interface ListExperimentsResponse {
    /**
     * Id of the request
     * @example `68075085-1A7D-55C2-B51D-7AD9B02A6DD6`
     */
    RequestId: string;
    /**
     * 列表内元素总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 实验列表
     */
    Experiments: {
        /**
         * 实验ID。
         * @example `3`
         */
        ExperimentId: string;
        /**
         * 实验ID别名。
         * @example `L1#EG1#E1`
         */
        AliasExperimentId: string;
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
         * @example `3`
         */
        LaboratoryId: string;
        /**
         * 场景ID。
         * @example `3`
         */
        SceneId: string;
        /**
         * 实验名称。
         * @example `experiment_test1`
         */
        Name: string;
        /**
         * 实验描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 实验类型。
         * ● Baseline-基准实验。
         * ● Normal-普通实验。
         * @example `Baseline`
         */
        Type: string;
        /**
         * 流量分配百分比。
         * @example `100`
         */
        FlowPercent: number;
        /**
         * 分配桶号。
         * @example `1,2,3`
         */
        Buckets: string;
        /**
         * 调试用户。
         * @example `uid1,uid2,uid3`
         */
        DebugUsers: string;
        /**
         * 调试人群ID。
         * @example `3`
         */
        DebugCrowdId: string;
        /**
         * 实验配置。
         * @example `{}`
         */
        Config: string;
        /**
         * 状态过滤。
         * ● Offline-未上线
         * ● Online-已上线
         * @example `Offline`
         */
        Status: string;
        /**
         * 创建时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtCreateTime: string;
        /**
         * 更新时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtModifiedTime: string;
    }[];
}
