export interface ListMergeRequestFilesReadsResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 新文件路径
         * @example `text.txt`
         */
        oldFilePath: string;
        /**
         * 旧文件路径
         * @example `text.txt`
         */
        newFilePath: string;
        /**
         * 是否是新增文件
         * @example `true`
         */
        newFile: boolean;
        /**
         * 是否是重命名文件
         * @example `false`
         */
        renamedFile: string;
        /**
         * 是否是删除文件
         * @example `false`
         */
        deletedFile: string;
        /**
         * 已读人列表
         */
        readUsers: {
            /**
             * 阿里云账号ID
             * @example `204485087002425236`
             */
            aliyunPk: string;
            /**
             * 用户名称
             * @example `codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `test-codeup`
             */
            username: string;
            /**
             * 用户状态
             * - active：活跃
             * - blocked：暂不可用
             * @example `active`
             */
            state: string;
            /**
             * 用户头像地址
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
        }[];
    }[];
}
