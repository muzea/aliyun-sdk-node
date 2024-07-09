export interface CreateSwimLaneRequest {
    /**
     * 服务网格ID。
     * @example `*****`
     */
    "ServiceMeshId": string;
    /**
     * 泳道名称。
     * @example `s3`
     */
    "SwimLaneName"?: string;
    /**
     * 工作负载对应的标签，目前固定为`ASM_TRAFFIC_TAG`。
     * @example `ASM_TRAFFIC_TAG`
     */
    "LabelSelectorKey"?: string;
    /**
     * 泳道关联的服务列表，取值为JSON数组，单个服务格式为`$集群名称/$集群ID/$Namespace/$serviceName`。
     * @example `[\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka\",\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb\",\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc\"]`
     */
    "ServicesList"?: string;
    /**
     * 服务工作负载对应的Label标签：`ASM_TRAFFIC_TAG`的取值。
     * @example `v3`
     */
    "LabelSelectorValue"?: string;
    /**
     * 泳道组名称。
     * @example `test`
     */
    "GroupName"?: string;
}
