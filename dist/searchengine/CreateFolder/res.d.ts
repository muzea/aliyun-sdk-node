export interface CreateFolderResponse {
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
         * 文件夹id
         * @example `25030`
         */
        id: number;
        /**
         * 创建时间
         * @example `1719221186114`
         */
        gmtCreate: string;
        /**
         * 更新时间
         * @example `1719221186114`
         */
        gmtModified: string;
        /**
         * 名称
         * @example `test`
         */
        name: string;
        /**
         * 父层级id。
         * @example `-1`
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
