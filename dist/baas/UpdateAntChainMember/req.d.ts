interface UpdateAntChainMemberRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 联盟ID
    * @example `AroN3X2l`
    */ "ConsortiumId": string;
    /**
    * 成员ID
    * @example `1287126353301234`
    */ "MemberId": string;
    /**
    * 成员名称
    * @example `updatename`
    */ "MemberName": string;
}
export { UpdateAntChainMemberRequest };