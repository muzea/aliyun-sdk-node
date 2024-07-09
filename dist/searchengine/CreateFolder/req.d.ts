export interface CreateFolderRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 数据库名称
     * @example `general`
     */
    "database": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 目录名
         * @example `gist_qc`
         */
        name: string;
        /**
         * 父类目id（必传），为空时则默认为1
         * @example `1`
         */
        parent: number;
        /**
         * table, instance, template, function
         * @example `instance`
         */
        type: string;
    };
}
