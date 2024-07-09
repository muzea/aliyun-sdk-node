export interface GetArtifactResponse {
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
     * 部署物版本名称。
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
     * 部署物状态。
     * @example `Available`
     */
    Status: string;
    /**
     * 最新版本。
     * @example `2`
     */
    MaxVersion: number;
    /**
     * 部署物属性。
     * @example `{\"CommodityCode\":\"cmjj0005****\",\"CommodityVersion\":\"V2022****\"}`
     */
    ArtifactProperty: string;
    /**
     * 部署物支持的地域ID。
     * @example `["cn-hangzhou","cn-beijing"]`
     */
    SupportRegionIds: string;
    /**
     * 部署物分发进度。
     * @example `100`
     */
    Progress: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzmhzoaa****`
     */
    ResourceGroupId: string;
    /**
     * 部署物标签。
     */
    Tags: {
        /**
         * 部署物标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 部署物标签值。
         * @example `value1`
         */
        Value: string;
    }[];
}
