export interface UpdateSmartAccessGatewayAdminPasswordRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-sv487b7lno6go5****`
     */
    "SagInsId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sagf4ea****`
     */
    "SagSn": string;
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关设备新的登录密码。
     * 密码格式要求：长度为8~30个字符，可包含大小写字母、数字和下划线（_）。
     * > 示例值中使用星号（*）以掩盖真实密码，不表示密码支持使用星号，输入密码时请以密码格式要求为准。
     * @example `1234****`
     */
    "Password": string;
    /**
     * 是否只查询跨账号所属的智能接入网关实例。取值：
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "CrossAccount"?: boolean;
    /**
     * 智能接入网关实例所属的阿里云账号（主账号）ID。
     * @example `147304382796****`
     */
    "ResourceUid"?: string;
}
