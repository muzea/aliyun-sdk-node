export interface CreateCommitWithMultipleFilesResponse {
    /**
     * 请求ID
     * @example `A7586FEB-E48D-5579-983F-74981FBFF627`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 返回结果
     * > 当前API返回的结果为提交信息
     */
    result: {
        /**
         * 提交
        ID
         * @example `de02b625ba8488f92eb204bcb3773a40c1b4ddac`
         */
        id: string;
        /**
         * Commit短ID
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
         * @example `具体的提交内容`
         */
        message: string;
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
         * 作者提交时间
         * @example `2022-03-18 15:00:00`
         */
        authoredDate: string;
        /**
         * 提交人的姓名
         * @example `committer-codeup`
         */
        committerName: string;
        /**
         * 提交人的邮箱
         * @example `username@example.com`
         */
        committerEmail: string;
        /**
         * 提交人的提交时间
         * @example `2022-03-18 16:00:00`
         */
        committedDate: string;
        /**
         * 父提交ID列表
         */
        parentIds: string[];
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 作者信息
         */
        author: {
            /**
             * Codeup的用户ID
             * @example `19927`
             */
            id: number;
            /**
             * 阿里云账号ID
             * @example `284692704493684695`
             */
            aliyunPk: string;
            /**
             * 用户名称
             * @example `test-codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `test-codeup`
             */
            username: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
            /**
             * 用户状态，可选值：
             * - active - 可用状态
             * - blocked - 废弃或不可用
             * @example `active`
             */
            state: string;
            /**
             * 头像地址
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c4ef67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户个人网页地址
             * @example `""`
             */
            websiteUrl: string;
        };
        /**
         * 提交者信息
         */
        committer: {
            /**
             * Codeup用户ID
             * @example `24661`
             */
            id: number;
            /**
             * 阿里云账号ID
             * @example `235671547828975455`
             */
            aliyunPk: string;
            /**
             * 用户名称
             * @example `committer-codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `committer-codeup`
             */
            username: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
            /**
             * 用户状态，可选值：
             * - active - 可用状态
             * - blocked - 废弃或不可用
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
        };
    };
}
