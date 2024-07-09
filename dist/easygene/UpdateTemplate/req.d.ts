export interface UpdateTemplateRequest {
    /**
     * 工作空间名称
     * @example `test-workspace`
     */
    "Workspace": string;
    /**
     * 应用模板名称
     * @example `test-template`
     */
    "TemplateName": string;
    /**
     * 应用模板描述
     * @example `This is a test template`
     */
    "Description"?: string;
    /**
     * 实体类型
     * @example `test-entity`
     */
    "RootEntity"?: string;
    /**
     * 应用输入表达式
     */
    "InputsExpression": {
        /**
         * 任务名称
         * @example `Task1`
         */
        TaskName: string;
        /**
         * 变量名
         * @example `fastq1`
         */
        VariableName: string;
        /**
         * 变量类型
         * @example `String`
         */
        VariableType: string;
        /**
         * 变量值
         * @example `read_1.fastq.gz`
         */
        VariableValue: string;
        /**
         * 是否必填
         * @example `True`
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
     * 应用的输出表达式
     */
    "OutputsExpression": {
        /**
         * 任务名称
         * @example `Task1`
         */
        TaskName: string;
        /**
         * 变量名
         * @example `Bam`
         */
        VariableName: string;
        /**
         * 变量类型
         * @example `String`
         */
        VariableType: string;
        /**
         * 变量值
         * @example `out.bam`
         */
        VariableValue: string;
        /**
         * 是否必填
         * @example `True`
         */
        Required: boolean;
        /**
         * 帮助信息
         */
        Help: string;
        /**
         * 步骤顺序
         */
        StepOrder: number;
    }[];
    /**
     * 应用模板标签
     * @example `{"key": "value"}`
     */
    "Labels"?: string;
}
