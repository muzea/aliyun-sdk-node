export interface ListRepositoryCommitsResponse {
    /**
     * 请求ID
     * @example `F1138237-CF7F-56BF-95D4-9AA937CCE8E5`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `OpenApi.error`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 总记录数
     * ><notice>提交列表采用的是滚动分页，可做参考，不能作为准确的信息。></notice>
     * @example `145`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 提交ID
         * @example `de02b625ba8488f92eb204bcb3773a40c1b4ddac`
         */
        id: string;
        /**
         * 简短的提交ID
         * 例如：
         * CommitID：ff4fb5ac6d1f44f452654336d2dba468ae6c8d04
         * ShortId：ff4fb5ac
         * @example `de02b625`
         */
        shortId: string;
        /**
         * 提交标题，提交的第一行内容
         * @example `提交标题`
         */
        title: string;
        /**
         * 作者姓名
         * @example `test-codeup`
         */
        authorName: string;
        /**
         * 作者邮箱
         * @example `username@example.com`
         */
        authorEmail: string;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 提交内容
         * @example `提交的具体内容`
         */
        message: string;
        /**
         * 作者提交时间
         * @example `2022-03-18 15:00:00`
         */
        authoredDate: string;
        /**
         * 提交人的提交时间
         * @example `2022-03-18 16:00:00`
         */
        committedDate: string;
        /**
         * 提交人的邮箱
         * @example `username@example.com`
         */
        committerEmail: string;
        /**
         * 提交人的姓名
         * @example `committer-codeup`
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
             * @example `7914`
             */
            id: number;
            /**
             * 用户姓名
             * @example `云效`
             */
            name: string;
            /**
             * 用户昵称
             * @example `nickname`
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
             * @example `头像地址
            
            https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户个人网页地址
             * @example `""`
             */
            websiteUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
        };
        /**
         * 提交者信息
         */
        committer: {
            /**
             * Codeup用户ID
             * @example `41031`
             */
            id: number;
            /**
             * 用户名称
             * @example `committer-codeup`
             */
            name: string;
            /**
             * 用户昵称
             * @example `nickname`
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
             * 用户个人网页地址
             * @example `""`
             */
            websiteUrl: string;
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
             * @example `”“`
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
         * @example `1`
         */
        commentsCount: number;
    }[];
}
