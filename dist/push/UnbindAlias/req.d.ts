export interface UnbindAliasRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 设备在推送的唯一标识，32位，数字和小写字母组合。
     * @example `e2ba19de97604f55b16557673****`
     */
    "DeviceId": string;
    /**
     * 需要绑定的alias。
     * Alias支持128个字节（一个中文字符算3个字节），当“UnbindAll”为”false”时该字段必填，一次最多解绑10个，多个alias用逗号分隔。
     * @example `test_alias`
     */
    "AliasName"?: string;
    /**
     * 是否全部解绑，默认为”false”。
     * 如果值为”true”，则解绑一个设备当前绑定的所有别名；如果值为”false”，则解绑”AliasName”指定的别名。
     * @example `false`
     */
    "UnbindAll"?: boolean;
}
