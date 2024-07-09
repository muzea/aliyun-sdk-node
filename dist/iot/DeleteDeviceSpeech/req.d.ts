export interface DeleteDeviceSpeechRequest {
    /**
     * 物联网平台为设备颁发的ID，是设备的唯一标识符。可以调用[QueryDeviceInfo](~~257184~~)查询设备ID。
     * @example `4de2c367****8c585e5992**`
     */
    "IotId": string;
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
     * 待删除的语料列表。
     */
    "DeviceSpeechList": {
        /**
         * 语料标识。调用[QuerySpeech](~~217577~~)可以查询语料标识。
         * @example `identifying`
         */
        BizCode: string;
        /**
         * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
         * @example `wav`
         */
        AudioFormat: string;
    }[];
}
