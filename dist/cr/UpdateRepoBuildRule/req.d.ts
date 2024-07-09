export interface UpdateRepoBuildRuleRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-tquyps22md8p****`
     */
    "RepoId": string;
    /**
     * Dockerfile路径
     * @example `/`
     */
    "DockerfileLocation"?: string;
    /**
     * Dockerfile名称
     * @example `Dockerfile`
     */
    "DockerfileName"?: string;
    /**
     * 推送类型，取值：
     * - `GIT_TAG`：TAG触发
     * - `GIT_BRANCH`：分支触发
     * @example `GIT_BRANCH`
     */
    "PushType"?: string;
    /**
     * 触发名称
     * @example `master`
     */
    "PushName"?: string;
    /**
     * 镜像Tag版本
     * @example `v0.9.5`
     */
    "ImageTag"?: string;
    /**
     * 构建规则ID
     * @example `crbr-ly77w5i3t31f****`
     */
    "BuildRuleId": string;
    /**
     * 构建参数
     */
    "BuildArgs"?: string[];
    /**
     * 构建镜像架构，取值：
     * - `linux/amd64`
     * -  `linux/arm64`
     * - `linux/386`
     * - `linux/arm/v7`
     * - `linux/arm/v6`
     * 默认值：`linux/amd64`
     * @example `linux/amd64`
     */
    "Platforms"?: string[];
}
