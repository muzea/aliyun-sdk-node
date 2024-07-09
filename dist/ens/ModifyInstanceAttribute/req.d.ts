export interface ModifyInstanceAttributeRequest {
    /**
     * 要修改实例的ID，仅支持修改单个。
     * @example `i-instanc****`
     */
    "InstanceId": string;
    /**
     * 实例的密码。
     * @example `yourPassword`
     */
    "Password"?: string;
    /**
     * 实例的名称。
     * 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、冒号（:）、下划线（_）或者连接号（-）。
     * @example `i-instanceidname`
     */
    "InstanceName"?: string;
    /**
     * 云服务器的主机名。 长度为2-64个字符，允许使用半角句号（.）分隔字符成多段，每段允许使用大小写字母、数字或连字符（-），但不能连续使用半角句号（.）或短划线（-）。不能以半角句号（.）或短划线（-）开头或结尾。
     * @example `testHostName`
     */
    "HostName"?: string;
    /**
     * 实例自定义数据，需要以Base64编码。
     * 编码前，原始数据不能超过16 KB。建议不要明文传入敏感信息，例如密码和私钥等。如果必须传入敏感信息，建议您加密后再以Base64编码传入，在实例内部以同样的方式解密。
     * @example `/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgK****`
     */
    "UserData"?: string;
}
