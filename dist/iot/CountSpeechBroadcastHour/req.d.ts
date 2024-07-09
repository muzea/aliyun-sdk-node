export interface CountSpeechBroadcastHourRequest {
    /**
     * 语料分享任务的分享码。
     * 您可在**千里传音语音播报服务**的**分享语料管理**页面，获取**分享码**。
     * @example `ebed9280_ba25_48df_80c2_****`
     */
    "ShareTaskCode": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-2w****`
     */
    "IotInstanceId"?: string;
    /**
     * 要查询的时间。2020090919表示2020年09月09日19时。
     * @example `2020090919`
     */
    "QueryDateTimeHour": string;
}
