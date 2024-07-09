export interface GetSwimLaneDetailRequest {
    /**
     * 服务网格ID。
     * @example `xxx`
     */
    "ServiceMeshId": string;
    /**
     * 泳道名称。
     * @example `s1`
     */
    "SwimLaneName"?: string;
    /**
     * 泳道组名称。
     * @example `test`
     */
    "GroupName"?: string;
}
