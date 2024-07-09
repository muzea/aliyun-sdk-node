export interface ListSearchCommitResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
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
     * 总记录数
     * @example `10`
     */
    total: number;
    /**
     * 返回列表
     */
    result: {
        /**
         * 文档ID
         * @example `
        60d54f3daccf2bbd6659f3ad/gitlabhq/master/config/environments/test.rb`
         */
        docId: string;
        /**
         * 高亮文本信息
         */
        highlightTextMap: {
            /**
             * 提交ID
             * @example `df1b701cb0f3f7ca92320d49d31995821f2d045c`
             */
            commitId: string;
            /**
             * 提交标题，提交的第一行内容
             * @example `提交标题`
             */
            title: string;
            /**
             * 提交的具体内容
             * @example `提交内容`
             */
            commitMessage: string;
            /**
             * 企业ID
             * @example `60de7a6852743a5162b5f957`
             */
            organizationId: string;
        };
        /**
         * ES返回的源信息
         */
        source: {
            /**
             * 提交ID
             * @example `a748f5ecb17a93900d4808944bfcc96dc158ee2d`
             */
            commitId: string;
            /**
             * 提交标题，提交的第一行内容
             * @example `提交标题`
             */
            title: string;
            /**
             * 提交信息
             * @example `提交信息`
             */
            commitMessage: string;
            /**
             * 提交时间
             * @example `2022-11-11 11:11:11`
             */
            authorTime: string;
            /**
             * 代码库完整路径（含完整组路径）
             * @example `codeup/test-repo`
             */
            repoPath: string;
            /**
             * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
             * @example `61133b011bd96aa110f1b500`
             */
            organizationId: string;
            /**
             * 提交者
             */
            author: {
                /**
                 * 提交者的姓名
                 * @example `云效`
                 */
                name: string;
                /**
                 * 提交者的邮箱
                 * @example `username@example.com`
                 */
                email: string;
            };
        };
    }[];
}
