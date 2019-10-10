interface CreateFabricConsortiumMemberRequest {
    /**
    * 地域
    * @example `cn-hanghzozu`
    */ "RegionId"?: string;
    "Organization": string[];
    /**
    * 联盟ID
    * @example `consortium-aaaaaa-akpcsjjac2jd`
    */ "ConsortiumId": string;
    /**
    * 邀请码
    * @example `200`
    */ "Code"?: string;
}
export { CreateFabricConsortiumMemberRequest };