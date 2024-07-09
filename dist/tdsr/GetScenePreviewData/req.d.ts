export interface GetScenePreviewDataRequest {
    /**
     * 预览token
     * @example `2735913e96da44ea8c86f8e777c8****`
     */
    "PreviewToken": string;
    /**
     * 自定义oss域名（可为cdn域名）
     * @example `www.example.com`
     */
    "Domain"?: string;
    /**
     * 是否开启自用资源访问（默认false）
     * @example `true/false`
     */
    "Enabled"?: boolean;
    /**
     * 是否返回热点数据（默认false）
     * @example `true/false`
     */
    "ShowTag"?: boolean;
}
