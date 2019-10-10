interface DeleteEditingProjectRequest {
    "RegionId"?: string;
    /**
    * 云剪辑工程ID。支持多个云剪辑工程，以逗号分隔。
    * @example `fb2101bf24bf41c78b2754cb318787dc`
    */ "ProjectIds": string;
    "OwnerId"?: string;
}
export { DeleteEditingProjectRequest };