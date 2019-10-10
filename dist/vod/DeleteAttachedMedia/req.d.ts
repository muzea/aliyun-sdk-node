interface DeleteAttachedMediaRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 辅助媒资ID列表。多个用逗号分隔。最多支持20个。
    * @example `xxxxxxxx,xxxxxxxxx`
    */ "MediaIds"?: string;
}
export { DeleteAttachedMediaRequest };