export interface GetCallerIdentityResponse {
    /**
     * 身份类型。取值：
     * - Account：阿里云账号（主账号）。
     * - RAMUser：RAM用户。
     * - AssumedRoleUser：RAM角色。
     * @example `RAMUser`
     */
    IdentityType: string;
    /**
     * 当前调用者所属阿里云账号ID。
     * @example `196813200012****`
     */
    AccountId: string;
    /**
     * 请求ID。
     * @example `3C87BF47-3724-5443-ADC1-5AEAD9A03EB1`
     */
    RequestId: string;
    /**
     * 身份标识。
     * @example `28877424437521****`
     */
    PrincipalId: string;
    /**
     * 用户ID。具体如下：
     * - 如果当前调用者是阿里云账号，则返回阿里云账号ID。
     * - 如果当前调用者是RAM用户，则返回RAM用户ID。
     * > 仅限当前调用者是阿里云账号或RAM用户时返回该参数。
     * @example `216959339000****`
     */
    UserId: string;
    /**
     * 当前调用者的ARN。
     * @example `acs:ram::196813200012****:user/admin`
     */
    Arn: string;
    /**
     * RAM角色ID。
     * > 仅限当前调用者是RAM角色时返回该参数。
     * @example `33537620082992****`
     */
    RoleId: string;
}
