export interface GetSoundCodeAudioRequest {
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
     * 声码的唯一标识列表，最多100个元素。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "SoundCodeList": string[];
}
