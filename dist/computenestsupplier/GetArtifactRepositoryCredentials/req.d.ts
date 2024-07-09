export interface GetArtifactRepositoryCredentialsRequest {
    /**
     * 部署物类型。可能的值：
     * - File：Oss文件。
     * - AcrImage：容器镜像。
     * @example `File`
     */
    "ArtifactType": string;
    /**
     * 上传地域。
     * @example `cn-hangzhou`
     */
    "DeployRegionId"?: string;
}
