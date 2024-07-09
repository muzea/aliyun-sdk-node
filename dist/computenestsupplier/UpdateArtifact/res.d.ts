export interface UpdateArtifactResponse {
    /**
     * 请求ID。
     * @example `B1A0198B-F316-1B72-B8DD-28B6F6D6XXXX`
     */
    RequestId: string;
    /**
     * 部署物ID。
     * @example `artifact-eea08d1e2d3a43aexxxx`
     */
    ArtifactId: string;
    /**
     * 部署物类型。
     * @example `EcsImage`
     */
    ArtifactType: string;
    /**
     * 部署物名称。
     * @example `v1`
     */
    VersionName: string;
    /**
     * 部署物版本。
     * @example `2`
     */
    ArtifactVersion: string;
    /**
     * 部署物描述。
     * @example `Redhat8_0镜像`
     */
    Description: string;
    /**
     * 修改时间。
     * @example `2022-10-20T02:19:55Z`
     */
    GmtModified: string;
    /**
     * 部署物的状态。可能的值：
     * - Created：已创建。
     * - Scanning：扫描中。
     * - ScanFailed：扫描失败。
     * - Delivering：分发中。
     * - Available：可使用。
     * - Deleted：已删除。
     * @example `Available`
     */
    Status: string;
    /**
     * 部署物属性。
     * @example `{\"CommodityCode\":\"cmjj0005xxxx\",\"CommodityVersion\":\"V2022xxxx\"}`
     */
    ArtifactProperty: string;
    /**
     * 部署物支持的地域ID。
     * @example `[
                "cn-beijing",
                "cn-hangzhou",
                "cn-shanghai"
            ]`
     */
    SupportRegionIds: string;
}
