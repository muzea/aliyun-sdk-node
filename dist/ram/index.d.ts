interface RAM {
    /**
    * 调用SetSecurityPreference接口设置全局安全首选项。
    */ SetSecurityPreference(query: {
        "RegionId"?: string;
        /**
        * 是否允许在用户在登录时保存多因素认证设备验证票据，目前票据有效期是七天。
        * @example `true`
        */ "EnableSaveMFATicket"?: boolean;
        /**
        * 是否允许用户修改自己的密码。
        * @example `true`
        */ "AllowUserToChangePassword"?: boolean;
        /**
        * 是否允许用户管理自己的访问密钥。
        * @example `false`
        */ "AllowUserToManageAccessKeys"?: boolean;
        /**
        * 是否允许用户管理自己的公钥。
        * @example `false`
        */ "AllowUserToManagePublicKeys"?: boolean;
        /**
        * 是否允许用户管理自己绑定或解绑多因素认证设备。
        * @example `true`
        */ "AllowUserToManageMFADevices"?: boolean;
        /**
        * 用户登录有效期，单位：小时。
        * @example `6`
        */ "LoginSessionDuration"?: number;
        /**
        * 登录掩码，默认空字符串，不限制登录IP。
        * @example `10.0.0.0/8`
        */ "LoginNetworkMasks"?: string;
    }): Promise<{
        "RequestId": string;
        "SecurityPreference": {
            "LoginProfilePreference": {
                "EnableSaveMFATicket": boolean;
                "AllowUserToChangePassword": boolean;
                "LoginNetworkMasks": string;
                "LoginSessionDuration": number;
            };
            "AccessKeyPreference": {
                "AllowUserToManageAccessKeys": boolean;
            };
            "MFAPreference": {
                "AllowUserToManageMFADevices": boolean;
            };
            "PublicKeyPreference": {
                "AllowUserToManagePublicKeys": boolean;
            };
        };
    }>;
    /**
    * 调用DetachPolicyFromRole接口为角色撤销指定的权限。
    */ DetachPolicyFromRole(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值为：`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 指定角色名。
        * @example `OSSAdminRole`
        */ "RoleName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeletePolicy接口删除指定的权限策略。
    */ DeletePolicy(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ListPoliciesForUser接口列出指定用户的权限策略。
    */ ListPoliciesForUser(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
        "Policies": {
            "Policy": {
                "PolicyName": string;
                "PolicyType": string;
                "Description": string;
                "DefaultVersion": string;
                "AttachDate": string;
            }[];
        };
    }>;
    /**
    * 调用ListPoliciesForRole接口列出角色的权限策略。
    */ ListPoliciesForRole(query: {
        "RegionId"?: string;
        /**
        * 指定角色名。
        * @example `AdminRole`
        */ "RoleName"?: string;
    }): Promise<{
        "RequestId": string;
        "Policies": {
            "Policy": {
                "PolicyName": string;
                "PolicyType": string;
                "Description": string;
                "DefaultVersion": string;
                "AttachDate": string;
            }[];
        };
    }>;
    /**
    * 调用GetAccountAlias接口查看云账号别名。
    */ GetAccountAlias(query: {
        "RegionId"?: string;
    }): Promise<{
        "RequestId": string;
        "AccountAlias": string;
    }>;
    /**
    * 调用CreatePolicy接口创建一个权限策略。
    */ CreatePolicy(query: {
        "RegionId"?: string;
        /**
        * 权限策略名称, 最多包含128个字符。
        * 格式：`^[a-zA-Z0-9\-]+$`。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 权限策略内容，最大长度2048字节。
        * @example `{"Statement":[{"Action":["oss:*"],"Effect":"Allow","Resource":["acs:oss:*:*:*"]}],"Version":"1"}`
        */ "PolicyDocument"?: string;
        /**
        * 描述，最大长度1024字字符。
        * @example `OSS管理员权限`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
        "Policy": {
            "PolicyName": string;
            "PolicyType": string;
            "Description": string;
            "DefaultVersion": string;
            "CreateDate": string;
        };
    }>;
    /**
    * 调用DeleteRole接口删除指定的角色。
    */ DeleteRole(query: {
        "RegionId"?: string;
        /**
        * 指定角色名称。
        * @example `ECSAdmin`
        */ "RoleName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreatePolicyVersion接口为权限策略创建新的版本。
    */ CreatePolicyVersion(query: {
        "RegionId"?: string;
        /**
        * 权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 权限策略内容，最大长度2048字节。
        * @example `{"Statement":[{"Action":["oss:*"],"Effect":"Allow","Resource":["acs:oss:*:*:*"]}],"Version":"1"}`
        */ "PolicyDocument"?: string;
        /**
        * 是否设置为默认权限策略，默认值为`false`。
        * @example `false`
        */ "SetAsDefault"?: boolean;
        /**
        * 权限策略版本自动化轮转机制，可以删除历史权限策略版本。
        * 目前包含：
        * - `None`: 关闭轮转机制。
        * - `DeleteOldestNonDefaultVersionWhenLimitExceeded`：当权限策略版本数量超限时，删除最早且非活跃的版本。
        * 默认值：`None`
        * @example `None`
        */ "RotateStrategy"?: string;
    }): Promise<{
        "RequestId": string;
        "PolicyVersion": {
            "VersionId": string;
            "IsDefaultVersion": boolean;
            "CreateDate": string;
            "PolicyDocument": string;
        };
    }>;
    /**
    * 调用DetachPolicyFromGroup接口为用户组撤销指定的权限。
    */ DetachPolicyFromGroup(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值为：`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 指定权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 指定用户组名称。
        * @example `dev`
        */ "GroupName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetDefaultPolicyVersion接口设置权限策略默认版本。
    */ SetDefaultPolicyVersion(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 新默认版本的ID。
        * @example `v2`
        */ "VersionId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AttachPolicyToGroup接口为指定用户组添加权限。
    */ AttachPolicyToGroup(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值为：`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 指定权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 指定用户组名称。
        * @example `dev`
        */ "GroupName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ListUsersForGroup接口列出指定用户组所包含的RAM用户。
    */ ListUsersForGroup(query: {
        "RegionId"?: string;
        /**
        * 用户组名称。
        * @example `Dev-Team`
        */ "GroupName"?: string;
        /**
        * 当请求的返回结果被截断时，可以使用`Marker`获取从当前截断位置之后的内容。
        * @example `EXAMPLE`
        */ "Marker"?: string;
        /**
        * 指定返回结果的条数。当返回结果达到`MaxItems`限制被截断时，返回参数`IsTruncated`将等于`true`。
        * 取值范围：1 ~ 1000，默认值：100。
        * @example `100`
        */ "MaxItems"?: number;
    }): Promise<{
        "RequestId": string;
        "Users": {
            "User": {
                "UserName": string;
                "DisplayName": string;
                "JoinDate": string;
            }[];
        };
    }>;
    /**
    * 调用ChangePassword接口修改RAM用户密码。
    */ ChangePassword(query: {
        "RegionId"?: string;
        /**
        * 旧密码。
        * @example `12****`
        */ "OldPassword"?: string;
        /**
        * 指定密码，密码必须符合密码强度要求。
        * 关于密码强度设置接口，请参考 [SetPasswordPolicy](~~28739~~)。
        * @example `aw$2****`
        */ "NewPassword"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateVirtualMFADevice接口创建多因素认证设备。
    */ CreateVirtualMFADevice(query: {
        "RegionId"?: string;
        /**
        * 指定设备名称, 最大长度64个字符。
        * 限制：`[a-zA-Z0-9-]*`。
        * @example `device001`
        */ "VirtualMFADeviceName"?: string;
    }): Promise<{
        "RequestId": string;
        "VirtualMFADevice": {
            "SerialNumber": string;
            "Base32StringSeed": string;
            "QRCodePNG": string;
        };
    }>;
    /**
    * 调用AttachPolicyToRole接口为指定角色添加权限。
    */ AttachPolicyToRole(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值为：`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 指定权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 指定角色名。
        * @example `OSSAdminRole`
        */ "RoleName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DetachPolicyFromUser接口为用户撤销指定的权限。
    */ DetachPolicyFromUser(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值为：`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 指定权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ListPolicyVersions接口列出权限策略版本。
    */ ListPolicyVersions(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值为：`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
    }): Promise<{
        "RequestId": string;
        "PolicyVersions": {
            "PolicyVersion": {
                "VersionId": string;
                "IsDefaultVersion": boolean;
                "CreateDate": string;
                "PolicyDocument": string;
            }[];
        };
    }>;
    /**
    * 调用GetGroup接口获取用户组信息。
    */ GetGroup(query: {
        "RegionId"?: string;
        /**
        * 用户组名称。
        * 格式：`^[a-zA-Z0-9\-]+$`。
        * @example `Dev-Team`
        */ "GroupName"?: string;
    }): Promise<{
        "RequestId": string;
        "Group": {
            "GroupName": string;
            "Comments": string;
            "CreateDate": string;
            "UpdateDate": string;
        };
    }>;
    /**
    * 调用ListEntitiesForPolicy接口列出引用权限策略的实体。
    */ ListEntitiesForPolicy(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值为：`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
    }): Promise<{
        "RequestId": string;
        "Groups": {
            "Group": {
                "GroupName": string;
                "Comments": string;
                "AttachDate": string;
            }[];
        };
        "Users": {
            "User": {
                "UserId": string;
                "UserName": string;
                "DisplayName": string;
                "AttachDate": string;
            }[];
        };
        "Roles": {
            "Role": {
                "RoleId": string;
                "RoleName": string;
                "Arn": string;
                "Description": string;
                "AttachDate": string;
            }[];
        };
    }>;
    /**
    * 调用ListGroups接口列出所有的用户组。
    */ ListGroups(query: {
        "RegionId"?: string;
        /**
        * 当请求的返回结果被截断时，可以使用`Marker`获取从当前截断位置之后的内容。
        * @example `EXAMPLE`
        */ "Marker"?: string;
        /**
        * 指定返回结果的条数，当返回结果达到`MaxItems`限制被截断时，返回参数`IsTruncated`将等于`true`。
        * 取值范围：1 ~ 1000，默认值：100。
        * @example `100`
        */ "MaxItems"?: number;
    }): Promise<{
        "RequestId": string;
        "IsTruncated": boolean;
        "Marker": string;
        "Groups": {
            "Group": {
                "GroupName": string;
                "Comments": string;
                "CreateDate": string;
                "UpdateDate": string;
            }[];
        };
    }>;
    /**
    * 调用GetUser接口获取用户的详细信息。
    */ GetUser(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * 格式：`^[a-zA-Z0-9\.@\-_]+$`。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
        "User": {
            "UserId": string;
            "UserName": string;
            "DisplayName": string;
            "MobilePhone": string;
            "Email": string;
            "Comments": string;
            "CreateDate": string;
            "UpdateDate": string;
            "LastLoginDate": string;
        };
    }>;
    /**
    * 调用CreateGroup接口创建用户组。
    */ CreateGroup(query: {
        "RegionId"?: string;
        /**
        * 用户组名称，最大长度64个字符。
        * 格式：`^[a-zA-Z0-9\-]+$`。
        * @example `Dev-Team`
        */ "GroupName"?: string;
        /**
        * 备注信息，最大长度128个字符。
        * @example `开发团队`
        */ "Comments"?: string;
    }): Promise<{
        "RequestId": string;
        "Group": {
            "GroupName": string;
            "Comments": string;
            "CreateDate": string;
        };
    }>;
    /**
    * 调用AttachPolicyToUser接口为指定用户添加权限。
    */ AttachPolicyToUser(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值为：`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 指定权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用GetPolicyVersion接口获取某个权限策略的版本。
    */ GetPolicyVersion(query: {
        "RegionId"?: string;
        /**
        * 指定权限策略的类型, 取值`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 指定目标版本的ID。
        * @example `v3`
        */ "VersionId"?: string;
    }): Promise<{
        "RequestId": string;
        "PolicyVersion": {
            "VersionId": string;
            "IsDefaultVersion": boolean;
            "CreateDate": string;
            "PolicyDocument": string;
        };
    }>;
    /**
    * 调用SetPasswordPolicy接口设置RAM用户密码强度等策略信息。
    */ SetPasswordPolicy(query: {
        "RegionId"?: string;
        /**
        * 最小密码长度。
        * @example `12`
        */ "MinimumPasswordLength"?: number;
        /**
        * 必须含有小写字母。
        * @example `true`
        */ "RequireLowercaseCharacters"?: boolean;
        /**
        * 必须含有大写字母。
        * @example `true`
        */ "RequireUppercaseCharacters"?: boolean;
        /**
        * 必须含有数字。
        * @example `true`
        */ "RequireNumbers"?: boolean;
        /**
        * 必须含有特殊字符。
        * @example `true`
        */ "RequireSymbols"?: boolean;
        /**
        * 密码是否过期。
        * 取值为`true`或`false`，如果未指定此参数的值，系统默认为`false`。
        * - 如果取值为`true`，此时必须由主账号重置密码后，RAM用户才能正常登录。
        * - 如果取值为`false`，此时RAM用户可以在密码过期后自行更改密码，并继续以用户身份登录。
        * @example `false`
        */ "HardExpiry"?: boolean;
        /**
        * 密码有效期，单位是天（重置密码将重置密码过期时间）。0表示不启用密码过期策略，默认不启用。
        * @example `0`
        */ "MaxPasswordAge"?: number;
        /**
        * 禁止使用前N次密码。0表示不启用历史密码检查策略，默认不启用。
        * @example `0`
        */ "PasswordReusePrevention"?: number;
        /**
        * 一小时内使用错误密码尝试登录最大次数（重置密码可清除尝试登录计数）。
        * @example `5`
        */ "MaxLoginAttemps"?: number;
    }): Promise<{
        "RequestId": string;
        "PasswordPolicy": {
            "HardExpiry": boolean;
            "MaxLoginAttemps": number;
            "MaxPasswordAge": number;
            "PasswordReusePrevention": number;
            "MinimumPasswordLength": number;
            "RequireLowercaseCharacters": boolean;
            "RequireUppercaseCharacters": boolean;
            "RequireNumbers": boolean;
            "RequireSymbols": boolean;
        };
    }>;
    /**
    * 调用CreateLoginProfile接口为一个RAM用户启用Web控制台登录。
    */ CreateLoginProfile(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
        /**
        * 指定密码，密码必须符合密码强度要求。关于密码强度设置接口，请参考[GetPasswordPolicy](~~28740~~)。
        * @example `mypassword`
        */ "Password"?: string;
        /**
        * 指定用户在登录时是否需要修改密码。默认为：`false`。
        * @example `false`
        */ "PasswordResetRequired"?: boolean;
        /**
        * 指定用户在下次登录时是否必须绑定多因素认证器。默认为：`false`。
        * @example `false`
        */ "MFABindRequired"?: boolean;
    }): Promise<{
        "RequestId": string;
        "LoginProfile": {
            "UserName": string;
            "PasswordResetRequired": boolean;
            "MFABindRequired": boolean;
            "CreateDate": string;
        };
    }>;
    /**
    * 调用ListPoliciesForGroup接口列出用户组的权限策略。
    */ ListPoliciesForGroup(query: {
        "RegionId"?: string;
        /**
        * 指定用户组名称。
        * @example `dev`
        */ "GroupName"?: string;
    }): Promise<{
        "RequestId": string;
        "Policies": {
            "Policy": {
                "PolicyName": string;
                "PolicyType": string;
                "Description": string;
                "DefaultVersion": string;
                "AttachDate": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteVirtualMFADevice接口删除多因素认证设备。
    */ DeleteVirtualMFADevice(query: {
        "RegionId"?: string;
        /**
        * 指定多因素认证设备的序列号。
        * @example `acs:ram::123456789012****:mfa/device002`
        */ "SerialNumber"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeletePolicyVersion接口删除指定的权限策略的某个版本。
    */ DeletePolicyVersion(query: {
        "RegionId"?: string;
        /**
        * 权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
        /**
        * 指定目标版本的ID。
        * @example `v3`
        */ "VersionId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ClearAccountAlias接口清除云账号别名。
    */ ClearAccountAlias(query: {
        "RegionId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ListAccessKeys接口列出指定用户的访问密钥。
    */ ListAccessKeys(query: {
        "RegionId"?: string;
        /**
        * 指定用户，RAM用户访问时不提供此参数则表示列出自己的访问密钥。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
        "AccessKeys": {
            "AccessKey": {
                "AccessKeyId": string;
                "Status": string;
                "CreateDate": string;
            }[];
        };
    }>;
    /**
    * 调用GetPasswordPolicy接口获取RAM用户密码强度等策略信息。
    */ GetPasswordPolicy(query: {
        "RegionId"?: string;
    }): Promise<{
        "RequestId": string;
        "PasswordPolicy": {
            "HardExpiry": boolean;
            "MaxLoginAttemps": number;
            "MaxPasswordAge": number;
            "PasswordReusePrevention": number;
            "MinimumPasswordLength": number;
            "RequireLowercaseCharacters": boolean;
            "RequireUppercaseCharacters": boolean;
            "RequireNumbers": boolean;
            "RequireSymbols": boolean;
        };
    }>;
    /**
    * 调用ListRoles接口列出角色。
    */ ListRoles(query: {
        "RegionId"?: string;
        /**
        * 当请求的返回结果被截断时，可以使用`Marker`获取从当前截断位置之后的内容。
        * @example `EXAMPLE`
        */ "Marker"?: string;
        /**
        * 指定返回结果的条数。当返回结果达到`MaxItems`限制被截断时，返回参数`IsTruncated`将等于`true`。
        * 取值范围：1 ~ 1000，默认值：100。
        * @example `100`
        */ "MaxItems"?: number;
    }): Promise<{
        "RequestId": string;
        "IsTruncated": boolean;
        "Marker": string;
        "Roles": {
            "Role": {
                "RoleId": string;
                "RoleName": string;
                "Arn": string;
                "Description": string;
                "CreateDate": string;
                "UpdateDate": string;
            }[];
        };
    }>;
    /**
    * 调用UpdateAccessKey接口更新RAM用户访问密钥的状态。
    */ UpdateAccessKey(query: {
        "RegionId"?: string;
        /**
        * 指定要更新的`AccessKeyId`。
        * @example `0wNEpMMlzy7s****`
        */ "UserAccessKeyId"?: string;
        /**
        * AccessKey的状态，取值为：`Active`或`Inactive`。
        * @example `Inactive`
        */ "Status"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用GetPolicy接口获取指定的权限策略信息。
    */ GetPolicy(query: {
        "RegionId"?: string;
        /**
        * 指定Policy的类型, 取值`System`或`Custom`。
        * @example `Custom`
        */ "PolicyType"?: string;
        /**
        * 指定权限策略名称。
        * @example `OSS-Administrator`
        */ "PolicyName"?: string;
    }): Promise<{
        "RequestId": string;
        "Policy": {
            "PolicyName": string;
            "PolicyType": string;
            "Description": string;
            "DefaultVersion": string;
            "CreateDate": string;
            "UpdateDate": string;
            "AttachmentCount": number;
        };
    }>;
    /**
    * 调用CreateRole接口创建角色。
    */ CreateRole(query: {
        "RegionId"?: string;
        /**
        * 指定角色名，最多包含64个字符。
        * 格式：`^[a-zA-Z0-9\.@\-]+$`。
        * @example `ECSAdmin`
        */ "RoleName"?: string;
        /**
        * 一个策略文本。指定允许扮演该角色的一个或多个主体，这个主体可以是阿里云账号、阿里云服务或身份提供商。
        * >RAM用户不能扮演可信实体为阿里云服务的RAM角色。
        * @example `{"Statement":[{"Action":"sts:AssumeRole","Effect":"Allow","Principal":{"RAM":"acs:ram::123456789012****:root"}}],"Version":"1"}`
        */ "AssumeRolePolicyDocument"?: string;
        /**
        * 角色描述，最大长度为1024个字符。
        * @example `ECS管理角色`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
        "Role": {
            "RoleId": string;
            "RoleName": string;
            "Arn": string;
            "Description": string;
            "AssumeRolePolicyDocument": string;
            "CreateDate": string;
        };
    }>;
    /**
    * 调用GetRole接口获取角色信息。
    */ GetRole(query: {
        "RegionId"?: string;
        /**
        * 指定角色名，最多包含64个字符。
        * 格式：`^[a-zA-Z0-9\.@\-]+$`。
        * @example `ECSAdmin`
        */ "RoleName"?: string;
    }): Promise<{
        "RequestId": string;
        "Role": {
            "RoleId": string;
            "RoleName": string;
            "Arn": string;
            "Description": string;
            "AssumeRolePolicyDocument": string;
            "CreateDate": string;
            "UpdateDate": string;
        };
    }>;
    /**
    * 调用ListGroupsForUser接口列出指定RAM用户所加入的用户组信息。
    */ ListGroupsForUser(query: {
        "RegionId"?: string;
        /**
        * 用户名称。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
        "Groups": {
            "Group": {
                "GroupName": string;
                "Comments": string;
                "JoinDate": string;
            }[];
        };
    }>;
    /**
    * 调用UpdateGroup接口更新用户组信息。
    */ UpdateGroup(query: {
        "RegionId"?: string;
        /**
        * 指定用户组名称。
        * 格式：`^[a-zA-Z0-9\-]+$`。
        * @example `Dev-Team`
        */ "GroupName"?: string;
        /**
        * 新的用户组名称。
        * 格式：`^[a-zA-Z0-9\-]+$`。
        * @example `NewDev-Team`
        */ "NewGroupName"?: string;
        /**
        * 新的备注信息，最大长度128个字符。
        * @example `开发团队`
        */ "NewComments"?: string;
    }): Promise<{
        "RequestId": string;
        "Group": {
            "GroupName": string;
            "Comments": string;
            "CreateDate": string;
            "UpdateDate": string;
        };
    }>;
    /**
    * 调用AddUserToGroup接口将RAM用户添加到指定的用户组。
    */ AddUserToGroup(query: {
        "RegionId"?: string;
        /**
        * 用户名称。
        * @example `zhangq****`
        */ "UserName"?: string;
        /**
        * 用户组名称。
        * @example `Dev-Team`
        */ "GroupName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateAccessKey接口为RAM用户创建访问密钥。
    */ CreateAccessKey(query: {
        "RegionId"?: string;
        /**
        * 指定用户名，RAM用户调用此接口时，默认为自己创建访问密钥。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
        "AccessKey": {
            "AccessKeyId": string;
            "AccessKeySecret": string;
            "Status": string;
            "CreateDate": string;
        };
    }>;
    /**
    * 调用RemoveUserFromGroup接口将RAM用户从用户组中移除。
    */ RemoveUserFromGroup(query: {
        "RegionId"?: string;
        /**
        * RAM用户名称。
        * @example `zhangq****`
        */ "UserName"?: string;
        /**
        * 用户组名称。
        * @example `Dev-Team`
        */ "GroupName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UpdateRole接口更新角色信息。
    */ UpdateRole(query: {
        "RegionId"?: string;
        /**
        * 指定角色名，最多包含64个字符。
        * 格式：`^[a-zA-Z0-9\.@\-]+$`。
        * @example `ECSAdmin`
        */ "RoleName"?: string;
        /**
        * 指定可以扮演此角色的身份。
        * @example `{ "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012345678:root" } } ], "Version": "1" }`
        */ "NewAssumeRolePolicyDocument"?: string;
    }): Promise<{
        "RequestId": string;
        "Role": {
            "RoleId": string;
            "RoleName": string;
            "Arn": string;
            "Description": string;
            "AssumeRolePolicyDocument": string;
            "CreateDate": string;
            "UpdateDate": string;
        };
    }>;
    /**
    * 调用GetUserMFAInfo接口获取指定RAM用户的多因素认证设备信息。
    */ GetUserMFAInfo(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
        "MFADevice": {
            "SerialNumber": string;
        };
    }>;
    /**
    * 调用DeleteAccessKey接口删除RAM用户的访问密钥。
    */ DeleteAccessKey(query: {
        "RegionId"?: string;
        /**
        * 指定要删除的`AccessKeyId`。
        * @example `0wNEpMMlzy7s****`
        */ "UserAccessKeyId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用GetLoginProfile接口查看一个RAM用户的登录配置。
    */ GetLoginProfile(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
        "LoginProfile": {
            "UserName": string;
            "PasswordResetRequired": boolean;
            "MFABindRequired": boolean;
            "CreateDate": string;
        };
    }>;
    /**
    * 调用BindMFADevice接口绑定多因素认证设备。
    */ BindMFADevice(query: {
        "RegionId"?: string;
        /**
        * 指定多因素认证设备的序列号。
        * @example `acs:ram::123456789012****:mfa/device002`
        */ "SerialNumber"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
        /**
        * 验证第一组动态密码。
        * @example `11****`
        */ "AuthenticationCode1"?: string;
        /**
        * 验证第二组动态密码。
        * @example `33****`
        */ "AuthenticationCode2"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ListVirtualMFADevices接口列出多因素认证设备。
    */ ListVirtualMFADevices(query: {
        "RegionId"?: string;
    }): Promise<{
        "RequestId": string;
        "VirtualMFADevices": {
            "VirtualMFADevice": {
                "SerialNumber": string;
            }[];
        };
    }>;
    /**
    * 调用UpdateLoginProfile接口修改用户的登录配置。
    */ UpdateLoginProfile(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
        /**
        * 指定密码，密码必须符合主账号的密码强度要求。
        * @example `mypassword`
        */ "Password"?: string;
        /**
        * 指定用户在登录时是否需要修改密码。
        * @example `true`
        */ "PasswordResetRequired"?: boolean;
        /**
        * 指定用户在下次登录时是否必须绑定多因素认证设备。
        * @example `true`
        */ "MFABindRequired"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteLoginProfile接口关闭指定RAM用户登录Web控制台的功能。
    */ DeleteLoginProfile(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteUser接口删除一个RAM用户。
    */ DeleteUser(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * 格式：`^[a-zA-Z0-9\.@\-_]+$`。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UnbindMFADevice接口解绑多因素认证设备。
    */ UnbindMFADevice(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
    }): Promise<{
        "RequestId": string;
        "MFADevice": {
            "SerialNumber": string;
        };
    }>;
    /**
    * 调用SetAccountAlias接口设置云账号别名。
    */ SetAccountAlias(query: {
        "RegionId"?: string;
        /**
        * 指定云账号的别名, 长度限制为3~32个字符。
        * 限制：`^[a-z0-9](([a-z0-9]|-(?!-))*[a-z0-9])?$`。
        * @example `myalias`
        */ "AccountAlias"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteGroup接口删除指定的用户组。
    */ DeleteGroup(query: {
        "RegionId"?: string;
        /**
        * 指定用户组名称。
        * 格式：`^[a-zA-Z0-9\-]+$`。
        * @example `Dev-Team`
        */ "GroupName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UpdateUser接口更新用户的基本信息。
    */ UpdateUser(query: {
        "RegionId"?: string;
        /**
        * 指定用户名。
        * @example `zhangq****`
        */ "UserName"?: string;
        /**
        * 指定新用户名。
        * 格式：`^[a-zA-Z0-9\.@\-_]+$`。
        * @example `xiaoq****`
        */ "NewUserName"?: string;
        /**
        * 指定新显示名称。
        * @example `xiaoq****`
        */ "NewDisplayName"?: string;
        /**
        * 指定RAM用户新手机号。
        * 格式：国际区号-号码。
        * @example `86-1860000****`
        */ "NewMobilePhone"?: string;
        /**
        * 指定RAM用户的新邮箱。
        * @example `xiaoq****@example.com`
        */ "NewEmail"?: string;
        /**
        * 指定新备注, 最大长度128个字符。
        * @example `这是一位云计算工程师`
        */ "NewComments"?: string;
    }): Promise<{
        "RequestId": string;
        "User": {
            "UserId": string;
            "UserName": string;
            "DisplayName": string;
            "MobilePhone": string;
            "Email": string;
            "Comments": string;
            "CreateDate": string;
            "UpdateDate": string;
        };
    }>;
    /**
    * 调用ListPolicies接口列出权限策略。
    */ ListPolicies(query: {
        "RegionId"?: string;
        /**
        * 指定`Policy`的类型, 取值`System`或`Custom`，如果没有指定则列出所有权限策略。
        * @example `System`
        */ "PolicyType"?: string;
        /**
        * 当请求的返回结果被截断时，可以使用`Marker`获取从当前截断位置之后的内容。
        * @example `EXAMPLE`
        */ "Marker"?: string;
        /**
        * 指定返回结果的条数，当返回结果达到`MaxItems`限制被截断时，返回参数`IsTruncated`将等于`true`。
        * 取值范围：1 ~ 1000，默认值：100。
        * @example `100`
        */ "MaxItems"?: number;
    }): Promise<{
        "RequestId": string;
        "IsTruncated": boolean;
        "Marker": string;
        "Policies": {
            "Policy": {
                "PolicyName": string;
                "PolicyType": string;
                "Description": string;
                "DefaultVersion": string;
                "CreateDate": string;
                "UpdateDate": string;
                "AttachmentCount": number;
            }[];
        };
    }>;
    /**
    * 调用CreateUser接口创建RAM用户。
    */ CreateUser(query: {
        "RegionId"?: string;
        /**
        * 指定用户名，最多包含64个字符。
        * 格式：`^[a-zA-Z0-9\.@\-_]+$`。
        * @example `zhangq****`
        */ "UserName"?: string;
        /**
        * 显示名称，最多包含128个字符或汉字。
        * 格式：`^[a-zA-Z0-9\.@\-\u4e00-\u9fa5]+$`。
        * @example `zhangq****`
        */ "DisplayName"?: string;
        /**
        * RAM用户手机号。
        * 格式：国际区号-号码。
        * @example `86-1868888****`
        */ "MobilePhone"?: string;
        /**
        * RAM用户的邮箱。
        * @example `zhangq****@example.com`
        */ "Email"?: string;
        /**
        * 备注，最大长度128个字符。
        * @example `This is a cloud computing engineer.`
        */ "Comments"?: string;
    }): Promise<{
        "RequestId": string;
        "User": {
            "UserId": string;
            "UserName": string;
            "DisplayName": string;
            "MobilePhone": string;
            "Email": string;
            "Comments": string;
            "CreateDate": string;
        };
    }>;
    /**
    * 调用ListUsers接口列出所有RAM用户。
    */ ListUsers(query: {
        "RegionId"?: string;
        /**
        * 当请求的返回结果被截断时，可以使用`Marker`获取从当前截断位置之后的内容。
        * @example `EXAMPLE`
        */ "Marker"?: string;
        /**
        * 指定返回结果的条数，当返回结果达到MaxItems限制被截断时，返回参数`IsTruncated`将等于`true`。
        * 取值范围：1 ~ 100，默认值：100。
        * @example `100`
        */ "MaxItems"?: number;
    }): Promise<{
        "RequestId": string;
        "IsTruncated": boolean;
        "Marker": string;
        "Users": {
            "User": {
                "UserId": string;
                "UserName": string;
                "DisplayName": string;
                "MobilePhone": string;
                "Email": string;
                "Comments": string;
                "CreateDate": string;
                "UpdateDate": string;
            }[];
        };
    }>;
    GetAccessKeyLastUsed(query: {
        "RegionId"?: string;
        "UserName"?: string;
        "UserAccessKeyId"?: string;
    }): Promise<{}>;
    GetSecurityPreference(query: {
        "RegionId"?: string;
    }): Promise<{}>;
}
export default RAM;
