export interface GetTemplateResponse {
    /**
     * 应用模板名称
     * @example `test-template`
     */
    TemplateName: string;
    /**
     * 创建时间
     * @example `2021-06-10T13:30:20.414557061Z`
     */
    CreateTime: string;
    /**
     * 应用简要描述
     * @example `test template`
     */
    Description: string;
    /**
     * 应用的名称
     * @example `MyApp`
     */
    AppName: string;
    /**
     * 应用的版本
     * @example `1`
     */
    AppRevision: string;
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 应用输入
     */
    InputsExpression: {
        /**
         * 任务名称
         * @example `Task1`
         */
        TaskName: string;
        /**
         * 变量名称
         * @example `v1`
         */
        VariableName: string;
        /**
         * 变量类型
         * @example `File`
         */
        VariableType: string;
        /**
         * 变量值
         * @example `oss://bucket/file1.fastq`
         */
        VariableValue: string;
        /**
         * 是否必须参数
         * @example `true`
         */
        Required: boolean;
        /**
         * 帮助信息
         * @example `test help`
         */
        Help: string;
        /**
         * 步骤顺序
         * @example `0`
         */
        StepOrder: number;
    }[];
    /**
     * 应用标签
     */
    Labels: any;
    /**
     * 应用最后修改时间
     * @example `2021-06-10T13:30:20.405878292Z`
     */
    LastModifiedTime: string;
    /**
     * 应用的输出参数
     */
    OutputsExpression: {
        /**
         * 任务名称
         * @example `jobname`
         */
        TaskName: string;
        /**
         * 变量名称
         * @example `fastq1`
         */
        VariableName: string;
        /**
         * 变量类型
         * @example `string`
         */
        VariableType: string;
        /**
         * 变量值
         * @example `abc_1.fastq.gz`
         */
        VariableValue: string;
        /**
         * 是否必须参数
         * @example `true`
         */
        Required: boolean;
        /**
         * 帮助信息
         * @example `测序reads文件`
         */
        Help: string;
        /**
         * 步骤顺序
         * @example `2`
         */
        StepOrder: number;
    }[];
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 应用来源
     * @example `EasyGene`
     */
    Source: string;
    /**
     * 工作空间名称
     * @example `test-workspace`
     */
    Workspace: string;
    /**
     * 实体类型
     * @example `test-entity`
     */
    RootEntity: string;
    /**
     * 应用版本唯一标签
     * @example `produceVersion`
     */
    RevisionTag: string;
}
