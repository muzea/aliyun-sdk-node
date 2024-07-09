export interface MoveResourceGroupRequest {
    /**
     * 集群Id。
     * @example `cds-k6g0e3l9h****`
     */
    "ClusterId": string;
    /**
     * 新的资源组Id，可在资源组控制台查看可用资源组。
     * @example `rg-a4f9jl8u4e****`
     */
    "NewResourceGroupId": string;
}
