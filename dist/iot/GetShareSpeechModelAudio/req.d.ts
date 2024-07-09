export interface GetShareSpeechModelAudioRequest {
    /**
     * 分享任务的**任务ID**。
     * 您可在**千里传音语音播报服务**控制台的**分享语料管理**页面，获取**任务ID**。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "ShareTaskId": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-2w****`
     */
    "IotInstanceId"?: string;
    /**
     * 共享语料的**语料标识**列表，最多可传入10个**语料标识**。
     * 您可在**千里传音语音播报服务**控制台的**分享语料管理**下**任务详情**页面，获取**语料标识**。
     * @example `WSD****`
     */
    "SpeechModelCodeList": string[];
}
