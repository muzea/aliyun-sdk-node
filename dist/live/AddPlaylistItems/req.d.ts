export interface AddPlaylistItemsRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * 导播台需满足如下配置：
     * - **NormType**：**3**。您需要提前创建好轻量级轮播型的导播台，可以调用**CreateCaster**接口创建导播台。
     * - **CasterTemplate**：lp_noTranscode。
     * - **channelEnable**：0。
     * - **programEffect**：1。
     * @example `0e94d1f4-1a65-445c-9dcf-de8b3b8d****`
     */
    "CasterId": string;
    /**
     * 节目单项输入列表。为JSON字符串，更多信息，请参见**InputProgramItem**。
     * @example `[{"ItemName":"item1","ResourceType":"vod","ResourceValue":"5f8809f2-3352-4d1f-a8f7-86f9429f****"}, {"ItemName": "item2","ResourceType": "vod","ResourceValue": "e7411c0b-dd98-4c61-a545-f8bfba6c****"}]`
     */
    "ProgramItems": string;
    /**
     * 节目单ID。不填则默认创建一个新的节目单。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "ProgramId"?: string;
    /**
     * 节目单项配置。若首次添加，传该参数进行初始化配置。更多信息，请参见**ProgramConfig**。
     * @example `[{"RepeatNumber":"0","ProgramName":"my program"}]`
     */
    "ProgramConfig"?: string;
}
