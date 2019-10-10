interface SetEditingProjectMaterialsRequest {
    "RegionId"?: string;
    /**
    * 素材ID。即媒资ID，如视频VideoId、图片ImageId、辅助媒资MediaId等。支持多个素材，以逗号分隔。
    * @example `9e3101bf24bf41c78b275123318788ca`
    */ "MaterialIds": string;
    /**
    * 云剪辑工程ID。
    * @example `fb2101bf24bf41c78b2754cb318787dc`
    */ "ProjectId": string;
    "OwnerId"?: string;
}
export { SetEditingProjectMaterialsRequest };