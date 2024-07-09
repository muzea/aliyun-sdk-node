export interface GetPipelineRunResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 流水线运行实例
     */
    pipelineRun: {
        /**
         * 创建者阿里云账号id
         * @example `1111111111`
         */
        creatorAccountId: string;
        /**
         * 创建时间
         * @example `1586863220000`
         */
        createTime: number;
        /**
         * 更新时间
         * @example `1586863220000`
         */
        updateTime: number;
        /**
         * 更新人阿里云账号id
         * @example `11111111111`
         */
        modifierAccountId: string;
        /**
         * 流水线Id
         * @example `1234`
         */
        pipelineId: number;
        /**
         * 流水线运行实例id
         * @example `1`
         */
        pipelineRunId: number;
        /**
         * 状态 FAIL 运行失败 SUCCESS 运行成功 RUNNING 运行中
         * @example `SUCCESS`
         */
        status: string;
        /**
         * - 触发模式
         *
         *   1人工触发
         *
         *   2定时触发
         *   3代码提交触发
         *
         *   5流水线触发
         *   6WEBHOOK触发
         * @example `1`
         */
        triggerMode: number;
        /**
         * 阶段拓扑信息
         */
        stageGroup: string[][];
        /**
         * 代码源
         */
        sources: {
            /**
             * 代码源唯一标识
             * @example `assaaaaaasasasa`
             */
            sign: string;
            /**
             * 代码库类型 Codeup codeup 代码源 aliyunGit 阿里云code  giteeGit 码云
             * @example `Codeup`
             */
            type: string;
            /**
             * 代码源信息
             */
            data: {
                /**
                 * 代码分支
                 * @example `master`
                 */
                branch: string;
                /**
                 * 提交信息 JSON 数据
                 * @example `{}`
                 */
                commint: string;
                /**
                 * 代码库地址
                 * @example `http://codeup.aliyun.com/a.git`
                 */
                repo: string;
            };
        }[];
        /**
         * 阶段信息
         */
        stages: {
            /**
             * 阶段名称
             * @example `Java构建`
             */
            name: string;
            /**
             * 阶段详情
             */
            stageInfo: {
                /**
                 * 结束时间
                 * @example `1586863220000`
                 */
                endTime: number;
                /**
                 * 开始时间
                 * @example `1586863220000`
                 */
                startTime: number;
                /**
                 * 阶段名称
                 * @example `Java构建`
                 */
                name: string;
                /**
                 * 状态 FAIL 运行失败 SUCCESS 运行成功 RUNNING 运行中
                 * @example `RUNNING`
                 */
                status: string;
                /**
                 * 任务
                 */
                jobs: {
                    /**
                     * 结束时间
                     * @example `1586863220000`
                     */
                    endTime: number;
                    /**
                     * 任务Id
                     * @example `21212`
                     */
                    id: number;
                    /**
                     * 任务名称
                     * @example `Java构建`
                     */
                    name: string;
                    /**
                     * 触发参数
                     * @example `{}`
                     */
                    params: string;
                    /**
                     * 状态 FAIL 运行失败 SUCCESS 运行成功 RUNNING 运行中
                     * @example `RUNNING`
                     */
                    status: string;
                    /**
                     * 开始时间
                     * @example `1586863220000`
                     */
                    startTime: number;
                    /**
                     * 后续操作,具体参考文档https://help.aliyun.com/document_detail/2360596.html
                     */
                    actions: {
                        /**
                         * 参考文档https://help.aliyun.com/document_detail/2360596.html
                         * @example `PassPipelineValidate`
                         */
                        type: string;
                        /**
                         * 参考文档https://help.aliyun.com/document_detail/2360596.html
                         * @example `true`
                         */
                        disable: boolean;
                        /**
                         * 参考文档https://help.aliyun.com/document_detail/2360596.html
                         * @example `{}`
                         */
                        params: any;
                    }[];
                }[];
            };
        }[];
    };
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
}
