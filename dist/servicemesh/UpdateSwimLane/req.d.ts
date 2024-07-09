export interface UpdateSwimLaneRequest {
    /**
     * 服务网格ID。
     * @example `xxx`
     */
    "ServiceMeshId": string;
    /**
     * 泳道关联的服务列表。
     * @example `["sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc"]`
     */
    "ServicesList"?: string;
    /**
     * 泳道名称。
     * @example `s1`
     */
    "SwimLaneName"?: string;
    /**
     * 固定为`ASM_TRAFFIC_TAG`。
     * @example `ASM_TRAFFIC_TAG`
     */
    "LabelSelectorKey"?: string;
    /**
     * `ASM_TRAFFIC_TAG` Label对应的取值。
     * @example `v1`
     */
    "LabelSelectorValue"?: string;
    /**
     * 泳道组名称。
     * @example `test`
     */
    "GroupName"?: string;
}
