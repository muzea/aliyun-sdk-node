export interface ListArtifactVersionsResponse {
    /**
     * 请求ID。
     * @example `4DB0F536-B3BE-4F0D-BD29-E83FB56D550C`
     */
    RequestId: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hR****`
     */
    NextToken: string;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 符合条件的记录总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 部署物版本信息。
     */
    Artifacts: {
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
         * 部署物的状态。
         * 取值：
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
        /**
         * 修改时间。
         * @example `2022-10-20T02:19:55Z`
         */
        GmtModified: string;
        /**
         * 部署物分发进度。
         * @example `100`
         */
        Progress: string;
        /**
         * 创建时间。
         * @example `2022-10-20T02:19:53Z`
         */
        GmtCreate: string;
        /**
         * 镜像分发结果。
         */
        ImageDelivery: any;
        /**
         * 安全扫描结果。
         * 取值：
         * - Normal：正常状态（无风险）。
         * - AtRisk：存在安全风险。
         * - Processing：进行中。
         * @example `Normal`
         */
        SecurityAuditResult: string;
        /**
         * 安全扫描结果文件。
         * @example `仅当安全扫描结果的返回值为AtRisk时才会展示。`
         */
        ResultFile: string;
    }[];
}
