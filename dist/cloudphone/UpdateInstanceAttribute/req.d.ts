export interface UpdateInstanceAttributeRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云手机实例ID。
     * @example `cp-bp67acfmxazb4p***`
     */
    "InstanceId": string;
    /**
     * 云手机实例名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `myInstanceName`
     */
    "InstanceName"?: string;
    /**
     * 云手机密钥名称。为提高实例安全性，强烈建议您使用密钥对的连接方式。
     * @example `myKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 云手机实例描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `myDescription`
     */
    "Description"?: string;
    /**
     * 云手机VNC密码。
     * 密码长度必须是六位字符，必须且仅能包含大写、小写英文字母及阿拉伯数字三种字符。
     * @example `Cp1234`
     */
    "VncPassword"?: string;
    /**
     * 云手机分辨率，如1920*1080。
     * @example `1920*1080`
     */
    "Resolution"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。N的取值范围为1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围为1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
