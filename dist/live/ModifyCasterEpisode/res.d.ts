export interface ModifyCasterEpisodeResponse {
    /**
     * 导播台ID。可作为复制导播台场景配置、更新导播场景配置、查询导播台场景列表、查询导播台场景音频配置、启动导播台场景和停止导播台场景的请求参数。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    CasterId: string;
    /**
     * 节目ID。可作为删除导播台节目列表，创建或添加节目单项，删除节目单项，查询节目单项，编辑节目单，删除节目单，查询节目单，启动节目单，停止节目单的请求参数。
     * @example `a2b8e671-2fe5-4642-a2ec-bf938623****`
     */
    EpisodeId: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
