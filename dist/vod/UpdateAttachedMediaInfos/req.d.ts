export interface UpdateAttachedMediaInfosRequest {
    /**
     * 更新内容。一次最多支持修改20个辅助媒资信息。参数结构请参考下表**更新内容UpdateContent**。
     * >- `Title`、`Description`、`Tags`更新内容中不能包含表情符。
     * >- 传入参数则更新相应字段，否则相应字段不会被覆盖或更新。
     * @example `[{"MediaId":"bbc65bba53f6ed90de118a7849****","Title":"标题1","Description":"描述1","Tags":"标签1,标签2"},{"MediaId":"f45cf4eba5cb90233389558c39****","Title2":"标题","Description2":"描述","Tags":"标签3,标签4"}]`
     */
    "UpdateContent": string;
}
