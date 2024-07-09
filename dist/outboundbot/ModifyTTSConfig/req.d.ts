export interface ModifyTTSConfigRequest {
    /**
     * 实例id
     * @example `27244bae-e446-4811-bb1d-f8a07b525af0`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `1f1a2ba0-b3e7-4ff9-baf1-6dc8aeac0791`
     */
    "ScriptId": string;
    /**
     * 发音人信息，如：aixia / siyue / xiaoyun
     * @example `aixia`
     */
    "Voice"?: string;
    /**
     * 语速
     * [-500,500]之间整数。默认值为0。
     * 大于0表示加快语速。
     * 小于0表示减慢语速。
     * @example `0`
     */
    "SpeechRate"?: string;
    /**
     * 音量
     * [0,100]之间整数。默认值为50。
     * 大于50表示增大音量。
     * 小于50表示减小音量。
     * @example `100`
     */
    "Volume"?: string;
    /**
     * 服务类型
     * Managed:智能外呼产品默认智能语音交互产品服务（公共服务）
     * Authorized:公有云客户自己购买的智能语音交互产品服务（客户私有服务），通过场景管理-编辑-调用服务-自定义服务完成授权
     * @example `Managed`
     */
    "NlsServiceType"?: string;
    /**
     * 语音服务类型 nlsServiceType = Authorized时，此字段用来保存智能语音交互产品项目的appKey
     * @example `99****Aw`
     */
    "AppKey"?: string;
    /**
     * 语调 [-500,500]之间整数。默认值为0。
     * 大于0表示升高音高。
     * 小于0表示降低音高。
     * @example `0`
     */
    "PitchRate"?: string;
}
