interface DeleteTopicRequest {
    /**
    * 实例所属的地域 ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * Topic 的名称。
    * - 只能包含字母、数字、下划线（_）和短横线（-）。
    * - 长度为 3-64 个字符，多于 64 个字符将被自动截取。
    * - 一旦创建后不能再修改。
    * @example `Kafkatest`
    */ "Topic": string;
    /**
    * 实例 ID。
    * 可调用 [GetInstanceList](https://help.aliyun.com/document_detail/94533.html?spm=a2c4g.11186623.2.14.539f69b1wPqd3v#concept-94533-zh) 获取。
    * @example `alikafka_post-cn-mp91a44k3002`
    */ "InstanceId": string;
}
export { DeleteTopicRequest };