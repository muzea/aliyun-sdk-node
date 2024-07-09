export interface CreateArtifactResponse {
    /**
     * 请求ID。
     * @example `E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C`
     */
    RequestId: string;
    /**
     * 部署物ID。
     * @example `artifact-eea08d1e2d3a43ae****`
     */
    ArtifactId: string;
    /**
     * 部署物类型。
     * @example `EcsImage`
     */
    ArtifactType: string;
    /**
     * 部署物名称。
     * @example `Redhat8_5镜像`
     */
    Name: string;
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
     * @example `2022-11-11T12:00:00Z`
     */
    GmtModified: string;
    /**
     * 部署物状态。
     * @example `Created`
     */
    Status: string;
    /**
     * 部署物的最新版本。
     * @example `1`
     */
    MaxVersion: number;
    /**
     * 部署物内容。
     * @example `{\"CommodityCode\":\"cmjj0005****\",\"CommodityVersion\":\"V2022****\"}`
     */
    ArtifactProperty: string;
    /**
     * 部署物分发的地域ID。
     * @example `[
                "cn-beijing",
                "cn-hangzhou",
                "cn-shanghai"
            ]`
     */
    SupportRegionIds: string;
}
