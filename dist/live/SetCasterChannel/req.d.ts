export interface SetCasterChannelRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "CasterId": string;
    /**
     * 通道ID。
     * 布局画面的引用编号，每个通道位置至多设置一个资源，数量受限于导播台创建时的通道路数。格式符合“RV01~RV12”。
     * @example `RV01`
     */
    "ChannelId": string;
    /**
     * 视频源ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F****`
     */
    "ResourceId"?: string;
    /**
     * 仅对文件视频有效，直播源无效，必须大于或等于0，表示从相对于首帧的偏差时间作为开始读取的位置。 单位：毫秒（ms）。
     * @example `1000`
     */
    "SeekOffset"?: number;
    /**
     * 播放状态。仅对文件视频有效，直播源无效。 取值：
     *
     * - **1**（默认值）：播放。
     * - **0**：暂停。
     * @example `1`
     */
    "PlayStatus"?: number;
    /**
     * 人脸美颜。具体包括：0（whole）、1（磨皮）、2（美白）、3（去除黑眼圈）、4（法令纹）。
     * @example `0`
     */
    "FaceBeauty"?: string;
}
