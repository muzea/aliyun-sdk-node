export interface GetArtifactBuildRuleResponse {
    /**
     * 请求ID
     * @example `7A3E98F6-296C-54AC-A612-B75E7777D4C1`
     */
    RequestId: string;
    /**
     * 规则生效范围的ID，取值：
     * - ScopeId配置为镜像仓库ID
     * @example `crr-8dz3aedjqlmk****`
     */
    ScopeId: string;
    /**
     * 构建规则ID
     * @example `crabr-o2670wqz2n70****
    `
     */
    BuildRuleId: string;
    /**
     * 加速镜像类型，取值：
     * - `ACCELERATED_IMAGE`：表示生成加速镜像
     * @example `ACCELERATED_IMAGE`
     */
    ArtifactType: string;
    /**
     * 规则生效范围，取值：
     * - `REPOSITORY`：表示生效范围仓库级别
     * @example `REPOSITORY`
     */
    ScopeType: string;
    Parameters: {
        ImageIndexOnly: boolean;
    };
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。
     * @example `success`
     */
    Code: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
}
