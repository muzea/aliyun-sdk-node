export interface SubmitSmarttagJobRequest {
    /**
     * 管道ID，用于区分业务，绑定消息通知。可以通过**MPS控制台** > **全局设置** > **管道**获取。可以为空（空格），表示默认管道。默认管道并发为2，需要提升并发数请提交[工单](https://ia.aliyun.com/home?channel=ticket&mark=console-home)。
     *  >管道目前仅支持后台创建，相关查询、更新接口请参见[更新管道](~~188374~~)。
     * @example `2`
     */
    "PipelineId": string;
    /**
     * 视频标题，支持中英文、数字、中划线（-），不能以特殊符号开头，长度不能超过256B。
     * @example `example-title-****`
     */
    "Title": string;
    /**
     * 视频内容描述，支持中英文、数字、中划线（-），不能以特殊符号开头，长度不能超过1KB。
     * @example `example content ****`
     */
    "Content"?: string;
    /**
     * 已废弃
     * @example `application/zip`
     */
    "ContentType"?: string;
    /**
     * 已废弃
     * @example `http://exampleBucket.oss-cn-shanghai.aliyuncs.com/mps-test/ai-tag.mp4`
     */
    "ContentAddr"?: string;
    /**
     * 额外的请求参数，使用JSON字符串表示，例如：`{"needAsrData":true, "needOcrData":false}`。字段说明：
     * - needAsrData：boolean值，分析结果中是否需要包含原始ASR结果，默认false（不包含），可选true（包含）
     * - needOcrData：boolean值，分析结果中是否需要包含原始OCR结果，默认false（不包含），可选true（包含）
     * - needMetaData：boolean值，分析结果中是否需要包含Meta信息，默认false（不包含），可选true（包含）
     * @example `false`
     */
    "Params"?: string;
    /**
     * Callback路径，目前仅支持HTTP、HTTPS地址。
     * @example `https://example.com/endpoint/aliyun/ai?id=76401125000***`
     */
    "NotifyUrl"?: string;
    /**
     * 通过回调透传回来的信息，长度不能超过1KB。
     * @example `{"key":"value"}`
     */
    "UserData"?: string;
    /**
     * 需要分析的视频或图片文件的地址，图片文件支持jpg、jpeg、png三种类型（按文件后缀名校验）。智能标签接口输入支持OSS地址、HTTP地址、视频点播（VoD）媒资地址等形式。
     * > 请确认您的文件名正确且所在Bucket与接口调用地域一致，否则可能导致找不到文件或接口调用失败。
     * - OSS地址：`oss://[Bucket名称]/[文件路径]`，例如`oss://[example-bucket-****]/[object_path-****]`。
     * - HTTP地址：公网可下载的地址，例如`http://example-test-****.mp4`。
     * - 视频点播（VoD）媒资地址：`vod://[VoD媒资MediaId]`，例如`vod://MediaId`。
     * 举例如下：
     * - `oss://mybucket-****​/example-****.mp4`
     * - `oss://testbucket-****​/videos-****​/1-****.mp4`
     * - `http://example-label-****.oss-cn-beijing.aliyuncs.com/example-****.mp4`
     * - `vod://181d739404a3419ba1c22b957ad2****`
     * > 注意OSS Bucket所在区域必须与调用OpenAPI所在的区域相同，MPS从用户Bucket拉取视频或图片免流量费用。
     * @example `oss://mybucket-****​/example-****.mp4`
     */
    "Input"?: string;
    /**
     * 模板ID用于指定分析算法，模板相关操作参见[添加模板](~~602910~~)，[查询模板](~~187770~~)，[更新模板](~~187776~~)，[删除模板](~~187775~~)。
     * @example `39f8e0bc005e4f309379701645f4****`
     */
    "TemplateId"?: string;
    /**
     * 任务在其对应管道内的优先级。最高优先级：0，最低优先级：9。默认值：5。
     * @example `5`
     */
    "Priority"?: string;
}
