export interface CreateWorkitemCommentRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60811b5eed6e867404f6xxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 评论内容
         * @example `有关于黑龙江地区旅店业室内广告屏出租`
         */
        content: string;
        /**
         * 工作项id，同workItemId，工作项唯一标识
         * @example `1e9903d8b3f12xxxxxf9286ef5`
         */
        workitemIdentifier: string;
        /**
         * 目前支持RICHTEXT/MARKDOWN 二选一
         * @example `RICHTEXT/MARKDOWN`
         */
        formatType: string;
        /**
         * 父目录ID。
         * > 根目录时传**0**。
         * @example `26842`
         */
        parentId: string;
    };
}
