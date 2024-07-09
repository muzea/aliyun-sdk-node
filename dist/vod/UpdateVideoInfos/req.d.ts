export interface UpdateVideoInfosRequest {
    /**
     * 更新内容。一次最多支持修改20个音/视频的信息，多个音/视频对象信息之间以英文逗号（,）分隔，一次更新超过20个将更新失败并报错`CountExceededMax`。
     * 格式为JSON字符串，构建参数详情，参见下表**更新内容UpdateContent**。
     * @example `[{"VideoId":"f45cf4eba5cb90233389558c39****","Title":"测试标题1"},{"VideoId":"f45cf4eba5c84233389558c36****","Title":"测试标题2"}]`
     */
    "UpdateContent": string;
}
