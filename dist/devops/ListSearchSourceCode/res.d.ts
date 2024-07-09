export interface ListSearchSourceCodeResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `
    SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 总记录数
     * @example `2`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 文档ID
         * @example `60d54f3daccf2bbd6659f3ad/gitlabhq/master/spec/frontend/snippets/test_utils.js`
         */
        docId: string;
        /**
         * 高亮文本信息
         */
        highlightTextMap: {
            /**
             * 高亮企业ID
             * @example `60de7a6852743a5162b5f957`
             */
            organizationId: string;
            /**
             * 命中的文件名
             * @example `test.java`
             */
            fileName: string;
            /**
             * 命中的文件内容中的某个片段
             * @example `xxx`
             */
            clob: string;
            /**
             * 编程语言
             * @example `java`
             */
            language: string;
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
             * @example `test_utils.js`
             */
            fileName: string;
            /**
             * 文件路径
             * @example `spec/frontend/snippets/test_utils.js`
             */
            filePath: string;
            /**
             * 编程语言
             * @example `JavaScript`
             */
            language: string;
            /**
             * 最近一次commit时间
             * @example `2022-10-10 10:00:00`
             */
            checkinDate: string;
            /**
             * 分支名称
             * @example `master`
             */
            branch: string;
            /**
             * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
             * @example `60de7a6852743a5162b5f957`
             */
            organizationId: string;
        };
    }[];
}
