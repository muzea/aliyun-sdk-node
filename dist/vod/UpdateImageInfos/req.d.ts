export interface UpdateImageInfosRequest {
    /**
     * 更新内容。一次最多支持修改20个图片的信息。参数结构参考下表**更新内容UpdateContent**。
     * > - Title、Description、Tags更新内容中不能包含表情符。
     * >- 传入参数则更新相应字段，否则相应字段不会被覆盖或更新。
     * @example `[{"ImageId":"ff8fe57e3461416c6a267a4e09****","Title":"标题","Description":"描述","Tags":"标签1,标签2"}]`
     */
    "UpdateContent": string;
}
