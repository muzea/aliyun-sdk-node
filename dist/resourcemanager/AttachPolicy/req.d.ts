export interface AttachPolicyRequest {
    /**
     * 授权范围。取值：
     * - 资源组ID：权限在指定的资源组内生效。
     * - 阿里云账号ID：被授权对象所属的阿里云账号ID，权限在该阿里云账号内生效。
     * @example `rg-9gLOoK****`
     */
    "ResourceGroupId": string;
    /**
     * 权限策略类型。取值：
     * - Custom：自定义权限策略。
     * - System：系统权限策略。
     * @example `System`
     */
    "PolicyType": string;
    /**
     * 权限策略名称。
     * 长度为1~128个字符，可包含英文字母、数字和短划线（-）。
     * @example `AdministratorAccess`
     */
    "PolicyName": string;
    /**
     * 被授权对象类型。取值：
     * - IMSUser：RAM用户。
     * - IMSGroup：RAM用户组。
     * - ServiceRole：RAM角色。
     * @example `IMSUser`
     */
    "PrincipalType": string;
    /**
     * 被授权对象的名称。具体如下：
     * - RAM用户：格式为<UserName>@<AccountAlias>.onaliyun.com，其中<UserName>为RAM用户名称，<AccountAlias>为账号别名。
     * - RAM用户组：格式为<GroupName>@group.<AccountAlias>.onaliyun.com，其中<GroupName>为RAM用户组名称，<AccountAlias>为账号别名。
     * - RAM角色：格式为<RoleName>@role.<AccountAlias>.onaliyunservice.com，其中<RoleName>为RAM角色名称，<AccountAlias>为账号别名。
     * > 账号别名是默认域名中的一部分，请调用[GetDefaultDomain](~~186720~~)获取账号别名。
     * @example `alice@demo.onaliyun.com`
     */
    "PrincipalName": string;
}
