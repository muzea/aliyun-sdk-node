export interface CreatePolicyRequest {
    /**
     * 权限策略名称。
     * 长度为1~128个字符，可包含英文字母、数字和短划线（-）。
     * @example `View-ECS-instances-in-a-specific-region`
     */
    "PolicyName"?: string;
    /**
     * 权限策略描述。
     * 长度为1~1024个字符。
     * @example `查看指定地域ECS实例`
     */
    "Description"?: string;
    /**
     * 权限策略内容。
     * 长度为1~6144个字符。
     * 关于权限策略元素和示例，请参见[权限策略基本元素](~~93738~~)和[权限策略示例库](~~210969~~)。
     * @example `{"Statement": [{"Effect": "Allow","Action": "ecs:Describe*","Resource": "acs:ecs:cn-qingdao:*:instance/*"}],"Version": "1"}`
     */
    "PolicyDocument"?: string;
}
