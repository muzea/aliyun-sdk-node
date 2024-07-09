export interface GetSearchCodePreviewResponse {
    /**
     * 请求ID
     * @example `A7586FEB-E48D-5579-983F-74981FBFF627`
     */
    requestId: string;
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
     *
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * ES的搜索结果
     */
    result: {
        /**
         * 文档ID
         * @example `xxx`
         */
        docId: string;
        /**
         * 高亮文本信息
         */
        highlightTextMap: {
            /**
             * 云效企业ID
             * @example `5ffd468b1e45db3c1cc26ad6`
             */
            organizationId: string;
            /**
             * 高亮文件名
             * @example `test.rb`
             */
            fileName: string;
            /**
             * 命中的文件内容中的某个片段
             * @example `xxx`
             */
            clob: string;
        };
        /**
         * ES返回的源信息
         */
        source: {
            /**
             * 代码库完整路径（含完整组路径）
             * @example `codeup/test-repo`
             */
            repoPath: string;
            /**
             * 文件名称
             * @example `test.rb`
             */
            fileName: string;
            /**
             * 文件完整路径
             * @example `config/environments/test.rb`
             */
            filePath: string;
            /**
             * 编程语言
             * @example `Ruby`
             */
            language: string;
            /**
             * 最近一次commit时间
             * @example `2022-12-12 12:12:12`
             */
            checkinDate: string;
            /**
             * 分支名称
             * @example `master`
             */
            branch: string;
            /**
             * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
             * @example `5f9f9f6122a8c7ff3934f99a`
             */
            organizationId: string;
        };
    };
}
