export interface GetMediaAuditResultDetailRequest {
    /**
     * 视频ID。
     * @example `93ab850b4f6f*****54b6e91d24d81d4`
     */
    "MediaId": string;
    /**
     * 视频内容审核结果页码。默认值为**1**，每页最多返回**20**条记录。
     * @example `1`
     */
    "PageNo": number;
}
