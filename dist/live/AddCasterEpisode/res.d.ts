export interface AddCasterEpisodeResponse {
    /**
     * 节目ID。可作为查询导播台节目单、修改导播台节目、删除导播台节目的请求参数。
     * @example `21926b36-7dd2-4fde-ae25-51b5bc8e****`
     */
    EpisodeId: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
