export interface UpdateRoleRequest {
    /**
     * RAM角色名称。
     * 长度为1~64个字符，可包含英文字母、数字、半角句号（.）和短划线（-）。
     * @example `ECSAdmin`
     */
    "RoleName": string;
    /**
     * RAM角色的信任策略。
     * @example `{ "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::12345678901234****:root" } } ], "Version": "1" }`
     */
    "NewAssumeRolePolicyDocument"?: string;
    /**
     * RAM角色最大会话时间。
     * 取值范围：3600秒~43200秒。默认值：3600秒。
     * 取值为空时将采用默认值。
     * @example `3600`
     */
    "NewMaxSessionDuration"?: number;
    /**
     * RAM角色描述。
     * 长度为1~1024个字符。
     * @example `ECS管理员`
     */
    "NewDescription"?: string;
}
