export interface UpdateMPCoSAuthorizedInfoRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 账户标识。
     * @example `717534457003****`
     */
    "MemberId": string;
    /**
     * 授权阶段标识列表。
     * @example `["196487512811****","196487512812****"]`
     */
    "AuthorizedPhaseList": any;
    /**
     * 协同模型标识。
     * @example `383860792287****`
     */
    "PhaseGroupId": string;
}
