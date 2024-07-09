export interface GetSortScriptResponse {
    /**
     * 唯一标识一次请求
     * @example `ABCDEFGH`
     */
    requestId: string;
    /**
     * 脚本的详情
     */
    result: {
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
         * 脚本的状态，详情请参考下节脚本状态列表
         * @example `released`
         */
        status: string;
        /**
         * 脚本最后一次修改时间
         * @example `2020-04-02 21:21:14`
         */
        modifyTime: string;
        /**
         * 脚本的类型
         * @example `cava_script`
         */
        type: string;
        /**
         * 脚本名称
         * @example `rank_cava_20230606_v7
        `
         */
        scriptName: string;
    };
}
