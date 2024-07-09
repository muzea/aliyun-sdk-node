export interface DescribeVodMediaPlayDataResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 返回数据的总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 返回数据的页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 每页显示的数据条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 返回数据列表。
     */
    QoeInfoList: {
        /**
         * 音视频的名称。
         * @example `阿里云VOD视频标题`
         */
        VideoTitle: string;
        /**
         * 音视频的时长，单位：秒。
         * @example `246`
         */
        VideoDuration: number;
        /**
         * 媒体ID，即音/视频ID（VideoId）。
         * @example `9ae2af636ca6c10412f44891fc****`
         */
        MediaId: string;
        /**
         * 音视频的访问用户数，单位：个。
         * @example `5`
         */
        DAU: number;
        /**
         * 音视频的播放总次数，单位：次。
         * @example `20`
         */
        PlaySuccessVv: number;
        /**
         * 音视频的人均播放时长，单位：秒。
         * @example `120`
         */
        PlayDurationPerUv: number;
        /**
         * 音视频的累计播放时长，单位：秒。
         * @example `2400`
         */
        PlayDuration: number;
        /**
         * 音视频的人均播放次数，单位：次。
         * @example `4`
         */
        PlayPerVv: number;
    }[];
}
