export interface UpdateBatchRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 批处理任务ID，获取方式请参见[创建批处理](~~606694~~)。
     * @example `batch-4eb9223f-3e88-42d3-a578-3f2852******`
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
         * 模板名称。
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
     * @example `{"key":"val"}`
     */
    "Tags"?: any;
}
