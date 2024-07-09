export interface AddCasterProgramResponse {
    EpisodeIds: {
        /**
         * 节目ID列表，列表中元素顺序和传入节目顺序保持一致。
         */
        EpisodeId: {
            /**
             * 节目组ID。可作为修改导播台节目单，查询导播台节目单，删除导播台节目，修改导播台节目的请求参数。
             * @example `[ "16A96B9A-F203-4EC5-8E43-CB92E68F****", "16A96B9A-F203-4EC5-8E43-CB92E688****" ]`
             */
            EpisodeId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
