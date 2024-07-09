export interface ListMergeRequestCommentsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID或者全路径
     * @example `2835387 或 codeup/codeup-demo`
     */
    "repositoryIdentity": string;
    /**
     * 合并请求局部ID，表示代码库下的第几个合并请求
     * @example `10`
     */
    "localId": number;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 版本业务ID列表
         * > 每个评论会关联一个版本，表示该评论发表在第几个版本，其中对于全局评论，关联的是最新的合并源版本。
         */
        patchSetBizIds: string[];
        /**
         * 评论类型
         * - GLOBAL_COMMENT：全局评论
         * - INLINE_COMMENT：文件行内评论
         * @example `GLOBAL_COMMENT`
         */
        commentType: string;
        /**
         * 文件路径
         * @example `/src/main/test.java`
         */
        filePath: string;
        /**
         * 评论状态
         * - DRAFT：草稿状态
         * - OPENED：已发表或者开启
         * @example `OPENED`
         */
        state: string;
        /**
         * 是否已解决
         * @example `false`
         */
        resolved: boolean;
    };
}
