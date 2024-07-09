export interface GetCompareDetailResponse {
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
         * 说明列表
         */
        messages: string[];
        /**
         * 差异提交列表
         */
        commits: {
            /**
             * 提交ID
             * @example `b8f6f28520b1936aafe2e638373e19ccafa42b02`
             */
            id: string;
            /**
             * 简短的提交ID
             * @example `b8f6f285`
             */
            shortId: string;
            /**
             * 提交标题，提交的第一行内容
             * @example `提交标题`
             */
            title: string;
            /**
             * 提交内容
             * @example `""`
             */
            message: string;
            /**
             * 作者姓名
             * @example `云效Codeup`
             */
            authorName: string;
            /**
             * 作者邮箱
             * @example `username@example.com`
             */
            authorEmail: string;
            /**
             * 作者提交时间
             * @example `2023-01-03T15:41:26+08:00`
             */
            authoredDate: string;
            /**
             * 创建时间
             * @example `2023-01-03T15:41:26+08:00`
             */
            createdAt: string;
            /**
             * 提交人的姓名
             * @example `云效CodeupCommitter`
             */
            committerName: string;
            /**
             * 提交人的邮箱
             * @example `username@example.com`
             */
            committerEmail: string;
            /**
             * 提交人的提交时间
             * @example `2023-01-03T15:41:26+08:00`
             */
            committedDate: string;
            /**
             * 父提交ID
             */
            parentIds: string[];
            /**
             * 作者信息
             */
            author: {
                /**
                 * Codeup用户ID
                 * @example `21396`
                 */
                id: number;
                /**
                 * 用户名称
                 * @example `云效`
                 */
                name: string;
                /**
                 * 用户昵称
                 * @example `Codeup`
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
                 * 作者邮箱
                 * @example `username@example.com`
                 */
                email: string;
            };
            /**
             * 提交人信息
             */
            committer: {
                /**
                 * Codeup用户ID
                 * @example `43910`
                 */
                id: number;
                /**
                 * 用户名称
                 * @example `云效Committer`
                 */
                name: string;
                /**
                 * 用户昵称
                 * @example `Codeup-commiter`
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
             * 评论数量
             * @example `1`
             */
            commentsCount: number;
        }[];
        /**
         * Diff文件内容
         */
        diffs: {
            /**
             * diff内容
             * @example `--- /dev/null\n+++ b/mr_error.txt\n@@ -0,0 +1,3 @@\n+first\n+\n+提交2\n\\ No newline at end of file\n`
             */
            diff: string;
            /**
             * 新文件路径
             * @example `new_test.txt`
             */
            newPath: string;
            /**
             * 旧文件路径
             * @example `test.txt`
             */
            oldPath: string;
            /**
             * 旧路径的文件模式标识，包含文件类型、权限等信息，如100644为正常文件, 100755为可执行文件
             * @example `100644`
             */
            aMode: string;
            /**
             * 新路径的文件模式标识，包含文件类型、权限等信息，如100644为正常文件, 100755为可执行文件
             * @example `100644`
             */
            bMode: string;
            /**
             * 是否是新增文件
             * @example `false`
             */
            newFile: boolean;
            /**
             * 是否是重命名文件
             * @example `false`
             */
            renamedFile: boolean;
            /**
             * 是否是删除文件
             * @example `false`
             */
            deletedFile: boolean;
            /**
             * 是否二进制文件
             * @example `false`
             */
            isBinary: boolean;
            /**
             * 旧文件的git object id
             * @example `6c268061a546378276559c713d0ad377d4dsjfh`
             */
            oldId: string;
            /**
             * 新文件的git object id
             * @example `cb75846da2df3d3d7f290c3569236fcf3dd17224`
             */
            newId: string;
            /**
             * 新文件是否是大文件（LFS）
             * @example `false`
             */
            isNewLfs: boolean;
            /**
             * 旧文件是否是大文件（LFS）
             * @example `false`
             */
            isOldLfs: boolean;
        }[];
    };
}
