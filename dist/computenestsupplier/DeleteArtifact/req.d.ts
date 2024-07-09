export interface DeleteArtifactRequest {
    /**
     * 部署物ID。
     * 您可以通过[ListArtifacts - 查询部署物列表](~~469993~~)获取部署物ID。
     * @example `artifact-eea08d1e2d3a43aexxxx`
     */
    "ArtifactId": string;
    /**
     * 部署物版本。
     * 您可以通过[ListArtifactVersions - 查询部署物版本信息](~~469995~~)获取部署物版本。
     * @example `2`
     */
    "ArtifactVersion"?: string;
}
