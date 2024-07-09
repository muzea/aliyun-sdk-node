export interface ListAdvanceConfigsResponse {
    /**
     * 请求id。
     * @example `4FB0325E-8C37-5525-96AC-0333523170A3`
     */
    requestId: string;
    /**
     * 高级配置列表
     */
    result: {
        /**
         * 更新时间
         * @example `1631070464000`
         */
        updateTime: number;
        /**
         * 描述
         * @example `自定义描述`
         */
        desc: string;
        /**
         * 文件名列表
         */
        files: {
            /**
             * 文件名称
             * @example `file_name_1`
             */
            name: string;
            /**
             * 绝对路径
             * @example `/path/wpd/nae`
             */
            fullPathName: string;
            /**
             * 是否为目录。取值：-true：是-false：否
             * @example `true`
             */
            isDir: boolean;
            /**
             * 是否是模板。取值：-true：是-false：否
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
         * 配置内容的类型（FILE, GIT, HTTP, ODPS）
         * @example `FILE`
         */
        contentType: string;
        /**
         * 高级配置名称
         * @example `my_index`
         */
        name: string;
        /**
         * 高级配置状态
         * drafting: 草稿
         * used: 使用中
         * unused: 未使用
         * trash: 删除中
         * @example `drafting`
         */
        status: string;
        /**
         * 创建者userid。
         * @example `123456`
         */
        creator: string;
        /**
         * - -ONLINE: 在线配置,
         * - -ONLINE_CAVA: 在线cava配置,
         * - -ONLINE_PLUGIN: 在线插件,
         * - -ONLINE_QUERY: 查询配置,
         * - -OFFLINE_DICT: 离线配置,
         * - -OFFLINE_TABLE: 离线表,
         * - -OFFLINE_COMMON: 离线配置,
         * - -OFFLINE_PLUGIN: 离线插件,
         * - -OFFLINE_INDEX: 索引配置
         * @example `ONLINE`
         */
        advanceConfigType: string;
    }[];
}
