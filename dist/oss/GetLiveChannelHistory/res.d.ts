export interface GetLiveChannelHistoryResponse {
    /**
     * 保存GetLiveChannelHistory返回结果的容器。
     */
    LiveChannelHistory: {
        /**
         * 保存推流记录信息的列表。
         */
        LiveRecord: any[];
    };
}
