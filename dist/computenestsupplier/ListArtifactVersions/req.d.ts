export interface ListArtifactVersionsRequest {
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hR****`
     */
    "NextToken"?: string;
    /**
     * 部署物ID。
     * 您可以通过调用[ListArtifacts - 查询部署物列表](~~469993~~)获取部署物ID。
     * @example `artifact-eea08d1e2d3a43ae****`
     */
    "ArtifactId": string;
}
