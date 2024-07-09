export interface SetLiveLazyPullStreamInfoConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * > 如果需要全部App都触发回源，则取值**ali_all_app**。
     * @example `ali_all_app`
     */
    "AppName": string;
    /**
     * 直播流所在的源站。多个源站使用英文分号（;）分隔。
     * @example `guide.aliyundoc.com`
     */
    "PullDomainName": string;
    /**
     * 回源拉流App。
     * > 如果使用播放URL中的App，则此参数为空。
     * @example `livePullApp****`
     */
    "PullAppName"?: string;
    /**
     * 转码播放触发拉流。默认为**no**。可选值：
     * - **yes**
     * - **no**
     * @example `no`
     */
    "TranscodeLazy"?: string;
    /**
     * 回源拉流协议。取值：
     * - **rtmp**
     * - **httpflv**
     * - **hls**
     * @example `rtmp`
     */
    "PullProtocol": string;
}
