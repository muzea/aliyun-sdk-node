export interface UpdateDeviceShadowRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要修改影子信息的设备所隶属的产品ProductKey。
     * @example `a1T27vz****`
     */
    "ProductKey": string;
    /**
     * 要修改影子信息的设备名称。
     * @example `device1`
     */
    "DeviceName": string;
    /**
     * 修改后的设备影子信息。
     * 影子信息参数中包含：
     * - **method**：String，指定操作类型，取值：**update**。
     * - **state**：String，发送给影子的具体状态，由**desired**参数表示期望的影子状态。
     * - **version**：Long，设备影子的版本。
     *     - 若无需版本控制，该值设置为0。
     *     - 若需要版本控制，该值必须大于当前影子版本。
     * ><notice>需要版本控制时，不能直接从物联网平台查询当前影子版本。因为更新和查询操作并发量高时，可能导致多个更新操作查询到同一个影子版本。基于此情况，最后一次发起的更新操作可能先完成，进而导致最终更新的影子信息不是最新的影子信息。所以，建议您本地维护影子版本，调用本接口时，从本地应用获取最新影子版本。
     * ></notice>
     * @example `{"method":"update","state":{"desired":{"color":"green"}},"version":2}`
     */
    "ShadowMessage": string;
    /**
     * 是否增量更新设备影子**desired**参数。
     * - **true**：增量更新。
     * - **false**（默认）：全量更新。
     * @example `false`
     */
    "DeltaUpdate"?: boolean;
}
