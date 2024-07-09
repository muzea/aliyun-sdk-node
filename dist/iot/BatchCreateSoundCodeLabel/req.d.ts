export interface BatchCreateSoundCodeLabelRequest {
    /**
     * 批量创建声码个数，数量为1～200个，系统将为每个声码自动生成由字母、数字随机组合的标签。
     * @example `20`
     */
    "Total": number;
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
     * 排程唯一标识。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "ScheduleCode": string;
    /**
     * 批次描述，长度为1~64个字符，一个汉字占两个字符。
     * @example `test`
     */
    "Description"?: string;
}
