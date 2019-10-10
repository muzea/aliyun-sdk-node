interface CreateRoleRequest {
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
}
export { CreateRoleRequest };