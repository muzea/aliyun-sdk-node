export interface ListDatabasesResponse {
    /**
     * id of request
     * @example `E45380E8-994A-5402-9806-F114B3295FCF`
     */
    requestId: string;
    /**
     * NodeTreeVO
     */
    result: {
        /**
         * 数据库信息列表
         */
        databases: {
            /**
             * 数据库名称
             * @example `general`
             */
            database: string;
            /**
             * sql实例信息
             */
            sqlInstances: {
                /**
                 * 主键id
                 * @example `12190`
                 */
                id: number;
                /**
                 * sql实例名称
                 * @example `general`
                 */
                name: string;
                /**
                 * table, instance, template, function
                 * @example `instance`
                 */
                type: string;
                /**
                 * 父任务id。
                 * @example `-1`
                 */
                parent: number;
                /**
                 * 子目录信息
                 */
                children: any[];
                /**
                 * 是否为目录。取值：-true：是-false：否
                 * @example `true`
                 */
                isDir: number;
                /**
                 * 实例id
                 * @example `1`
                 */
                instanceId: number;
                /**
                 * 模板ID。
                 * @example `1`
                 */
                templateId: number;
            }[];
            /**
             * 模板信息
             */
            templates: {
                /**
                 * 主键id
                 * @example `1`
                 */
                id: number;
                /**
                 * 模版名称
                 * @example `c26_schema`
                 */
                name: string;
                /**
                 * table, instance, template, function
                 * @example `template`
                 */
                type: string;
                /**
                 * 父节点id。
                 * @example `-1`
                 */
                parent: number;
                /**
                 * 子目录信息
                 */
                children: any[];
                /**
                 * 是否为目录。取值：-true：是-false：否
                 * @example `true`
                 */
                isDir: number;
                /**
                 * 实例id
                 * @example `1`
                 */
                instanceId: number;
                /**
                 * 模板ID。
                 * @example `1`
                 */
                templateId: number;
            }[];
            /**
             * 函数信息。
             */
            functions: any;
            /**
             * 表信息。
             */
            tables: {
                /**
                 * 主键id
                 * @example `56`
                 */
                id: number;
                /**
                 * 表名
                 * @example `general`
                 */
                name: string;
                /**
                 * table, instance, template, function
                 * @example `table`
                 */
                type: string;
                /**
                 * 父节点id。
                 * @example `-1`
                 */
                parent: number;
                /**
                 * 子目录信息
                 */
                children: any[];
                /**
                 * 是否为目录。取值：-true：是-false：否
                 * @example `true`
                 */
                isDir: number;
                /**
                 * 实例ID
                 * @example `1`
                 */
                instanceId: number;
                /**
                 * 模板ID。
                 * @example `1`
                 */
                templateId: number;
            }[];
        }[];
    };
}
