export interface CreateBranchResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
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
         * 分支名称
         * @example `createBranch`
         */
        name: string;
        /**
         * 是否是保护分支
         * @example `false`
         */
        protected: boolean;
        /**
         * 分支最近一次提交信息
         */
        commit: {
            /**
             * 提交ID
             * @example `ff4fb5ac6d1f44f452654336d2dba468ae6c8d04`
             */
            id: string;
            /**
             * 简短的提交ID
             * @example `ff4fb5ac`
             */
            shortId: string;
            /**
             * 提交标题，提交的第一行内容
             * @example `创建代码库分支`
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
             * @example `create branch`
             */
            message: string;
            /**
             * 作者提交时间
             * @example `2022-03-18 09:00:00`
             */
            authoredDate: string;
            /**
             * 提交人的提交时间
             * @example `2022-03-18 10:00:00`
             */
            committedDate: string;
            /**
             * 提交人的邮箱
             * @example `username@example.com`
             */
            committerEmail: string;
            /**
             * 提交人的姓名
             * @example `阿里云云效committer`
             */
            committerName: string;
            /**
             * 父提交ID列表
             */
            parentIds: string[];
        };
    };
}
