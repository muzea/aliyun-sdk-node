interface DeleteCasterEpisodeRequest {
    "RegionId"?: string;
    /**
    * 节目ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf9327388752`
    */ "EpisodeId": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
    */ "CasterId": string;
}
export { DeleteCasterEpisodeRequest };