export interface AddEditingProjectMaterialsRequest {
    /**
     * 云剪辑工程ID
     * @example `afa31b483b5c41609185de0e1b790579`
     */
    "ProjectId": string;
    /**
     * 素材ID，多个素材以逗号（,）分隔；最多支持10个素材ID
     * >  关联多个素材时应保证多个素材均为同一类型，且与MaterialType取值对应
     * @example `d3251979f9fd41f2acb29ccda5a6f772`
     */
    "MaterialIds": string;
    /**
     * 素材类型。取值：
     * - **video**：视频。
     * - **audio**：纯音频。
     * - **image**：图片。
     * @example `video`
     */
    "MaterialType": string;
}
