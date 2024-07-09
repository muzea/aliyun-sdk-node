export interface CreateTagResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
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
         * @example `0e3b6aa5eab2b086b59fde74766b28d4e5faab0d`
         */
        id: string;
        /**
         * 标签名称
         * @example `v1.0`
         */
        name: string;
        /**
         * 标签的描述信息
         * @example `描述内容`
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
             * @example `提交标题
            `
             */
            title: string;
            /**
             * 提交内容
             * @example `具体的提交内容
            `
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
             * @example `阿里云云效committer`
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
        };
    };
}
