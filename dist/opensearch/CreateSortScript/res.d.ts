export interface CreateSortScriptResponse {
    /**
     * 唯一标识一次请求
     * @example `ABCDEFGH`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 脚本名称
         * @example `rank_cava_20230606_v7
        `
         */
        scriptName: string;
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
    };
}
