export interface ListSearchRepositoryResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 总记录数
     * @example `30`
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
             * 高亮企业ID
             * @example `60de7a6852743a5162b5f957`
             */
            organizationId: string;
            /**
             * 创建人的userId，此处为用户的云效ID
             * @example `xxx`
             */
            creatorUserId: string;
            /**
             * 代码库完整路径（含完整组路径）
             * @example `codeup/test-repo`
             */
            repoPath: string;
            /**
             * 代码库完整名称（带完整组名称）
             * @example `codeup/test-repo`
             */
            repoNameWithNamespace: string;
            /**
             * readme文件高亮信息
             * @example `xx`
             */
            readMe: string;
            /**
             * 代码库描述
             * @example `描述内容`
             */
            description: string;
        };
        /**
         * ES返回的源信息
         */
        source: {
            /**
             * 代码库名称
             * @example `test-repo`
             */
            repoName: string;
            /**
             * 代码库完整路径（含完整组路径）
             * @example `codeup/test-repo`
             */
            repoPath: string;
            /**
             * 代码库描述信息
             * @example `描述内容`
             */
            description: string;
            /**
             * 可见性
             * - 0：私有，仅代码库成员可见
             * - 10：企业内公开，企业成员可见
             * @example `0`
             */
            visibilityLevel: number;
            /**
             * 创建时间
             * @example `2022-10-10 10:10:10`
             */
            createTime: string;
            /**
             * 最近一次活跃的时间
             * @example `2022-11-11 11:11:11`
             */
            lastActivityTime: string;
            /**
             * readme文件的内容
             * @example `xxx`
             */
            readMe: string;
            /**
             * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
             * @example `62a94a8611fc0f0c9e2a7bc1`
             */
            organizationId: string;
        };
    }[];
}
