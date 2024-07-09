export interface QuerySpeechListRequest {
    /**
     * 项目ID，是项目的唯一标识，您可以通过[项目管理控制台](https://iot.console.aliyun.com/things-service/projects)获取项目ID。
     * @example `4de2c367****8c585e5992**`
     */
    "ProjectCode": string;
    /**
     * 指定每页返回的语料条数，取值范围：1~50，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页，从1开始，最大10000。
     * @example `1`
     */
    "PageId"?: number;
    /**
     * 实例ID。
     * 必须传入实例ID，否则调用会失败。您可在物联网平台控制台的**实例概览**页面，查看您的实例ID。
     * ><notice>
     * 如果公共实例没有ID，请参见[如何获取实例ID](~~267533~~)。
     * ></notice>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
     * @example `wav`
     */
    "AudioFormat"?: string;
}
