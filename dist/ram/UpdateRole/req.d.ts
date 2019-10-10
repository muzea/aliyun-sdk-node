interface UpdateRoleRequest {
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
}
export { UpdateRoleRequest };