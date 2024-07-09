export interface ModifyOfficeSiteAttributeRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-882398****`
     */
    "OfficeSiteId": string;
    /**
     * 连接云电脑时允许使用的接入方式。
     * > VPC连接方式依赖于阿里云私网连接PrivateLink服务，该服务不收取费用。该参数设置为`VPC`或者`Any`时，系统将自动为您开通私网连接服务。
     * @example `INTERNET`
     */
    "DesktopAccessType"?: string;
    /**
     * 办公网络名称。长度为2~255个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空。
     * @example `test`
     */
    "OfficeSiteName"?: string;
    /**
     * 仅适用于便捷账号办公网络，表示登录时是否需要二次验证。如果开启了登录二次验证，则便捷用户登录客户端时，系统将检测登录账号是否有安全风险。如果有风险，系统将发送验证码到该账号关联的邮箱，便捷用户使用验证码验证通过后才能登录客户端。
     * @example `false`
     */
    "NeedVerifyLoginRisk"?: boolean;
    /**
     * 仅适用于便捷账号办公网络，表示是否开启设备校验。对于AD办公网络，该参数值为空。
     * @example `false`
     */
    "NeedVerifyZeroDevice"?: boolean;
    /**
     * 是否为使用云电脑的用户赋予本地管理员权限。
     * @example `false`
     */
    "EnableAdminAccess"?: boolean;
}
