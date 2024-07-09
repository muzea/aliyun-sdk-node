export interface AcceptFabricInvitationRequest {
    /**
     * 邀请码。
     * @example `secrettoken`
     */
    "Code": string;
    /**
     * 是否接受。
     * @example `true`
     */
    "IsAccepted"?: boolean;
}
