export interface SubmitWorkflowJobRequest {
    /**
     * 工作流ID。可登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒体处理配置** > **工作流管理**查看ID。
     * @example `34d577eade633860bdf1237****`
     */
    "WorkflowId": string;
    /**
     * 媒资ID，即视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `058b39e75269da42b08f00459****`
     */
    "MediaId"?: string;
}
