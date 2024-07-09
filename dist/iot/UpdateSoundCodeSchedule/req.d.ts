export interface UpdateSoundCodeScheduleRequest {
    /**
     * 排程唯一标识。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "ScheduleCode": string;
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
    "Name"?: string;
    /**
     * 排程描述，长度为1~64个字符，一个汉字占两个字符，实例下保证唯一。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 排程状态。
     * - **WORKING**：启用。
     * - **STOP**：停用。
     * @example `WORKING`
     */
    "Status"?: string;
    /**
     * 排程每日开始工作时间，格式为二十四小时制时间，范围为00:00~23:59。
     * @example `00:00`
     */
    "StartTime"?: string;
    /**
     * 排程每日结束工作时间，格式为二十四小时制时间，范围为00:00~23:59，不能早于StartTime。
     * @example `23:59`
     */
    "EndTime"?: string;
    /**
     * 排程开始工作日期，格式为yyyy-MM-dd。
     * @example `2022-03-31`
     */
    "StartDate"?: string;
    /**
     * 排程结束工作日期，格式为yyyy-MM-dd，不得早于StartDate。
     * @example `2022-03-31`
     */
    "EndDate"?: string;
}
