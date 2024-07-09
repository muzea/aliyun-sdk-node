export interface CreateSoundCodeScheduleRequest {
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
     * 排程名称，长度为1~64个字符，一个汉字占两个字符，实例下保证唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * 排程描述，长度为1~64个字符，一个汉字占两个字符，实例下保证唯一。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 排程开始工作日期，格式为yyyy-MM-dd。
     * @example `2022-03-31`
     */
    "StartDate": string;
    /**
     * 排程结束工作日期，格式为yyyy-MM-dd，不得早于StartDate。
     * @example `2022-03-31`
     */
    "EndDate": string;
    /**
     * 排程开放类型。
     * - 内部（默认）：取值为**INNER**，只允许排程所在实例下的设备请求声码解码。
     * - 公开：取值为**OPEN**，可以发送邮件的方式配置白名单，允许跨实例的设备请求声码解码，跨实例解码的用量计算在声码所在的实例下。
     * @example `INNER`
     */
    "OpenType"?: string;
}
