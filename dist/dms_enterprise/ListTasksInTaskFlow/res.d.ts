export interface ListTasksInTaskFlowResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `8B36B063-6B7D-5595-9FCF-3844B7B7ACD4`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `任务流不存在或没有权限`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    Tasks: {
        /**
         * 任务列表。
         */
        Task: {
            /**
             * 节点名称。
             * @example `Cross-Database Spark SQL-1`
             */
            NodeName: string;
            /**
             * 任务节点类型，返回值请参见[NodeType参数说明](~~424705~~)。
             * @example `SPARK_SQL`
             */
            NodeType: string;
            /**
             * 节点配置内容。
             * @example `{     "dbId":123456, // 数据库Id     "sql":"/* 请使用当前节点所选择的数据库语法编写SQL *​/", // sql语句     "dbType":"polardb" // 数据库类型 }`
             */
            NodeContent: string;
            /**
             * 节点变量（时间变量配置）。
             * @example `{   "variables":[     // "variables"为固定值     {       "name":"var", // name指定变量名       "pattern":"yyyy-MM-dd|+0m+0h-2d+0w+0M+1y" // 见后面解释     }   ] }`
             */
            TimeVariables: string;
            /**
             * 节点高级配置。
             * @example `{     "rerun":{ // 必填固定值         "rerunEnable":true, // 是否开启重跑         "rerunCount":1, // 重跑次数         "rerunInterval":10 // 重跑间隔     } }`
             */
            NodeConfig: string;
            /**
             * 任务输出变量。
             * @example `{     "outputs":[         {             /*             变量提取设置             {                 "row":0, // 行，-1为所有行                 "column":-1, // 列，-1为所有列                 /*                 分隔符                 当选中所有行或所有列时，需要指定连接符。变量返回值为字符串                 *​/                 "combiner":","              }             *​/             "extractMethod":"{\"row\":0,\"column\":-1,\"combiner\":\",\"}",              "variableName":"var", // 变量名             "description":"For demo" // 变量介绍         }     ] }`
             */
            NodeOutput: string;
            /**
             * 节点在图上的显示位置。
             * @example `{\"x\":435,\"y\":192,\"layoutType\":\"Horizontal\"}`
             */
            GraphParam: string;
            /**
             * 节点ID。
             * @example `92***`
             */
            NodeId: string;
        }[];
    };
}
