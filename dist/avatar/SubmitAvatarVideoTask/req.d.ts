export interface SubmitAvatarVideoTaskRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `xxx`
     */
    "TenantId": number;
    /**
     * App信息，代表一个业务配置
     */
    "App": {
        /**
         * App ID。在开发者中心-实例管理页面获取对应的appId，[参考文档](https://help.aliyun.com/document_detail/479093.html?spm=a2c4g.2527854.0.0.6f124ecfkSTD3w#6a48daa1ee899)。
         * @example `3d95xx946a`
         */
        AppId: string;
    };
    /**
     * 提交的视频合成的任务标题
     * @example `这是一个示例标题`
     */
    "Title": string;
    /**
     * 合成的视频需要的相关参数
     * @example `{
        "text": "测试",
        "characterCode": "CH_xxxxxx"
      }`
     */
    "VideoParams": string;
    /**
     * 本次视频合成任务是否需要事件回调，默认false不回调。平台支持在任务开始和任务结束时进行事件回调，具体可参考文档：[数字人回调事件通知](https://help.aliyun.com/document_detail/2261152.html?spm=a2c4g.447644.0.0.406f5876hRJTVU)。
     * @example `false`
     */
    "Callback"?: boolean;
    /**
     * 回调时需要透传的一些参数，json格式字符串，callback=false时不生效。
     * @example `{
          "xxx": "xxx"
    }`
     */
    "CallbackParams"?: string;
    /**
     * 一些扩展参数。
     * @example `{
          "xxx": "xxx"
    }`
     */
    "ExtParams"?: string;
}
