export interface ReleaseArtifactRequest {
    /**
     * 部署物ID。
     * 您可以通过调用[ListArtifacts - 查询部署物列表](~~469993~~)获取部署物ID。
     * @example `artifact-9feded91880e4c78xxxx`
     */
    "ArtifactId": string;
}
