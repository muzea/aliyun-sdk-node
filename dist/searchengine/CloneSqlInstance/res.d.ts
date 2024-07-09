export interface CloneSqlInstanceResponse {
    /**
     * id of request
     * @example `10D5E615-69F7-5F49-B850-00169ADE513C`
     */
    requestId: string;
    /**
     * NodeVO
     */
    result: {
        /**
         * 主键id
         * @example `1`
         */
        id: number;
        /**
         * 创建时间
         * @example `1719221186114`
         */
        gmtCreate: string;
        /**
         * 修改时间。
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
         * @example `1`
         */
        parent: number;
        /**
         * 是否为目录。取值：-true：是-false：否
         * @example `True`
         */
        isDir: number;
        /**
         * table, instance, template, function
         * @example `instance`
         */
        type: string;
        /**
         * 实例id
         * @example `-cn-pl32rf0****`
         */
        instanceId: number;
        /**
         * 模板ID。
         * @example `1`
         */
        templateId: number;
    };
}
