export interface CreateArtifactBuildRuleRequest {
    /**
     * 实例ID。
     * @example `cri-cxreylqvcyje****`
     */
    "InstanceId": string;
    /**
     * 规则生效范围，取值：
     * - `REPOSITORY`：表示生效范围仓库级别。
     * @example `REPOSITORY`
     */
    "ScopeType": string;
    /**
     * 规则生效范围的ID，取值：
     * - ScopeId配置为镜像仓库ID。
     * @example `crr-pmajihou6cg0****`
     */
    "ScopeId": string;
    /**
     * 加速镜像类型，取值：
     * - `ACCELERATED_IMAGE`：表示生成加速镜像。
     * @example `ACCELERATED_IMAGE`
     */
    "ArtifactType": string;
    /**
     * 附加参数。
     * @example `{}`
     */
    "Parameters"?: any;
}
