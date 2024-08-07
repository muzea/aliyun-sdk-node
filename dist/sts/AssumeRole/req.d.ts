export interface AssumeRoleRequest {
    /**
     * Token有效期。单位：秒。
     * Token有效期最小值为900秒，最大值为要扮演角色的`MaxSessionDuration`时间。默认值为3600秒。
     * 您可以通过CreateRole或UpdateRole设置角色最大会话时间`MaxSessionDuration`。更多信息，请参见[CreateRole](~~28710~~)或[UpdateRole](~~28712~~)。
     * @example `3600`
     */
    "DurationSeconds"?: number;
    /**
     * 为STS Token额外添加的一个权限策略，进一步限制STS Token的权限。具体如下：
     * - 如果指定该权限策略，则STS Token最终的权限策略取RAM角色权限策略与该权限策略的交集。
     * - 如果不指定该权限策略，则STS Token最终的权限策略取RAM角色的权限策略。
     * 长度为1~2048个字符。
     * 关于权限策略元素和示例，请参见[权限策略基本元素](~~93738~~)和[权限策略示例库](~~210969~~)。
     * @example `{"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}`
     */
    "Policy"?: string;
    /**
     * 要扮演的RAM角色ARN。
     * 该角色是可信实体为阿里云账号类型的RAM角色。更多信息，请参见[创建可信实体为阿里云账号的RAM角色](~~93691~~)或[CreateRole](~~28710~~)。
     * 格式：`acs:ram::<account_id>:role/<role_name>` 。
     * 您可以通过RAM控制台或API查看角色ARN。具体如下：
     * - RAM控制台：请参见[查看RAM角色的ARN](~~39744~~)。
     * - API：请参见[ListRoles](~~28713~~)或[GetRole](~~28711~~)。
     * @example `acs:ram::123456789012****:role/adminrole`
     */
    "RoleArn": string;
    /**
     * 角色会话名称。
     * 该参数为用户自定义参数。通常设置为调用该API的用户身份，例如：用户名。在操作审计日志中，即使是同一个RAM角色执行的操作，也可以根据不同的`RoleSessionName`来区分实际操作者，以实现用户级别的访问审计。
     * 长度为2~64个字符，可包含英文字母、数字和特殊字符`.@-_`。
     * @example `alice`
     */
    "RoleSessionName": string;
    /**
     * 角色外部ID。
     * 该参数为外部提供的用于表示角色的参数信息，主要功能是防止混淆代理人问题。更多信息，请参见[使用ExternalId防止混淆代理人问题](~~2361741~~)。
     * 长度为2~1224个字符，可包含英文字母、数字和特殊字符`=,.@:/-_`。正则为：`[\w+=,.@:\/-]*`。
     * @example `abcd1234`
     */
    "ExternalId"?: string;
}
