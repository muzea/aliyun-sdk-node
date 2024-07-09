export interface PutLiveChannelResponse {
    /**
     * 保存CreateLiveChannel请求结果的容器。
     */
    CreateLiveChannelResult: {
        /**
         * 保存推流地址的容器。
         */
        PublishUrls: any;
        /**
         * 保存播放地址的容器。
         */
        PlayUrls: any;
    };
}
