export interface DeleteCasterEpisodeResponse {
    /**
     * 导播台ID。可作为修改导播台节目的请求参数。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    CasterId: string;
    /**
     * 节目ID。可作为修改导播台节目的请求参数。
     * @example `a2b8e671-2fe5-4642-a2ec-bf932738****`
     */
    EpisodeId: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
