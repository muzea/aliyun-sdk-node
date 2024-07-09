export interface UpdateErAttachmentRequest {
    /**
     * 灵骏HUB网络实例连接ID
     * @example `er-attachment-i1ioibyf`
     */
    "ErAttachmentId": string;
    /**
     * 灵骏HUB网络实例连接名称
     * @example `er-attachment-wulanchabu-main`
     */
    "ErAttachmentName"?: string;
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB ID
     * @example `er-kkopgtne`
     */
    "ErId": string;
}
