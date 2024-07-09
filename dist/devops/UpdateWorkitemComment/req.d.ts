export interface UpdateWorkitemCommentRequest {
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
         * 评论内容
         * @example `这是更新后的评论内容`
         */
        content: string;
        /**
         * 内容格式 目前支持MARKDOWN/RICHTEXT
         * @example `MARKDOWN/RICHTEXT`
         */
        formatType: string;
        /**
         * 工作项id，同workitemId，工作项唯一标识
         * @example `9144ef6b72d8exxxxx9e61a4d0`
         */
        workitemIdentifier: string;
        /**
         * 评论id
         * @example `1964584`
         */
        commentId: number;
    };
}
