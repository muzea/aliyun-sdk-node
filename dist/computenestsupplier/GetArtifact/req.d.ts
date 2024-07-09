export interface GetArtifactRequest {
    /**
     * 部署物ID。
     * 您可以通过调用[ListArtifacts - 查询部署物列表](~~469993~~)获取部署物ID。
     * @example `artifact-eea08d1e2d3a43ae****`
     */
    "ArtifactId"?: string;
    /**
     * 部署物版本。
     * 您可以通过调用[ListArtifacts - 查询部署物列表](~~469993~~)获取部署物版本。
     * @example `1`
     */
    "ArtifactVersion"?: string;
    /**
     * 部署物名称。
     * 您可以通过调用[ListArtifacts - 查询部署物列表](~~469993~~)获取部署物名称。
     * @example `gpu-test`
     */
    "ArtifactName"?: string;
}
