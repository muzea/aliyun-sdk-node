interface AcceptFabricInvitationRequest {
    /**
    * 地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 邀请码。
    * @example `secrettoken`
    */ "Code": string;
    /**
    * 是否接受。
    * @example `true`
    */ "IsAccepted"?: boolean;
}
export { AcceptFabricInvitationRequest };