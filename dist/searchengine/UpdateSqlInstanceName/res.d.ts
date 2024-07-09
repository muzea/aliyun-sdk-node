export interface UpdateSqlInstanceNameResponse {
    /**
     * id of request
     * @example `E7B7D598-B080-5C8E-AA35-D43EC0D5F886`
     */
    requestId: string;
    /**
     * NodeVO
     */
    result: {
        /**
         * 主键id
         * @example `22`
         */
        id: number;
        /**
         * 创建时间。
         * @example `1719220182844`
         */
        gmtCreate: string;
        /**
         * 修改时间
         * @example `1719221186114`
         */
        gmtModified: string;
        /**
         * sql实例名称
         * @example `general`
         */
        name: string;
        /**
         * 父任务id。
         * @example `-1`
         */
        parent: number;
        /**
         * 是否为目录。取值：-true：是-false：否
         * @example `true`
         */
        isDir: number;
        /**
         * table, instance, template, function
         * @example `instance`
         */
        type: string;
        /**
         * 实例id。
         * @example `1`
         */
        instanceId: number;
        /**
         * 模板ID。
         * @example `1`
         */
        templateId: number;
    };
}
