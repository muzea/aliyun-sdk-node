export interface GetScenePreviewInfoRequest {
    /**
     * 模型token
     * @example `A.e.RQJRPYGIJJQP****`
     */
    "ModelToken": string;
    /**
     * 自定义OSS域名（可为CDN域名）
     * @example `www.aliyundoc.com`
     */
    "Domain"?: string;
    /**
     * 是否开启自用资源访问
     * @example `true`
     */
    "Enabled"?: boolean;
}
