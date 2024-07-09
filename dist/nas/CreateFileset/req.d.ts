export interface CreateFilesetRequest {
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 待创建的Fileset的绝对路径。
     * - 指定目录的父目录必须是文件系统中已存在的目录。
     * - 长度为2~1024个字符。
     * - 指定目录必须以正斜线（/）开头和结尾。
     * @example `/test/`
     */
    "FileSystemPath": string;
    /**
     * 是否对此次创建请求执行预检。
     * 预检操作会帮助您检查参数有效性、校验库存等，并不会实际创建实例，也不会产生费用。
     * 取值：
     * - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和NAS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回200 HttpCode，但FsetId为空。
     * - false（默认）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteFileset](~~2402263~~)）释放实例。
     * -   true：开启实例释放保护。
     * -   false（默认）：关闭实例释放保护。
     * > 该属性只能限制手动释放操作，对系统释放操作不生效。
     * @example `false`
     */
    "DeletionProtection"?: boolean;
    /**
     * Fileset的描述信息。
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以http://和https://开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `内部事务目录`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性，从您的客户端生成一个参数值，确保不同的请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * > 若用户未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
