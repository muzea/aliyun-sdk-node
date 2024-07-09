export type ListAllReleaseWorkflowsResponse = {
    /**
     * 应用名
     * @example `testApp`
     */
    appName: string;
    /**
     * 研发流程唯一标识
     * @example `ce51b31b996246ecaf874736838360b2`
     */
    sn: string;
    /**
     * 名称
     * @example `标准研发流程`
     */
    name: string;
    /**
     * 排序
     * @example `1`
     */
    order: string;
    /**
     * 研发阶段
     */
    releaseStages: {
        /**
         * 应用名
         * @example `testApp`
         */
        appName: string;
        /**
         * 阶段名
         * @example `开发阶段`
         */
        name: string;
        /**
         * 研发阶段唯一标识
         * @example `5aa8cc67e75e41bf9dddeb708775bcc3`
         */
        sn: string;
        /**
         * 所属的研发流程sn
         * @example `ce51b31b996246ecaf874736838360b2`
         */
        releaseWorkflowSn: string;
        /**
         * 阶段顺序
         * @example `1`
         */
        order: string;
        /**
         * 变量组列表
         */
        variableGroups: {
            /**
             * 变量组名称
             * @example `dev`
             */
            name: string;
            /**
             * 变量组显示名
             * @example `开发环境变量组`
             */
            displayName: string;
            /**
             * 变量组类型：GLOBAL - 全局变量组；APP - 应用变量组；
             * @example `APP`
             */
            type: string;
        }[];
    }[];
    /**
     * 公告
     * @example `""`
     */
    note: string;
}[];
