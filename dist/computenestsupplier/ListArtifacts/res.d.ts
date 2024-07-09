export interface ListArtifactsResponse {
    /**
     * 请求ID。
     * @example `7B7AE429-B53E-5E73-A5EC-DC91F614F2D9`
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
     * 部署物列表信息。
     */
    Artifacts: {
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
         * @example `Redhat8_5镜像`
         */
        Name: string;
        /**
         * 最新版本。
         * @example `2`
         */
        MaxVersion: string;
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
         * 部署物的状态。
         * 取值：
         * - Created：已创建。
         * - Scanning：扫描中。
         * - ScanFailed：扫描失败。
         * - Delivering：分发中。
         * - Available：可使用。
         * - Deleted：已删除。
         * @example `Created`
         */
        Status: string;
        /**
         * 资源组ID。
         * @example `rg-acfmzmhzoaa****`
         */
        ResourceGroupId: string;
        /**
         * 标签值。
         */
        Tags: {
            /**
             * 标签键。
             * @example `key1`
             */
            Key: string;
            /**
             * 标签值。
             * @example `value1`
             */
            Value: string;
        }[];
    }[];
}
