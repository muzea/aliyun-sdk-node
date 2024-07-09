export interface PageQuerySpeechBroadcastHourRequest {
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
     * 指定返回结果中每页显示的记录数量，默认值为10，最大不超过2,000。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 下一页标识，首次查询无需传入。后续查询需使用的**PageToken**，要从上一次查询的返回结果中获取。
     * 例如查询第n页时，传入查询第n-1页返回的**PageToken**值。
     * @example `TGlzdFJlc291cm****`
     */
    "PageToken"?: string;
    /**
     * 要查询的时间。2020090919表示2020年09月09日19时。
     * @example `2020090919`
     */
    "QueryDateTimeHour": string;
}
