export interface DeleteSpeechRequest {
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
     * 需要删除的语料ID，您可以在**语料配置**控制台获取语料ID，或者调用[CreateSpeech](~~217571~~)，成功后返回的**Data**字段为语料ID。
     * N为整数，取值范围：1~20，表示每次最多删除20条。
     * @example `4de2c367****8c585e5992**`
     */
    "SpeechCodeList": string[];
}
