export interface GetAdvanceConfigResponse {
    /**
     * id of request
     * @example `E45380E8-994A-5402-9806-F114B3295FCF`
     */
    requestId: string;
    /**
     * 结果
     */
    result: {
        /**
         * 更新时间
         * @example `2024-05-21 16:05:26`
         */
        updateTime: number;
        /**
         * 描述
         * @example `自定义备注信息`
         */
        desc: string;
        /**
         * 文件列表。
         */
        files: {
            /**
             * 名称
             * @example `ha-cn-pl32rf0****_qrs`
             */
            name: string;
            /**
             * 文件路径
             * @example `/cluster`
             */
            fullPathName: string;
            /**
             * 是目录
             * @example `true`
             */
            isDir: boolean;
            /**
             * 是容器
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
        /**
         * 配置名称
         * @example `my_index`
         */
        name: string;
        /**
         * 配置状态 (drafting: 草稿, used: 线上使用, unused: 未使用, trash: 删除中)
         * @example `used`
         */
        status: string;
    };
}
