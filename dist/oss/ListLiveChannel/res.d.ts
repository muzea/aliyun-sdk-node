export interface ListLiveChannelResponse {
    /**
     * 保存ListLiveChannel请求结果的容器。
     */
    ListLiveChannelResult: {
        /**
         * 本次查询结果的开始前缀。
         * @example `Channel`
         */
        Prefix: string;
        /**
         * 本次ListLiveChannel的起点。
         * @example `new`
         */
        Marker: string;
        /**
         * 响应请求内返回结果的最大数目。
         * @example `20`
         */
        MaxKeys: number;
        /**
         * 是否已返回所有的结果。
         * true：表示本次请求已返回全部结果。
         * false：表示本次请求未返回全部结果。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 如果本次没有返回全部结果，响应请求中将包含NextMarker元素，用于标明接下来请求的Marker值。
         * @example `channel-0`
         */
        NextMarker: string;
        /**
         * 保存返回的LiveChannel信息的列表。
         */
        LiveChannel: any[];
    };
}
