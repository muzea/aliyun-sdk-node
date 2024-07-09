export interface GetRepositoryTagResponse {
    /**
     * 请求ID
     * @example `CE7353E3-F989-56A9-B97C-897ABBDB9A01`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 标签ID
         * @example `9a494e7b88ca35cde00579af2df4ab46136c022e`
         */
        id: string;
        /**
         * 标签名称
         * @example `tag v1.0
        `
         */
        name: string;
        /**
         * 标签的描述信息
         * @example `具体的描述内容`
         */
        message: string;
        /**
         * 标签指向的提交信息
         */
        commit: {
            /**
             * 提交ID
             * @example `e0297d8fb0393c833a8531e7cc8832739e3cba6d`
             */
            id: string;
            /**
             * 简短的提交ID
             * @example `e0297d8f`
             */
            shortId: string;
            /**
             * 提交标题，提交的第一行内容
             * @example `提交标题`
             */
            title: string;
            /**
             * 提交内容
             * @example `具体的提交内容`
             */
            message: string;
            /**
             * 创建时间
             * @example `2022-03-18 10:00:00`
             */
            createdAt: string;
            /**
             * 父提交ID
             */
            parentIds: string[];
            /**
             * 作者姓名
             * @example `阿里云云效`
             */
            authorName: string;
            /**
             * 作者邮箱
             * @example `username@example.com`
             */
            authorEmail: string;
            /**
             * 作者提交时间
             * @example `2022-03-18 08:00:00`
             */
            authoredDate: string;
            /**
             * 提交人的姓名
             * @example `阿里云云效Committer`
             */
            committerName: string;
            /**
             * 提交人的邮箱
             * @example `username@example.com`
             */
            committerEmail: string;
            /**
             * 提交人的提交时间
             * @example `2022-03-18 09:00:00`
             */
            committedDate: string;
            /**
             * 签名信息
             */
            signature: {
                /**
                 * gpg签名的key id
                 * @example `""`
                 */
                gpgKeyId: string;
                /**
                 * gpg校验状态
                 * - unverified：未校验
                 * - verified：gpg公钥验证通过且邮箱一致
                 * -  same_user_different_email：gpg公钥验签通过，提交者邮箱属于当前用户，但与证书邮箱不一致
                 * - other_user：gpg公钥验签通过，但提交者邮箱不属于key的用户
                 * - unverified_key：key对应的邮箱，不在该用户的邮箱列表中
                 * - unknown_key：gpg key不存在
                 * @example `verified`
                 */
                verificationStatus: string;
            };
        };
    };
}
