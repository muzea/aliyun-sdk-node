export interface CreateTemplateRequest {
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
     * 应用的名称
     * @example `MyApp`
     */
    "AppName": string;
    /**
     * 应用的版本
     * @example `4.1.4.1-v1.0`
     */
    "AppRevision"?: string;
    /**
     * 应用版本唯一标签
     * @example `ProduceVersion`
     */
    "RevisionTag"?: string;
    /**
     * 根实体类型
     * @example `TestEntity`
     */
    "RootEntity"?: string;
    /**
     * 应用的表达式
     * @example `TestEntity`
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
         * @example `File`
         */
        VariableType: string;
        /**
         * 变量值
         * @example `oss://bucket/file1.fastq`
         */
        VariableValue: string;
        /**
         * 该参数是否必填。
         * - true：必填。
         * - false：非必填。
         * > 返回参数中，此参数无需处理。
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
     * 应用的输出参数
     */
    "OutputsExpression": {
        /**
         * 任务名称
         * @example `Task1`
         */
        TaskName: string;
        /**
         * 变量名
         * @example `bam`
         */
        VariableName: string;
        /**
         * 变量类型
         * @example `File`
         */
        VariableType: string;
        /**
         * 变量值
         * @example `oss://bucket/file.bam`
         */
        VariableValue: string;
        /**
         * 该参数是否必填。
         * - true：必填。
         * - false：非必填。
         * 默认值为true。
         * @example `true`
         */
        Required: boolean;
        /**
         * 帮助信息
         * @example `输出比对结果`
         */
        Help: string;
        /**
         * 步骤顺序
         * @example `1`
         */
        StepOrder: number;
    }[];
    /**
     * 应用标签
     * @example `{"key1": "value1"}`
     */
    "Labels"?: string;
    /**
     * 幂等Token
     * @example `GFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    "ClientToken"?: string;
}
