export interface ListRepoBuildRuleResponse {
    /**
     * 请求ID
     * @example `42D782C8-E8F6-4A32-BEA0-6A6AC854C22A`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: string;
    /**
     * 构建规则列表
     */
    BuildRules: {
        /**
         * Dockerfile所在目录
         * @example `/`
         */
        DockerfileLocation: string;
        /**
         * 构建规则ID
         * @example `crbr-khys0nd3asbe****`
         */
        BuildRuleId: string;
        /**
         * 源代码推送触发构建类型，取值：
         * - GIT_BRANCH：从Branch推送源代码
         * - GIT_TAG：从Tag推送源代码
         * @example `GIT_BRANCH`
         */
        PushType: string;
        /**
         * 代码推送触发构建名称
         * @example `v0.1`
         */
        PushName: string;
        /**
         * 镜像TAG
         * @example `v0.1`
         */
        ImageTag: string;
        /**
         * Dockerfile文件名称
         * @example `Dockerfile`
         */
        DockerfileName: string;
        /**
         * 镜像操作系统和平台
         */
        Platforms: string[];
        BuildArgs: string[];
    }[];
}
