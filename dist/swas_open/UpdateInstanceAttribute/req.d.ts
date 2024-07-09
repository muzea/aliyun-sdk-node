export interface UpdateInstanceAttributeRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 指定的轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 新的服务器密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * ```
     * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
     * ```
     * 其中，Windows实例不能以正斜线（/）为密码首字符。
     * > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。
     * @example `Test123!`
     */
    "Password"?: string;
    /**
     * 服务器名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者短划线（-）。
     * @example `test-InstanceName`
     */
    "InstanceName"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
