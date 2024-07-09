export interface UpdateCheckRunResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
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
     * 返回结果
     */
    result: {
        /**
         * 唯一标识
         * @example `524836`
         */
        id: number;
        /**
         * 创建时间
         * @example `2022-01-14T21:08:26+08:00
        `
         */
        createdAt: string;
        /**
         * 更新时间
         * @example `2022-01-14T21:08:26+08:00
        `
         */
        updatedAt: string;
        /**
         * 开始时间
         * @example `2023-03-15T08:00:00Z
        `
         */
        startedAt: string;
        /**
         * 完结时间
         * @example `2023-03-15T08:00:00Z
        `
         */
        completedAt: string;
        /**
         * 外部系统ID
         * @example `42`
         */
        externalId: string;
        /**
         * 名称
         * @example `my-check-ci
        `
         */
        name: string;
        /**
         * 提交ID
         * @example `40f4ccfe019cdd4a62d4acb0c57130106fc7e1be
        `
         */
        headSha: string;
        /**
         * 状态
         * - queued：队列中
         * - in_progress：运行中
         * - completed：已完结
         * @example `completed`
         */
        status: string;
        /**
         * 结论
         * - cancelled：已取消
         * - failure：失败
         * - neutral：中立状态，算作成功
         * - success：成功
         * - skipped：跳过，算作成功状态
         * - timed_out：超时
         * @example `success`
         */
        conclusion: string;
        /**
         * 三方交互系统的详情地址，由用户自行决定，平台仅提供跳转能力
         * @example `xxx`
         */
        detailsUrl: string;
        /**
         * 检查套件
         */
        checkSuite: {
            /**
             * 检查套件ID，唯一标识
             * @example `1`
             */
            id: number;
        };
        /**
         * 写入人简要信息
         */
        writer: {
            /**
             * 用户阿里云账号ID
             * @example `xxx
            `
             */
            id: string;
            /**
             * 写入人类型
             * - User：用户类型
             * @example `User`
             */
            type: string;
            /**
             * 写入人名称
             * @example `test-codeup
            `
             */
            name: string;
            /**
             * 别名
             * @example `test-codeup
            `
             */
            slug: string;
            /**
             * 写入人头像地址
             * @example `xxx
            `
             */
            logoUrl: string;
        };
        /**
         * 页面展示信息
         */
        output: {
            /**
             * UI模块的标题（非name）
             * @example `Mighty Readme report
            `
             */
            title: string;
            /**
             * 检查运行的摘要信息
             * > 支持markdown格式；最大字符长度为64KB，即65535个字符
             * @example `摘要信息内容
            `
             */
            summary: string;
            /**
             * 详情信息
             * > 支持markdown格式；最大字符长度为64KB，即65535个字符
             * @example `详情信息内容`
             */
            text: string;
            /**
             * 图片信息
             * > check run支持在output的展示模块中，展示图片信息
             */
            images: {
                /**
                 * alt文本信息
                 * @example `test-image-alt
                `
                 */
                alt: string;
                /**
                 * 图片地址，须确保能够有效访问，否则页面无法展示
                 * @example `xxx`
                 */
                imageUrl: string;
                /**
                 * 图片信息的简要描述
                 * @example `test
                `
                 */
                caption: string;
            }[];
        };
        /**
         * 检查注释列表
         * > 对于某些三方系统，可能会获得代码质量检测结果，若希望进行展示，可通过API将信息通过annotation写入到check run中。
         */
        annotations: {
            /**
             * 检查注释ID，唯一标识
             * @example `1`
             */
            id: number;
            /**
             * 文件路径
             * @example `demo/test.txt
            `
             */
            path: string;
            /**
             * 起始行
             * > 从1开始；需要用户自行确保文件行数的有效性，否则无法展示
             * @example `1`
             */
            startLine: number;
            /**
             * 结束行
             * @example `2`
             */
            endLine: number;
            /**
             * 起始列
             * > 当且仅当startLine=endLine时，该字段值有效
             * @example `3`
             */
            startColumn: number;
            /**
             * 结束列
             * > 当且仅当startLine=endLine时，该字段值有效
             * @example `5`
             */
            endColumn: number;
            /**
             * 检查注释的等级
             * - notice：轻微
             * - warning：警告
             * - failure：严重
             * @example `warning`
             */
            annotationLevel: string;
            /**
             * 简要描述信息
             * @example `回写检查注释的简要描述信息
            `
             */
            message: string;
            /**
             * 检查注释的标题
             * @example `检查注释的标题
            `
             */
            title: string;
            /**
             * 详情信息，限制64KB以内的大小
             * @example `详情信息
            `
             */
            rawDetails: string;
        }[];
    };
}
