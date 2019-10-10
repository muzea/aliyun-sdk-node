interface ConfirmFabricConsortiumMemberRequest {
    /**
    * 地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "Organization": string[];
    /**
    * 联盟ID。
    * @example `consortium-aaaaaa-akpcsjjac2jd`
    */ "ConsortiumId": string;
}
export { ConfirmFabricConsortiumMemberRequest };