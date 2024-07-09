export interface CreateRoleRequest {
    /**
     * 角色名称。
     * 长度为1~64个字符，可包含英文字母、数字、点号（.）和短横线（-）。
     * @example `ECSAdmin`
     */
    "RoleName": string;
    /**
     * 角色描述。
     * 长度为1~1024个字符。
     * @example `ECS管理角色`
     */
    "Description"?: string;
    /**
     * 扮演角色的权限策略内容。
     * 指定允许扮演该角色的一个或多个主体，这个主体可以是阿里云账号、阿里云服务或身份提供商。
     * > RAM用户不能扮演可信实体为阿里云服务的RAM角色。
     * @example `{ "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::12345678901234****:root" } } ], "Version": "1" }`
     */
    "AssumeRolePolicyDocument": string;
    /**
     * 角色最大会话时间。
     * 取值范围：3600秒~43200秒。默认值：3600秒。
     * 取值为空时将采用默认值。
     * @example `3600`
     */
    "MaxSessionDuration"?: number;
}
