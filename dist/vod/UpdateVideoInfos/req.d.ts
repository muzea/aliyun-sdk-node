interface UpdateVideoInfosRequest {
    "RegionId"?: string;
    /**
    * 更新内容。一次最多支持修改20个视频的视频信息。
    * @example `[{"VideoId":"f45cf4eba5c84d25b90233389558c39","Title":"测试标题","Description":"测试描述","CoverURL":"http://sample.aliyun.com/sample.jpg","CateId":"6163631","Tags":"测试标签"},{"VideoId":"f45cf4eba5c84d25b90233389558c36","Title":"测试标题","Description":"测试描述","CoverURL":"http://sample.aliyun.com/sample.jpg","CateId":"6163631","Tags":"测试标签"}]`
    */ "UpdateContent": string;
    "OwnerId"?: number;
}
export { UpdateVideoInfosRequest };