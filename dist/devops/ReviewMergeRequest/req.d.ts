export interface ReviewMergeRequestRequest {
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
     * 代码库ID
     * @example `2334743`
     */
    "repositoryId": number;
    /**
     * 合并请求局部ID，表示代码库下的第几个合并请求
     * @example `1`
     */
    "localId": number;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 评审意见
         * - PASS：通过
         * - NOT_PASS：不通过
         * @example `PASS`
         */
        reviewOpinion: string;
        /**
         * 评审发表的评论意见
         * @example `评论意见具体内容`
         */
        reviewComment: string;
        /**
         * 一起提交的草稿评论的ID列表
         */
        draftCommentIds: string[];
    };
}
