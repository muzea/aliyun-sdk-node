export interface ResetSmartAccessGatewayClientUserPasswordRequest {
    /**
     * 智能接入网关App实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关App实例ID。
     * @example `sag-kzo5dvms3dqii3****`
     */
    "SmartAGId": string;
    /**
     * 待重置密码的客户端的用户名。
     * @example `username`
     */
    "UserName": string;
    /**
     * 客户端的新密码。
     * - 如果您不输入本参数，系统将随机生成一个新密码。
     * - 如果您输入本参数，则表示您自定义新密码。
     *
     *         密码长度为8~32个字符，必须以大小写字母或数字开头，可以包含下划线（_） 、at（@）和短划线（-）。
     * 系统重置密码后，会通过邮件向您发送新的密码。
     * @example `Password****`
     */
    "Password"?: string;
}
