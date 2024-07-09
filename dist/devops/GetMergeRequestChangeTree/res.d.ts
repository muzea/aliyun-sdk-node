export interface GetMergeRequestChangeTreeResponse {
    /**
     * 请求ID
     * @example `HC93CE1A-8D7A-13A9-8306-7465DE2E5C0F`
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
     * 返回结果
     */
    result: {
        /**
         * 总变更文件数量
         * @example `20`
         */
        changedFilesCount: number;
        /**
         * 总新增行
         * @example `100`
         */
        totalAddLines: number;
        /**
         * 总删除行
         * @example `50`
         */
        totalDelLines: number;
        /**
         * 变更文件信息列表
         */
        changedFilesInfos: {
            /**
             * 新文件路径
             * @example `test.txt`
             */
            newPath: string;
            /**
             * 旧文件路径
             * @example `test.txt`
             */
            oldPath: string;
            /**
             * 是否是新增文件
             * @example `true`
             */
            newFile: boolean;
            /**
             * 是否是重命名文件
             * @example `false`
             */
            renamedFile: boolean;
            /**
             * 是否是删除文件
             * @example `false`
             */
            deletedFile: boolean;
            /**
             * 是否是二进制文件
             * @example `false`
             */
            binaryFile: boolean;
            /**
             * 变更文件新增行数
             * @example `10`
             */
            addLines: number;
            /**
             * 变更文件删除行数
             * @example `0`
             */
            delLines: number;
        }[];
    };
}
