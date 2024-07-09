export interface QuerySpeechPushJobSpeechRequest {
    /**
     * 推送任务ID，调用[PushSpeech](~~217573~~)成功后返回的**Data**字段为推送任务ID。
     * @example `0Ykj************************Av0I`
     */
    "JobCode": string;
    /**
     * 指定每页返回数据的最大条数，取值范围：1~50，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页，从1开始，最大为10000。
     * @example `1`
     */
    "PageId"?: number;
    /**
     * 实例ID。
     * 必须传入实例ID，否则调用会失败。您可在物联网平台控制台的**实例概览**页面，查看您的实例ID。
     * ><notice>
     * 如果公共实例没有ID，请参见[如何获取实例ID](~~267533~~)。
     * ></notice>
     * @example `iot-060*****`
     */
    "IotInstanceId"?: string;
}
