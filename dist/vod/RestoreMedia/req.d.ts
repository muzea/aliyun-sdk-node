export interface RestoreMediaRequest {
    /**
     * 媒体ID，即音/视频ID（VideoId）。多个ID之间使用半角逗号（,）分隔，最多支持20个。可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录点播控制台，选择媒资库 > 音/视频查看音/视频ID。
     * - 通过获取音视频上传地址和凭证接口获取上传地址和凭证时，为返回参数VideoId的值。
     * - 音/视频上传后，可通过搜索媒体信息接口查询，为请求后返回参数VideoId的值。
     * @example `8bc8e94fe4e55abde85718****,eb186180e989dd56****`
     */
    "MediaIds": string;
    /**
     * 变更范围。取值：
     * - **All**： 将整个媒资的资源（源文件和转码流）做分级存储。
     * - **SourceFile**：仅对媒资ID下的视频源文件做分级存储，源文件之外的资源为标准存储。
     * @example `All`
     */
    "Scope"?: string;
    /**
     * 解冻时长。默认1天，归档媒资最多7天，冷归档媒资最多365天
     * @example `2`
     */
    "RestoreDays"?: string;
    /**
     * 解冻优先级（仅冷归档媒资需要）。取值：
     * - **高级**：Expedited，表示1小时内完成解冻、
     * - **标准**：Standard，默认值，表示2~5小时内完成解冻。
     * - **批量**：Bulk，表示5~12小时内完成解冻。
     * @example `Standard`
     */
    "RestoreTier"?: string;
}
