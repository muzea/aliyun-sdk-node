export interface DeleteEditingProjectMaterialsRequest {
    /**
     * 云剪辑工程ID
     * @example `*****fb2101cb318*****`
     */
    "ProjectId": string;
    /**
     * 素材ID，多个素材以逗号（,）分隔；最多支持10个素材ID
     * @example `*****cbd721b418a89a7dafb1dc*****,*****86f5d534c95997c55c96f*****`
     */
    "MaterialIds": string;
    /**
     * 素材类型：
     * \-video
     * \-image
     * \-audio
     * \-subtitle
     * \-text
     * @example `video`
     */
    "MaterialType": string;
}
