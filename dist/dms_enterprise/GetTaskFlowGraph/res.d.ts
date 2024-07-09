export interface GetTaskFlowGraphResponse {
    /**
     * 请求ID。
     * @example `D9D91166-A626-5F4E-9CA6-7AB10C59DBD8`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
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
     * 任务流的DAG图变量列表。
     */
    TaskFlowGraph: {
        /**
         * 任务流名称。
         * @example `test`
         */
        DagName: string;
        Nodes: {
            /**
             * 任务流节点列表。
             */
            Node: {
                /**
                 * 任务流ID。
                 * @example `15***`
                 */
                DagId: number;
                /**
                 * 任务节点ID。
                 * @example `44***`
                 */
                NodeId: number;
                /**
                 * 任务节点名称。
                 * @example `test`
                 */
                NodeName: string;
                /**
                 * 任务节点类型，返回值请参见[NodeType参数说明](~~424705~~)。
                 * @example `36`
                 */
                NodeType: number;
                /**
                 * 节点配置内容。
                 * @example `{ODI3OTNRVC****UHVFT29"}`
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
                 * 节点在图上的显示位置。
                 * @example `{\"x\":541,\"y\":322,\"layoutType\":\"Horizontal\"}`
                 */
                GraphParam: string;
            }[];
        };
        Edges: {
            /**
             * 任务流边列表。
             */
            Edge: {
                /**
                 * 任务流ID。
                 * @example `15***`
                 */
                DagId: number;
                /**
                 * 任务流边ID。
                 * @example `24***`
                 */
                Id: number;
                /**
                 * 边的终点节点ID。
                 * @example `44***`
                 */
                NodeEnd: number;
                /**
                 * 边的起点节点ID。
                 * @example `44***`
                 */
                NodeFrom: number;
            }[];
        };
        /**
         * 任务流状态，返回值如下：
         * - **0**：无效
         * - **1**：无调度配置
         * - **2**：等待调度
         * @example `2`
         */
        Status: number;
        /**
         * 任务流是否支持编辑，返回值如下：
         * - **true**：支持修改
         * - **false**：不支持修改
         * @example `true`
         */
        CanEdit: boolean;
    };
}
