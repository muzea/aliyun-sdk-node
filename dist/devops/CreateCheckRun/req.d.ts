export interface CreateCheckRunRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID或者全路径
     * @example `2835387 或 codeup/codeup-demo
    `
     */
    "repositoryIdentity": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 检查运行的名称
         * > 在一定环境下（指定代码库、提交ID、写入人），名称具有唯一性；长度限制在50以内
         * @example `my-check-ci`
         */
        name: string;
        /**
         * 提交ID
         * > Commit SHA，但需要确保该commit是某个合并请求的合并源
         * @example `40f4ccfe019cdd4a62d4acb0c57130106fc7e1be`
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
         * - neutral：中立状态，算作成功状态
         * - success：成功
         * - skipped：跳过，算作成功状态
         * - timed_out：超时
         * @example `success`
         */
        conclusion: string;
        /**
         * 检查运行的开始时间
         * > ISO 8601 格式：YYYY-MM-DDTHH:MM:SSZ，如 2023-03-15T08:00:00Z
         * @example `2023-03-15T08:00:00Z`
         */
        startedAt: string;
        /**
         * 检查运行的完结时间
         * > 说明 ISO 8601 格式：YYYY-MM-DDTHH:MM:SSZ，如 2023-03-15T08:00:00Z
         * @example `2023-03-15T08:00:00Z`
         */
        completedAt: string;
        /**
         * 外部系统的ID
         * > 外部系统，指用户的检测系统；该字段由用户自行决定写入何种ID，平台仅使用字符串类型进行存储
         * @example `42`
         */
        externalId: string;
        /**
         * 三方交互系统的详情地址，由用户自行决定，平台仅提供跳转能力
         * @example `xxx`
         */
        detailsUrl: string;
        /**
         * 各类展示信息
         */
        output: {
            /**
             * UI模块的标题（非name）
             * @example `Mighty Readme report`
             */
            title: string;
            /**
             * 检查运行的摘要信息
             * > 支持markdown格式；最大字符长度为64KB，即65535个字符
             * @example `摘要信息内容`
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
                 * @example `test-image-alt`
                 */
                alt: string;
                /**
                 * 图片地址，须确保能够有效访问，否则页面无法展示
                 * @example `xxx`
                 */
                imageUrl: string;
                /**
                 * 图片信息的简要描述
                 * @example `test`
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
             * 文件路径
             * @example `demo/test.txt`
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
             * @example `notice`
             */
            annotationLevel: string;
            /**
             * 简要描述信息
             * @example `回写检查注释的简要描述信息`
             */
            message: string;
            /**
             * 检查注释的标题
             * @example `检查注释的标题`
             */
            title: string;
            /**
             * 详情信息，限制64KB以内的大小
             * @example `详情信息内容`
             */
            rawDetails: string;
        }[];
    };
}
