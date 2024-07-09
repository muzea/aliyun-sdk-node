export interface ModifyAdvanceConfigRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 配置名称
     * @example `ha-cn-pl32rf0****_offline_adv_edit`
     */
    "configName": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 配置名称
         * @example `ha-cn-pl32rf0****_offline_adv_edit
        `
         */
        name: string;
        /**
         * 配置状态 (drafting: 草稿, used: 线上使用, unused: 未使用, trash: 删除中)
         * @example `used`
         */
        status: string;
        /**
         * 更新时间
         * @example `2024-02-27T07:50:55Z`
         */
        updateTime: number;
        /**
         * 高级配置描述信息
         * @example `自定义配置`
         */
        desc: string;
        /**
         * 文件名列表
         */
        files: {
            /**
             * 节点名称
             * @example `general`
             */
            name: string;
            /**
             * 全路径名称
             * @example `/cluster.json`
             */
            fullPathName: string;
            /**
             * 是否是目录
             * @example `true`
             */
            isDir: boolean;
            /**
             * 是否是模板
             * @example `true`
             */
            isTemplate: boolean;
        }[];
        /**
         * 配置内容 http，git 请求时不为空
         * @example `{\"url\":\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\"}`
         */
        content: string;
        /**
         * 配置内容的类型 (FILE, GIT, HTTP, ODPS)
         * @example `FILE`
         */
        contentType: string;
    };
}
