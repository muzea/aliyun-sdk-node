export interface ListHpoExperimentsResponse {
    /**
     * POP的请求id
     * @example `3F190916-B3E5-5D1E-AD0C-35C0DF105F51`
     */
    RequestId: string;
    /**
     * 内部错误码。只在响应出错时被设置。
     * @example `INVALID_INPUT_PARAMS`
     */
    Code: string;
    /**
     * 响应错误信息。只在响应出错时被设置
     * @example `Missing 'user_id' in request.`
     */
    Message: string;
    /**
     * 额外的错误信息。只在响应出错时被设置。
     */
    Detail: any;
    /**
     * 查询到的实验总数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 符合搜索条件的实验列表。
     */
    Experiments: {
        /**
         * 实验id。
         * @example `sORVEck`
         */
        ExperimentId: string;
        /**
         * 实验创建者的id。
         * @example `1049310008714189`
         */
        Creator: string;
        /**
         * 实验配置里的SearchSpace属性。
         * @example `{'foo':'bar'}`
         */
        SearchSpace: string;
        /**
         * 实验名称。
         * @example `my experiment x`
         */
        Name: string;
        /**
         * 实验状态。
         * @example `CREATED, RUNNING, FINISHED, FAILED, EARLY_STOPPED, USER_CANCELED, WAITING, NO_MORE_TRIAL, UNKNOWN`
         */
        Status: string;
        /**
         * 实验类型。对于HPO实验，类型值始终是1.
         * @example `1`
         */
        JobType: string;
        /**
         * trial.ini配置内容。其中ak/sk等敏感数据如果存在，则会被API用星号替换实际数据内容。
         * @example `[odps_config]
        key1 = value1
        key2 = value2`
         */
        ConfigIni: string;
        /**
         * exp.yml配置内容
         * @example `experimentName: dlc_oss_mnist
        experimentWorkingDirectory: ../expdir
        searchSpaceFile: search_space.json
        trialCommand: python3 -m hpo_tools.core.utils.run --config=./trial.ini
        trialConcurrency: 1
        maxTrialNumber: 4
        tuner:
          name: TPE
          classArgs:
            optimize_mode: maximize
        trainingService:
          platform: local
        assessor:
          name: PAIAssessor
          classArgs:
            optimize_mode: maximize
            start_step: 2`
         */
        ConfigYml: string;
        /**
         * 实验创建时间。
         * @example `2023-03-31T10:29:30Z`
         */
        GmtCreateTime: string;
        /**
         * 实验数据最近更新时间。
         * @example `2022-10-27T00:55:54Z`
         */
        GmtModifiedTime: string;
        /**
         * 工作空间id
         * @example `default`
         */
        WorkspaceId: string;
        /**
         * 工作空间可见度。支持以下取值：
         * - PRIVATE（默认值）：表示工作空间内自己以及管理员可见。
         * - PUBLIC为：工作空间所有用户可见。
         * @example `PUBLIC`
         */
        Accessibility: string;
        /**
         * 实验描述信息
         * @example `description`
         */
        Description: string;
        /**
         * 该实验总的trial数量
         * @example `20`
         */
        TrialCount: number;
        /**
         * trial 状态和处于各个状态的trial的数量的map
         */
        TrialStatus: any;
        /**
         * 是否已经被删除
         * @example `1`
         */
        Deleted: boolean;
    }[];
}
