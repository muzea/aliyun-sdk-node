export interface CreateSoundCodeRequest {
    /**
     * 声码持续时长，单位为秒，取值范围为1～30。
     * @example `2`
     */
    "Duration": number;
    /**
     * 声码营销内容，例如商品的详情地址等，长度限制100个字符。
     * @example `www.taobao.com`
     */
    "SoundCodeContent": string;
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
     * 声码名称，长度为1~64个字符，一个汉字占两个字符，实例下保证唯一。
     * @example `TEST123`
     */
    "Name"?: string;
    /**
     * 排程开放类型。
     * - 内部（默认）：取值为**INNER**，只允许排程所在实例下的设备请求声码解码。
     * - 公开：取值为**OPEN**，可以发送邮件的方式配置白名单，允许跨实例的设备请求声码解码，跨实例解码的用量计算在声码所在的实例下。
     * @example `OPEN`
     */
    "OpenType"?: string;
}
