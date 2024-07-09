export interface ModifySAGAdminPasswordRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-tq3sazs17smldn****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * 智能接入网关设备新的登录密码。
     * 密码格式要求：密码长度为8~30个字符，可包含大小写字母、数字和下划线（_）。
     * > 示例值中使用星号（\*）以掩盖真实密码，不表示密码支持使用星号（\*），输入密码时请以密码格式要求为准。
     * @example `********`
     */
    "Password": string;
}
