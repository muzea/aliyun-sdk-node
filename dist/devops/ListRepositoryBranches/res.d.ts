export interface ListRepositoryBranchesResponse {
    /**
     * 请求ID
     * @example `1F4F342D-493A-5B2C-B133-BA78B30FF834`
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
     * 总记录数
     * @example `100`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 分支名称
         * @example `testBranch`
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
             * @example `de02b625ba8488f92eb204bcb3773a40c1b4ddac`
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
             * @example `2022-03-18 10:00:00`
             */
            createdAt: string;
            /**
             * 提交内容
             * @example `具体的提交内容`
             */
            message: string;
            /**
             * 作者提交时间
             * @example `2022-03-18 10:00:00`
             */
            authoredDate: string;
            /**
             * 提交人的提交时间
             * @example `2022-03-18 11:00:00`
             */
            committedDate: string;
            /**
             * 提交人的邮箱
             * @example `username@example.com`
             */
            committerEmail: string;
            /**
             * 提交人的姓名
             * @example `commit-codeup`
             */
            committerName: string;
            /**
             * 父提交ID列表
             */
            parentIds: string[];
        };
    }[];
}
