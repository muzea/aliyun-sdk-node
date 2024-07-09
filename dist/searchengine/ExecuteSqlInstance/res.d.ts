export interface ExecuteSqlInstanceResponse {
    /**
     * id of request
     * @example `FE03180A-0E29-5474-8A86-33F0683294A4`
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
         * @example `1719221186114`
         */
        gmtCreate: string;
        /**
         * 修改时间
         * @example `1719220182844`
         */
        gmtModified: string;
        /**
         * 名称
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
         * 实例id。
         * @example `ha-cn-pl32rf0****`
         */
        instanceId: number;
        /**
         * 模板ID。
         * @example `1`
         */
        templateId: number;
    };
}
