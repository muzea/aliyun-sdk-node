export interface GetBranchInfoResponse {
    /**
     * 请求ID
     * @example `6177543A-8D54-5736-A93B-E0195A1512CB`
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
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 分支名称
         * @example `master`
         */
        name: string;
        /**
         * 是否是保护分支
         * @example `false`
         */
        protected: string;
        /**
         * 分支最近一次提交信息
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
             * @example `修改main.txt文件`
             */
            title: string;
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
             * 创建时间
             * @example `2022-03-18 10:00:00`
             */
            createdAt: string;
            /**
             * 提交内容
             * @example `修改main.txt文件`
             */
            message: string;
            /**
             * 作者提交时间
             * @example `2022-03-18 08:00:00`
             */
            authoredDate: string;
            /**
             * 提交人的提交时间
             * @example `2022-03-18 09:00:00`
             */
            committedDate: string;
            /**
             * 提交人的邮箱
             * @example `username@example.com`
             */
            committerEmail: string;
            /**
             * 提交人的姓名
             * @example `阿里云云效Committer`
             */
            committerName: string;
            /**
             * 父提交ID列表
             */
            parentIds: string[];
            /**
             * 作者信息
             */
            author: {
                /**
                 * Codeup的用户ID
                 * @example `28056`
                 */
                id: number;
                /**
                 * 作者名称
                 * @example `codeup-test`
                 */
                name: string;
                /**
                 * 用户昵称
                 * @example `testtest`
                 */
                username: string;
                /**
                 * 状态
                 * 可选值：active / blocked，默认值active
                 * @example `active`
                 */
                state: string;
                /**
                 * 头像地址
                 * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
                 */
                avatarUrl: string;
                /**
                 * 用户邮箱
                 * @example `username@example.com`
                 */
                email: string;
            };
            /**
             * 提交人信息
             */
            committer: {
                /**
                 * Codeup的用户ID
                 * @example `5035`
                 */
                id: number;
                /**
                 * 提交人的姓名
                 * @example `codeup-commit`
                 */
                name: string;
                /**
                 * 用户昵称
                 * @example `commitcommit`
                 */
                username: string;
                /**
                 * 状态
                 * 可选值：active / blocked，默认值active
                 * @example `active`
                 */
                state: string;
                /**
                 * 头像地址
                 * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
                 */
                avatarUrl: string;
                /**
                 * 用户邮箱
                 * @example `username@example.com`
                 */
                email: string;
            };
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
            /**
             * 评论数量
             * @example `0`
             */
            commentsCount: number;
        };
    };
}
