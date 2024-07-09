export interface CreatePictureSearchAppRequest {
    /**
     * 以图搜图应用实例的名称。
     * 支持中文汉字、英文大小写字母、数字、下划线（_）和短划线（-），长度不超过64个字符，一个汉字算2个字符。
     * @example `以图搜图`
     */
    "Name": string;
    /**
     * 以图搜图应用实例的描述信息。
     * 支持中文汉字、英文大小写字母、数字、下划线（_）和短划线（-），长度不超过1024个字符，一个汉字算2个字符。
     * @example `以图搜图Demo`
     */
    "Desc": string;
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
}
