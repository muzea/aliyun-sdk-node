export interface GetRunResponse {
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
     * 工作空间名字
     * @example `test-workspace`
     */
    Workspace: string;
    /**
     * 任务ID
     * @example `run-13BeYuxc0fxO24uA75UppTiMRoQ`
     */
    RunId: string;
    /**
     * 任务名称
     * @example `test-run`
     */
    RunName: string;
    /**
     * 提交ID
     * @example `sub-13BeXWnGvrOl3MC124tazcJVKaV`
     */
    SubmissionId: string;
    /**
     * 应用来源
     * @example `EasyGene`
     */
    Source: string;
    /**
     * 应用名称
     * @example `Sentieon`
     */
    AppName: string;
    /**
     * 应用版本
     * @example `1`
     */
    AppRevision: string;
    /**
     * 实体类型
     * @example `sample`
     */
    EntityType: string;
    /**
     * 实体对象名称
     * @example `s1`
     */
    EntityName: string;
    /**
     * 用户ID
     * @example `13579222`
     */
    User: string;
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
     * @example `2021-06-10T13:30:24.414557061Z`
     */
    StartTime: string;
    /**
     * 结束时间
     * @example `2021-06-10T13:36:20.405878292Z`
     */
    EndTime: string;
    /**
     * 任务配置
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
         * 相对输出路径
         * @example `false`
         */
        UseRelativeOutputPaths: boolean;
    };
    /**
     * 任务输入
     * @example `{     "workflow1.task1.param1": "helloooo.txt",     "workflow1.task1.param2": "abc",     "workflow1.task2.param1": "new_helloooo.txt",     "workflow1.task2.param2": "def" }`
     */
    Inputs: string;
    /**
     * 任务输出
     * @example `{         "workflow1.bam": "oss://my-bucket/test.bam",         "workflow1.vcf": "oss://my-bucket/test.vcf"     }`
     */
    Outputs: string;
    /**
     * 任务标签
     */
    Labels: any;
    /**
     * 输出拷贝目录
     * @example `oss://my-bucket/output/`
     */
    OutputFolder: string;
    /**
     * 任务执行目录
     * @example `oss://my-bucket/exec/`
     */
    ExecuteDirectory: string;
    /**
     * 默认runtime值
     * @example `{}`
     */
    DefaultRuntime: string;
    /**
     * 任务描述
     * @example `test run`
     */
    Description: string;
    /**
     * 时序信息
     * @example `{}`
     */
    Timing: string;
    /**
     * 作业信息
     * @example `{}`
     */
    Calls: string;
    /**
     * 错误信息
     * @example `{}`
     */
    Failures: string;
    BillingInstanceIds: string[];
}
