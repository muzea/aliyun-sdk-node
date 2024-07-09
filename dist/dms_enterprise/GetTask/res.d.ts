export interface GetTaskResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `7838266C-E17B-58F4-B072-4DC356B58258`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务流任务。
     */
    Task: {
        /**
         * 节点所在的任务流ID。
         * @example `7321`
         */
        DagId: number;
        /**
         * 任务节点名称。
         * @example `跨库Spark SQL-1`
         */
        NodeName: string;
        /**
         * 任务节点类型，返回值请参见[NodeType参数说明](~~424705~~)。
         * @example `SPARK_SQL`
         */
        NodeType: string;
        /**
         * 节点配置内容。
         * @example `{\"dbList\":[{\"instanceId\":177****}"   }`
         */
        NodeContent: string;
        /**
         * 节点变量（时间变量配置）。
         * @example `{\"variables\":[{\"name\":\"Today\",\"pattern\":\"yyyy-MM-dd|+1d\"}]}`
         */
        TimeVariables: string;
        /**
         * 节点高级配置。
         * @example `{\"dbId\":39****,\"dbType\":\"mysql\",\"locale\":\"zh\",\"sql\":\"/* 请确认以下SQL符合您的变更需求，务必确认无误后再提交执行 *​/\\n\\nCREATE TABLE IF NOT EXISTS `momo_weekGather` (\\n\\t`id` bigint AUTO_INCREMENT DEFAULT '0',\\n\\t`age` bit NULL,\\n\\t`action` varchar(150) NULL,\\n\\t`elapse_time` datetime NULL,\\n\\tPRIMARY KEY (`id`)\\n) ENGINE=InnoDB\\nDEFAULT CHARACTER SET=utf8;\"}`
         */
        NodeConfig: string;
        /**
         * 节点输出变量，仅部分类型节点存在此参数。
         * @example `{ "outputs":[ "extractMethod":"json" , "variableName":"var",   "description":"demo desc" } ] }`
         */
        NodeOutput: string;
        /**
         * 节点在图上的显示位置。
         * @example `{"{\"x\":0,\"y\":0,\"layoutType\":\"Horizontal\"}",  "id": 51***}`
         */
        GraphParam: string;
    };
}
