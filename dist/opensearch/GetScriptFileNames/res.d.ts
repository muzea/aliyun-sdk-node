export interface GetScriptFileNamesResponse {
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
         * 脚本创建时间
         * @example `2020-04-02 20:21:14`
         */
        createTime: string;
        /**
         * 脚本文件名
         * @example `my_cava_script.cava`
         */
        fileName: string;
        /**
         * 脚本最后一次修改时间
         * @example `2020-04-02 21:21:14`
         */
        modifyTime: string;
        /**
         * 脚本路径名
         * @example `src`
         */
        pathName: string;
    }[];
}
