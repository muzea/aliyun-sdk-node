export interface GetTemplateMaterialsRequest {
    /**
     * 模板ID。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "TemplateId": string;
    /**
     * 所需文件列表。
     * @example `["music.mp3","config.json","assets/1.jpg"]`
     */
    "FileList"?: string;
}
