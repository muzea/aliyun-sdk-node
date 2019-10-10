interface UpdateImageInfosRequest {
    "RegionId"?: string;
    /**
    * 更新内容。一次最多支持修改20个图片的视频信息。
    * > Title、Description、Tags 更新内容中不能包含表情符。
    * @example `[{"ImageId":"ff8fe57e3461416c9d40d66a267a4e09","Title":"标题","Description":"描述","Tags":"标签1,标签2"}]`
    */ "UpdateContent": string;
    "OwnerId"?: number;
    /**
    * 资源所有者ID。
    * @example `346547`
    */ "ResourceRealOwnerId"?: number;
}
export { UpdateImageInfosRequest };