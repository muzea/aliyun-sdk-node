interface AddCasterProgramRequest {
    "RegionId"?: string;
    "Episode": string[];
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
    */ "CasterId": string;
}
export { AddCasterProgramRequest };