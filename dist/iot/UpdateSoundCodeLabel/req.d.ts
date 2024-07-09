export interface UpdateSoundCodeLabelRequest {
    /**
     * 声码唯一标识。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "SoundCode": string;
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
    /**
     * 标签，长度为1~64个字符，一个汉字占两个字符，排程下保证唯一。
     * @example `test`
     */
    "Label": string;
}
