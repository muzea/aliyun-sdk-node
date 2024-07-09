export interface DeleteWorkitemCommentRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 工作项唯一标识id，同workitemId，workitemIdentifier
         * @example `e8b2xxxxxx2abdxxxxxxxx23`
         */
        identifier: string;
        /**
         * 评论ID。
         * @example `12xx34`
         */
        commentId: number;
    };
}
