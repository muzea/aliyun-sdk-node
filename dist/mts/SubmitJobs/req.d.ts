export interface SubmitJobsRequest {
    /**
     * 作业输入。详细说明，请参见[Input详情](~~29253~~)。
     * > - 在媒体处理API中，Object必须经过URL Encoding（基于UTF-8编码）后使用。
     * - OSS的地域需要与当前MPS所在地域保持一致。
     * @example `{"Bucket":"exampleBucket","Location":"oss-cn-hangzhou","Object":"example.flv","Referer": "用户自行在OSS控制台设置的OSS防盗链参数"}`
     */
    "Input": string;
    /**
     * 作业输出配置。详细说明，请参见[Output详情](~~29253~~)。
     * -  Outputs由Output列表构成，JSON数组，大小上限为30。
     * @example `[{"OutputObject":"exampleOutput.mp4","TemplateId":"6181666213ab41b9bc21da8ff5ff****","WaterMarks":[{"InputFile":{"Bucket":"exampleBucket","Location":"oss-cn-hangzhou","Object":"image_01.png"},"WaterMarkTemplateId":"9b772ce2740d4d55876d8b542d47****"}],"UserData":"testid-001"}]`
     */
    "Outputs": string;
    /**
     * 输出文件所在的OSS Bucket。
     * - 遵守OSS Bucket定义，更多信息请参见[基本概念](~~31827~~)。
     * @example `exampleBucket`
     */
    "OutputBucket": string;
    /**
     * 输出文件所在的OSS Bucket的地域（OSS Region）。
     * - OSS Bucket必须与媒体处理服务在同一个地域。
     * - 遵守OSS Bucket定义，更多信息请参见[基本概念](~~31827~~)。
     * @example `oss-cn-hangzhou`
     */
    "OutputLocation"?: string;
    /**
     * 管道ID。更多信息，请参见[基本概念](~~31827~~)。
     * - 可以通过[MPS控制台](https://mps.console.aliyun.com/overview) > **全局设置** > **管道及回调**查询。
     * - 如果需要异步通知，请为管道绑定MNS消息。详细操作，请参见<props="china">[接收消息通知](https://help.aliyun.com/document_detail/42618.html)</props><props="intl">[接收消息通知](https://www.alibabacloud.com/help/zh/apsaravideo-for-media-processing/latest/receive-message-notifications)</props>。
     * @example `dd3dae411e704030b921e52698e5****`
     */
    "PipelineId": string;
}
