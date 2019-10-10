interface UpdateAttachedMediaInfosRequest {
    "RegionId"?: string;
    /**
    * 更新内容。一次最多支持修改20个辅助媒资信息。
    * @example `[{"MediaId ":"xxxx","Title":"标题","Description":"描述","Tags":"标签1,标签2"}]`
    */ "UpdateContent": string;
    "OwnerId"?: number;
    /**
    * 资源所有者ID。
    * @example `235`
    */ "ResourceRealOwnerId"?: number;
}
export { UpdateAttachedMediaInfosRequest };