export interface GetLiveChannelInfoResponse {
    /**
     * 保存GetLiveChannelInfo返回结果的容器。
     */
    LiveChannelConfiguration: {
        /**
         * LiveChannel的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * LiveChannel的状态信息。有效值：
         * enabled：启用状态
         * disabled：禁用状态
         * @example `enabled`
         */
        Status: string;
        /**
         * 保存LiveChannel转储配置的容器。
         */
        Target: any;
    };
}
