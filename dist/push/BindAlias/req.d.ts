export interface BindAliasRequest {
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
     * 需要绑定的别名。
     * 一次最多只能绑定10个，多个alias用逗号分隔，alias最长128个字节（中文算三个字节），一个设备最多绑定128个别名，一个别名最多允许绑定128个设备。
     * @example `test_alias`
     */
    "AliasName": string;
}
