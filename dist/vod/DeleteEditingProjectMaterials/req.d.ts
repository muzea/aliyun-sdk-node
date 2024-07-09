export interface DeleteEditingProjectMaterialsRequest {
    /**
     * 云剪辑工程id。
     * @example `198236101*****1093374`
     */
    "ProjectId": string;
    /**
     * 素材ID。即媒资ID，如视频VideoId、图片ImageId、辅助媒资MediaId等。多个素材ID使用英文逗号（,）分隔。
     * 获取素材ID，更多信息，请参见[搜索媒体信息](~~86044~~)。
     * @example `9e3101bf24bf41c*****123318788ca`
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
