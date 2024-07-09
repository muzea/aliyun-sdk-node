export interface ReinitInstanceRequest {
    /**
     * 实例ID。
     * @example `i-5vn4n3y4laeb*******ltlvzi`
     */
    "InstanceId": string;
    /**
     * 镜像文件ID，重置实例时选择的镜像资源。
     * @example `m-5wn1dh*******b48f440ntvad`
     */
    "ImageId": string;
    /**
     * 实例的密码。
     * 长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。可以设置以下特殊符号：```()`~!@#$%^&*-_+={}[]:;'<>,.?/```
     * @example `Example123@`
     */
    "Password"?: string;
}
