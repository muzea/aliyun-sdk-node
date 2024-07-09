export interface ListRepositoryTagsResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 总记录数
     * @example `30`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 标签ID
         * @example `9a494e7b88ca35cde00579af2df4ab46136c022e`
         */
        id: string;
        /**
         * 标签名称
         * @example `tag v1.0`
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
             * @example `de02b625ba8488f92eb204bcb3773a40c1b4ddac`
             */
            id: string;
            /**
             * 简短的提交ID
             * @example `de02b625`
             */
            shortId: string;
            /**
             * 提交标题，提交的第一行内容
             * @example `提交标题`
             */
            title: string;
            /**
             * 提交内容
             * @example `修改main.txt文件`
             */
            message: string;
            /**
             * 创建时间
             * @example `2022-03-18 10:00:00`
             */
            createdAt: string;
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
             * @example `2022-03-18 10:00:00`
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
             * 父提交ID
             */
            parentIds: string[];
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
    }[];
}
