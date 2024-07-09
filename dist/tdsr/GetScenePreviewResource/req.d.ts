export interface GetScenePreviewResourceRequest {
    /**
     * 预览token
     * @example `2deb941b3e1****`
     */
    "PreviewToken": string;
    /**
     * true/false，是否草稿预览，默认：false，用于热点添加后的预览
     * @example `false`
     */
    "Draft"?: boolean;
}
