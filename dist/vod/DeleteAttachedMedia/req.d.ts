export interface DeleteAttachedMediaRequest {
    /**
     * 辅助媒资ID。
     * - 多个ID之间使用半角逗号（,）分隔，最多支持20个ID。
     * - 调用[CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~)接口获取辅助媒资上传地址和凭证后，会返回。
     * @example `8bc8e94fe4e55abde85718****,eb186180e989dd56****`
     */
    "MediaIds": string;
}
