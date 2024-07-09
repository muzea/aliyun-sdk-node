export interface EditPlaylistRequest {
    /**
     * 节目单ID。如果您通过[AddPlaylistItems接口](~~203414~~)添加节目单项，请查看AddPlaylistItems接口调用返回的参数ProgramId值。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "ProgramId": string;
    /**
     * 节目单项输入列表。为JSON字符串，更多信息，请参见**InputProgramItem**。
     * @example `[{"ItemName":"item1","ResourceType":"vod","ResourceValue":"5f8809f2-3352-4d1f-a8f7-86f9429f****"}, {"ItemName": "item2","ResourceType": "vod","ResourceValue": "e7411c0b-dd98-4c61-a545-f8bfba6c****"}]`
     */
    "ProgramItems": string;
    /**
     * 节目单项配置。更多信息，请参见**ProgramConfig**。
     * @example `[{"RepeatNumber":"0","ProgramName":"my program"}]`
     */
    "ProgramConfig"?: string;
}
