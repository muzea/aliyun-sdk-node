export interface CreateSchedulePeriodRequest {
    /**
     * 时间段声码解析内容，长度为1~512个字符，一个汉字占两个字符。
     * @example `www.taobao.com`
     */
    "SoundCodeContent": string;
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
     * 时间段描述，长度为1~64个字符，一个汉字占两个字符。
     * @example `test`
     */
    "Description": string;
    /**
     * 时间段开始时间，格式为二十四小时制时间，范围为00:00~23:59。
     * @example `00:00`
     */
    "StartTime": string;
    /**
     * 时间段结束时间，格式为二十四小时制时间，范围为00:00~23:59，不能早于StartTime。
     * @example `01:00`
     */
    "EndTime": string;
}
