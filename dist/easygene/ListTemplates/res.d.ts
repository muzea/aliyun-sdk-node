export interface ListTemplatesResponse {
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
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 应用模板列表
     */
    Templates: {
        /**
         * 工作空间
         * @example `test-workspace`
         */
        Workspace: string;
        /**
         * 应用模板名称
         * @example `test-template`
         */
        TemplateName: string;
        /**
         * 标签
         */
        Labels: any;
        /**
         * 应用名称
         * @example `my-app`
         */
        AppName: string;
        /**
         * 应用版本
         * @example `1`
         */
        AppRevision: string;
        /**
         * 实体类型
         * @example `test-entity`
         */
        RootEntity: string;
        /**
         * 应用输入
         */
        InputsExpression: {
            /**
             * 任务名称
             * @example `task1`
             */
            TaskName: string;
            /**
             * 变量名称
             * @example `fastq1`
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
             * @example `help test`
             */
            Help: string;
            /**
             * 步骤顺序
             * @example `0`
             */
            StepOrder: number;
        }[];
        /**
         * 应用的输出参数
         */
        OutputsExpression: {
            /**
             * 任务名称
             * @example `task1`
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
             * @example `oss://bucket/test.vcf`
             */
            VariableValue: string;
            /**
             * 是否必须参数
             * @example `true`
             */
            Required: boolean;
            /**
             * 帮助信息
             * @example `help test`
             */
            Help: string;
            /**
             * 步骤顺序
             * @example `1`
             */
            StepOrder: number;
        }[];
        /**
         * 模板描述信息
         * @example `This is a test template`
         */
        Description: string;
        /**
         * 创建时间
         * @example `2021-06-10T13:30:20.414557061Z`
         */
        CreateTime: string;
        /**
         * 最后修改时间
         * @example `2021-06-10T13:30:20.414557061Z`
         */
        LastModifiedTime: string;
        /**
         * 应用版本唯一标签
         * @example `ProduceVersion`
         */
        RevisionTag: string;
    }[];
    /**
     * 返回个数
     * @example `10`
     */
    TotalCount: number;
}
