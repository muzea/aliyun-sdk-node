export interface CreateSqlInstanceResponse {
    /**
     * id of request
     * @example `B43CD1BB-ABD7-59C5-B89A-6E5F6FE60A84`
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
         * 创建时间
         * @example `1719220182844`
         */
        gmtCreate: string;
        /**
         * 修改时间
         * @example `1719220182844`
         */
        gmtModified: string;
        /**
         * sql实例名称
         * @example `test`
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
         * 实例id
         * @example `ha-cn-pl32rf0****`
         */
        instanceId: number;
        /**
         * 实例所属的模板id
         * @example `1`
         */
        templateId: number;
    };
}
