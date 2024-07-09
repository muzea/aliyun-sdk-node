export interface SubmitSnapshotJobRequest {
    /**
     * 作业输入。详细说明请参见[Input详情](~~29253#section-f3p-d24-y2b~~)。
     * > - 在媒体处理API中，Object必须经过[URL Encoding](~~423796~~)（基于UTF-8编码）后使用。
     *    - OSS的地域需要与当前MPS所在地域保持一致。
     * @example `{"Bucket":"example-bucket","Location":"example-location","Object":"example%2Ftest.flv"}`
     */
    "Input": string;
    /**
     * 截图配置。详细说明，请参见[SnapshotConfig参数详情](~~29253#section-zh2-324-y2b~~)。
     * @example `{"OutputFile":{"Bucket":"example-001","Location":"example-location","Object":"{Count}.jpg"},"Time":"5","Num":"10","Interval":"20"}`
     */
    "SnapshotConfig": string;
    /**
     * 用户自定义数据。支持中英文、数字、短划线（-），不能以特殊字符开头，最大长度1024个字节。
     * @example `testid-001`
     */
    "UserData"?: string;
    /**
     * 管道ID，详细说明，请参见[基本概念](~~29197~~)。
     * - 可选值：可以通过[MPS控制台](https://mps.console.aliyun.com/overview) > **全局设置** > **管道**查询和创建管道。
     * - 如果需要异步通知，请为管道绑定MNS消息，具体请参见<props="china">[接收消息通知](https://help.aliyun.com/document_detail/42618.html)</props><props="intl">[接收消息通知](https://www.alibabacloud.com/help/zh/apsaravideo-for-media-processing/latest/receive-message-notifications)</props>。
     * @example `dd3dae411e704030b921e52698e5****`
     */
    "PipelineId"?: string;
}
