export interface GetHotspotTagRequest {
    /**
     * 预览token
     * @example `344794c32937474a9c59eb130936****`
     */
    "PreviewToken"?: string;
    /**
     * 子场景Uid
     * @example `123456`
     */
    "SubSceneUuid"?: string;
    /**
     * 类型0：未发布。1：已发布
     * @example `1`
     */
    "Type"?: string;
    /**
     * 是否开启自用资源访问
     * @example `true/false`
     */
    "Enabled"?: boolean;
    /**
     * 自定义OSS域名（可为CDN域名）
     * @example `www.aliyundoc.com`
     */
    "Domain"?: string;
}
