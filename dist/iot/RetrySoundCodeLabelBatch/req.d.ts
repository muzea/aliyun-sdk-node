export interface RetrySoundCodeLabelBatchRequest {
    /**
     * 批次唯一标识，可通过[QuerySoundCodeLabelBatchList](~~424329~~)接口查询批次列表得到。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "BatchCode": string;
    /**
     * 实例ID。<props="china"><ph>您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。</ph></props>
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * <props="china">实例的更多信息，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
}
