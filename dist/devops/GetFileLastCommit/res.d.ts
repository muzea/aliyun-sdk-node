export interface GetFileLastCommitResponse {
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 请求结果
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 响应结果
     */
    result: {
        /**
         * 短ID
         * @example `ff4fb5ac`
         */
        shortId: string;
        /**
         * 作者姓名
         * @example `test-codeup`
         */
        authorName: string;
        /**
         * 作者提交时间
         * @example `2022-08-08 18:09:09`
         */
        authorDate: string;
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
         * 标题，提交的第一行内容
         * @example `提交标题`
         */
        title: string;
        /**
         * 提交者姓名
         * @example `committer-codeup`
         */
        committerName: string;
        /**
         * 提交者邮箱
         * @example `username@example.com`
         */
        authorEmail: string;
        /**
         * 提交ID
         * @example `ff4fb5ac6d1f44f452654336d2dba468ae6c8d04 `
         */
        id: string;
        /**
         * 提交者邮箱
         * @example `username@example.com`
         */
        committerEmail: string;
        /**
         * 提交者提交时间
         * @example `2022-03-18 15:00:02`
         */
        committedDate: string;
        /**
         * 父提交ID
         */
        parentIds: string[];
        /**
         * 签名
         */
        signature: {
            /**
             * gpg校验状态
             * - unverified：未校验
             * - verified：gpg公钥验证通过且邮箱一致
             * - same_user_different_email：gpg公钥验签通过，提交者邮箱属于当前用户，但与证书邮箱不一致
             * - other_user：gpg公钥验签通过，但提交者邮箱不属于key的用户
             * - unverified_key：key对应的邮箱，不在该用户的邮箱列表中
             * - unknown_key：gpg key不存在
             * @example `verified`
             */
            verificationStatus: string;
            /**
             * GPG密钥ID
             * @example `34d2c47c7ce46a5c4639c5ffe208`
             */
            gpgKeyId: string;
        };
    };
}
