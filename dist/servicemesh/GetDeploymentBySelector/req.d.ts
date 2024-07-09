export interface GetDeploymentBySelectorRequest {
    /**
     * 服务网格实例ID
     * @example `ce9fc65def2aa4c918747b9360fbda737`
     */
    "ServiceMeshId": string;
    /**
     * 集群名称
     * @example `cbe80a56d07ed45818b4d39273e234688`
     */
    "GuestCluster"?: string;
    /**
     * 命名空间
     * @example `default`
     */
    "NameSpace"?: string;
    /**
     * 返回数据条数上限
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 上次查询到的数据标记
     * @example `eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6NzgxODk3MCwic3RhcnQiOiJuZ2lueDQ1N1x1MDAwMCJ9`
     */
    "Mark"?: string;
    /**
     * Label选择器
     */
    "LabelSelector"?: any;
}
