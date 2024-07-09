export interface CreateThirdSsoAgentRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可在悉犀客服控制台上获取。
     * @example `ccc_xp_pre***`
     */
    "InstanceId": string;
    /**
     * 颁发给租户实例的clientId
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientId": string;
    /**
     * 要同步的账号ID。
     * @example `accountId1`
     */
    "AccountId": string;
    /**
     * 要同步的账号名称。
     * @example `accountName1`
     */
    "AccountName": string;
    /**
     * 坐席显示名称。
     * @example `张三`
     */
    "DisplayName"?: string;
    /**
     * 技能组ID列表。
     */
    "SkillGroupIds"?: number[];
    /**
     * 角色ID列表。
     */
    "RoleIds"?: number[];
}
