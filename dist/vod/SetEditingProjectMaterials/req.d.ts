export interface SetEditingProjectMaterialsRequest {
    /**
     * 云剪辑工程ID。
     * @example `fb2101bf24bf4*****754cb318787dc`
     */
    "ProjectId": string;
    /**
     * 素材ID。即媒资ID，如视频VideoId、图片ImageId、辅助媒资MediaId等。多个素材ID，请使用英文逗号（,）分隔。
     * @example `9e3101bf24bf41c*****123318788ca`
     */
    "MaterialIds": string;
}
