export interface DeleteCasterEpisodeRequest {
    /**
     * 导播台ID。如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "CasterId": string;
    /**
     * 节目ID。如果您通过[AddCasterEpisode接口](~~94745~~)添加导播台节目，请查看AddCasterEpisode接口调用返回的参数EpisodeId值。
     * @example `a2b8e671-2fe5-4642-a2ec-bf932738****`
     */
    "EpisodeId": string;
}
