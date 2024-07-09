export interface ListSortScriptsResponse {
    /**
     * 唯一标识一次请求
     * @example `ABCDEFGH`
     */
    requestId: string;
    /**
     * 脚本列表
     */
    result: {
        /**
         * 脚本的类型
         * @example `cava_script`
         */
        type: string;
        /**
         * 脚本的作用范围
         * @example `second_rank`
         */
        scope: string;
        /**
         * 脚本创建时间
         * @example `2020-04-02 20:21:14`
         */
        createTime: string;
        /**
         * 脚本的状态：
         * - configurable：脚本创建成功，还未上传文件
         * - not compiled：脚本未编译
         * - compile failed：脚本编译失败
         * - compile successful：脚本编译成功
         * - released：脚本已发布
         * @example `released`
         */
        status: string;
        /**
         * 脚本最后一次修改时间
         * @example `2020-04-02 21:21:14`
         */
        modifyTime: string;
        /**
         * 脚本名称
         * @example `test`
         */
        scriptName: string;
    }[];
}
