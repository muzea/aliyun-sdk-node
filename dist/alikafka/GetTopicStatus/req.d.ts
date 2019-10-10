interface GetTopicStatusRequest {
    "RegionId"?: string;
    /**
    * 实例 ID。
    * 可调用 [GetInstanceList](https://help.aliyun.com/document_detail/94533.html)获取。
    * @example `alikafka_pre-cn-v0h15tjmo003 `
    */ "InstanceId": string;
    /**
    * Topic 名称。
    * 可调用 [GetTopicList](https://help.aliyun.com/document_detail/94533.html?spm=a2c4g.11186623.2.11.5e374db4Cw7zT7#concept-94533-zh) 获取。
    * @example `normal_topic_9d034262835916103455551be06cc2dc_6`
    */ "Topic": string;
}
export { GetTopicStatusRequest };