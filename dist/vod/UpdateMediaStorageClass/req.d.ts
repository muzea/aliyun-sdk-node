export interface UpdateMediaStorageClassRequest {
    /**
     * 媒体ID，即音/视频ID（VideoId）。多个ID之间使用半角逗号（,）分隔，最多支持20个。可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[获取音视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，为返回参数VideoId的值。
     * - 音/视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询，为请求后返回参数VideoId的值。
     * @example `d56c2ac0cee271ed80004710b5ba****`
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
     * 存储类型。取值：
     * - **Standard**：标准
     * - **IA**：低频（Infrequent Access）
     * - **Archive**：归档
     * - **ColdArchive**：冷归档
     * @example `Archive`
     */
    "StorageClass": string;
    /**
     * 解冻优先级（仅冷归档媒资需要）。取值：
     * - **Expedited**：高级
     * - **Standard**：标准
     * - **Bulk**：批量
     * @example `Standard`
     */
    "RestoreTier"?: string;
    /**
     * 是否允许存储时长不足的媒资进行存储类型变更。取值：
     * - **true**：允许
     * - **false**：不允许
     * >如果媒资存储时长不足，强制进行存储类型变更，会涉及额外的取回费用。
     * @example `false`
     */
    "AllowUpdateWithoutTimeLimit"?: boolean;
}
