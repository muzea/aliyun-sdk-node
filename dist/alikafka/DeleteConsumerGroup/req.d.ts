interface DeleteConsumerGroupRequest {
    /**
    * 地域 ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * Consumer Group 名称。
    * - 只能包含字母、数字、短横线（-）、下划线（_）。
    * - 长度限制在 3-64 个字符，多于 64 个字符将被自动截取。
    * - 一旦创建后不能再修改。
    * @example `testconsumer`
    */ "ConsumerId": string;
    /**
    * 实例 ID。
    * 可调用 [GetInstanceList](https://help.aliyun.com/document_detail/94533.html?spm=a2c4g.11186623.2.13.50a75a5f5ediNK#concept-94533-zh) 获取。
    * @example `alikafka_post-cn-mp91a44k****`
    */ "InstanceId": string;
}
export { DeleteConsumerGroupRequest };