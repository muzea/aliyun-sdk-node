export interface AddPermissionPolicyToAccessConfigurationRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 访问配置ID。
     * @example `ac-00jhtfl8thteu6uj****`
     */
    "AccessConfigurationId": string;
    /**
     * 权限策略类型。取值：
     * - System：系统策略。复用RAM的系统策略。
     * - Inline：内置策略。按照RAM权限策略语法和结构编写的自定义策略。
     * @example `System`
     */
    "PermissionPolicyType": string;
    /**
     * 权限策略名称。具体如下：
     * - 当`PermissionPolicyType`为`System`时，该参数为系统策略名称。由于复用的是RAM系统策略，请在RAM中获取系统策略名称。
     * - 当`PermissionPolicyType`为`Inline`时，该参数为内置策略名称。您可以自定义该参数。长度最大为32个字符。
     * @example `AliyunECSFullAccess`
     */
    "PermissionPolicyName": string;
    /**
     * 内置策略内容。
     * 长度：最大4096个字符。
     * 当`PermissionPolicyType`为`Inline`时，该参数必须配置。关于权限策略的语法和结构，请参见[权限策略语法和结构](~~93739~~)。
     * @example `{"Statement": [{"Action": "*","Effect": "Allow","Resource": "*"}],"Version": "1"}`
     */
    "InlinePolicyDocument"?: string;
}
