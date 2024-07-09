export interface ModifyApiServerEipResourceRequest {
    /**
     * ASM实例ID。
     * @example `cb8963379255149cb98c8686f274x****`
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
     * EIP实例ID。
     * @example `eip-bp1adu9jegmxnaoq****`
     */
    "ApiServerEipId"?: string;
}
