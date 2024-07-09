export interface GetSortScriptFileResponse {
    /**
     * 唯一标识一次请求
     * @example `ABCDEFGH`
     */
    requestId: string;
    /**
     * 排序脚本内容
     */
    result: {
        /**
         * 脚本内容，base64编码
         * @example `YWJjZGVmZw==`
         */
        content: string;
        /**
         * 创建时间
         * @example `2020-04-02 20:21:14`
         */
        createTime: string;
        /**
         * 最后一次修改时间
         * @example `2020-04-02 21:21:14`
         */
        modifyTime: string;
        /**
         * 脚本内容的版本
         * @example `123456`
         */
        version: number;
    };
}
