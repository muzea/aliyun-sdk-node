export interface GetMediaAuditAudioResultDetailRequest {
    /**
     * 音频ID。可通过点播控制台查询音频ID或通过[SearchMedia](~~86044~~)接口请求后会返回音频ID。
     * @example `93ab850b4f6f*****54b6e91d24d81d4`
     */
    "MediaId": string;
    /**
     * 分页号。可选填，不填则返回所有结果不分页。
     * @example `1`
     */
    "PageNo"?: number;
}
