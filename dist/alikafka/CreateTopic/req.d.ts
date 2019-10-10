interface CreateTopicRequest {
    /**
    * 实例所属的地域 ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * Topic 的名称。
    * - 只能包含字母、数字、下划线（_）和短横线（-）。
    * - 长度为 3-64 个字符，多于 64 个字符将被自动截取。
    * - 一旦创建后不能再修改。
    * @example `alikafka_topic_test`
    */ "Topic": string;
    /**
    * Topic 的备注。
    * 限制 64 个字符。
    * @example `alikafka_topic_test`
    */ "Remark": string;
    /**
    * 实例 ID。
    * 可调用 [GetInstanceList](https://help.aliyun.com/document_detail/94533.html?spm=a2c4g.11186623.2.12.774c7dc8F5cWRE#concept-94533-zh) 获取。
    * @example `alikafka_pre-cn-mp919o4v****`
    */ "InstanceId": string;
    "CompactTopic"?: boolean;
    "PartitionNum"?: string;
    "LocalTopic"?: boolean;
}
export { CreateTopicRequest };