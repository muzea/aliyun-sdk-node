export interface ListRepositoryTreeResponse {
    /**
     * 请求ID
     * @example `6557983C-FB08-51A9-AC5A-A7A0D0950A07`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 文件路径
         * @example `test-codeup`
         */
        path: string;
        /**
         * 是否是大文件
         * @example `false`
         */
        isLFS: boolean;
        /**
         * 文件版本，唯一标识
         * @example `76c3f251f414ac31f2e01faf6f2008a9d756a437`
         */
        id: string;
        /**
         * 文件名称
         * @example `test-codeup`
         */
        name: string;
        /**
         * 文件类型
         * tree: 目录
         * blob：文件
         * commit：commit支持submodule
         * @example `blob`
         */
        type: string;
        /**
         * 类型、权限信息
         * @example `100644`
         */
        mode: string;
    }[];
}
