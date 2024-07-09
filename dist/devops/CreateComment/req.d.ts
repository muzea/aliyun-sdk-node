export interface CreateCommentRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
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
     * @example `1`
     */
    "localId": number;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 评论内容
         * @example `评论内容`
         */
        content: string;
        /**
         * 评论类型
         * - GLOBAL_COMMENT：全局评论
         * - INLINE_COMMENT：文件行内评论
         * @example `GLOBAL_COMMENT`
         */
        commentType: string;
        /**
         * 父评论业务ID
         * @example `2666ac1ac53841b0ba1b042e383279cc`
         */
        parentCommentBizId: string;
        /**
         * 是否已解决
         * ><notice>若是父评论业务ID为空，即创建根评论时，必须设置resolved的值></notice>
         * @example `false`
         */
        resolved: boolean;
        /**
         * 文件路径
         * > 当commentType=INLINE_COMMENT时，才需要传入值
         * @example `/src/main/test.java`
         */
        filePath: string;
        /**
         * 评论所在的文件行号，仅文件行内评论才有
         * @example `1`
         */
        lineNumber: number;
        /**
         * 关联的版本ID
         * > 一般而言，该参数不必传值，默认将创建的评论关联到最新版本上；但若是需要在历史版本上创建评论，此时才需要传入具体的版本ID
         * @example `b7d8386be17c4ca68a07140db4836257`
         */
        patchSetBizId: string;
        /**
         * 是否是草稿评论
         * @example `false`
         */
        draft: boolean;
    };
}
