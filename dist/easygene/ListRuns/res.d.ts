export interface ListRunsResponse {
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 最大返回结果
     * @example `10`
     */
    MaxResults: number;
    /**
     * 下次查询Token
     * @example `MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    NextToken: string;
    /**
     * 返回个数
     * @example `10`
     */
    TotalCount: number;
    /**
     * 任务列表
     */
    Runs: {
        /**
         * 应用名称
         * @example `MyApp`
         */
        AppName: string;
        /**
         * 应用来源
         * @example `EasyGene`
         */
        Source: string;
        /**
         * 任务标签
         */
        Labels: any;
        /**
         * 任务名称
         * @example `test-run`
         */
        RunName: string;
        /**
         * 应用版本号
         * @example `1`
         */
        AppRevision: string;
        /**
         * 任务ID
         * @example `run-13BeYuxc0fxO24uA75UppTiMRoQ`
         */
        RunId: string;
        /**
         * 任务状态
         * @example `Running`
         */
        Status: string;
        /**
         * 提交时间
         * @example `2021-06-10T13:30:20.414557061Z`
         */
        CreateTime: string;
        /**
         * 开始时间
         * @example `2021-06-10T13:31:20.414557061Z`
         */
        StartTime: string;
        /**
         * 结束时间
         * @example `2021-06-10T13:38:20.414557061Z`
         */
        EndTime: string;
        /**
         * 提交ID
         * @example `sub-13BeXWnGvrOl3MC124tazcJVKaV`
         */
        SubmissionId: string;
        /**
         * 实体名称
         * @example `s1`
         */
        EntityName: string;
        /**
         * 实体对象ID
         * @example `sample`
         */
        EntityType: string;
        /**
         * 运行目录
         * @example `oss://my-bucket/my-execdir/`
         */
        ExecuteDirectory: string;
        /**
         * 执行选项
         */
        ExecuteOptions: {
            /**
             * 是否开启CallCaching
             * @example `false`
             */
            CallCaching: boolean;
            /**
             * 是否删除中间文件
             * @example `false`
             */
            DeleteIntermediateResults: boolean;
            /**
             * 失败模式
             * @example `NoNewCalls`
             */
            FailureMode: string;
            /**
             * 使用相对路径
             * @example `false`
             */
            UseRelativeOutputPaths: boolean;
        };
        /**
         * 输入参数
         * @example `{     "workflow1.task1.param1": "helloooo.txt",     "workflow1.task1.param2": "abc",     "workflow1.task2.param1": "new_helloooo.txt",     "workflow1.task2.param2": "def" }`
         */
        Inputs: string;
        /**
         * 默认运行时
         * @example `{}`
         */
        DefaultRuntime: string;
        /**
         * 工作空间
         * @example `test-workspace`
         */
        Workspace: string;
        /**
         * 区域
         * @example `cn-beijing`
         */
        RegionId: string;
    }[];
}
