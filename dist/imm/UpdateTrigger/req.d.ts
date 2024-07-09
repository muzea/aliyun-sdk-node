export interface UpdateTriggerRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据接入ID，获取方式请参见[创建触发器](~~479912~~)。
     * @example `trigger-9f72636a-0f0c-4baf-ae78-38b27b******`
     */
    "Id": string;
    /**
     * 输入的数据源配置。
     */
    "Input"?: any;
    /**
     * 处理模板列表。
     */
    "Actions"?: {
        /**
         * 模版名称。
         * @example `doc/convert`
         */
        Name: string;
        /**
         * 模版参数列表。
         */
        Parameters: string[];
    }[];
    /**
     * 自定义标签，用于对异步任务进行搜索、过滤。
     * @example `{"test": "val1"}`
     */
    "Tags"?: any;
}
