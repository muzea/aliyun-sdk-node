export interface DeleteDynamicImageRequest {
    /**
     * 需要删除的动图所关联的视频ID。视频ID可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `2321077d460b028700ef6c2f4d****`
     */
    "VideoId": string;
    /**
     * 动图文件ID列表。动图文件ID为[查询动图列表](~~180958~~)接口返回参数DynamicImageId的值。
     * - 多个ID之间使用半角逗号（,）分隔，最多支持10个ID。
     * - 如果不传该参数，将按VideoId删除视频下的所有动图，但是如果视频下的动图数量超过10个，将拒绝删除请求。
     * @example `beafec3834a4e52ea52042a4****,8281c8519847fd8970e79e80b6****`
     */
    "DynamicImageIds"?: string;
}
