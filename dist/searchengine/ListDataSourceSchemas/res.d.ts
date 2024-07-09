export interface ListDataSourceSchemasResponse {
    /**
     * 请求ID
     * @example `022F36C7-9FB4-5D67-BEBC-3D14B0984463`
     */
    requestId: string;
    /**
     * 返回结果。
     */
    result: {
        /**
         * 字段名称
         * @example `id`
         */
        name: string;
        /**
         * 是否自定义字段。取值：-**true**：是-**false**：否
         * @example `false`
         */
        custom: boolean;
        /**
         * 字段类型
         * @example `STRING`
         */
        type: string;
        /**
         * 是否为属性字段。取值：-**true**：是-**false**：否
         * @example `false`
         */
        attribute: boolean;
        /**
         * 是否可展示。取值：-**true**：是-**false**：否
         * @example `false`
         */
        summary: boolean;
        /**
         * 主键
         */
        primaryKey: {
            /**
             * 是否为主键。取值：-**true**：是-**false**：否
             * @example `false`
             */
            isPrimaryKey: boolean;
            /**
             * 是否有主键属性。取值：-**true**：是-**false**：否
             * @example `false`
             */
            hasPrimaryKeyAttribute: boolean;
            /**
             * 是否可排序。取值：-**true**：是-**false**：否
             * @example `false`
             */
            isPrimaryKeySorted: boolean;
        };
        /**
         * 是否添加了index属性。取值：-**true**：是-**false**：否
         * @example `false`
         */
        addIndex: boolean;
    }[];
}
