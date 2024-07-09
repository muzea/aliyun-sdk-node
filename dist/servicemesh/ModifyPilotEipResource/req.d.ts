export interface ModifyPilotEipResourceRequest {
    /**
     * 服务网格ID。
     * @example `c1f5a67154bec40629c2698ec********`
     */
    "ServiceMeshId"?: string;
    /**
     * 操作类型，取值：
     * - `UnBindEip`：解绑EIP。
     * - `BindEip`：绑定一个EIP。
     * @example `BindEip`
     */
    "Operation"?: string;
    /**
     * 需要绑定的弹性公网 IP 实例 Id
     * @example `eip-hp36jpqq5eged********`
     */
    "EipId"?: string;
}
