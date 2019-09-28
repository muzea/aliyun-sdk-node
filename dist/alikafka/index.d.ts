interface ALIKAFKA {
    /**
    * 调用 CreateConsumerGroup 创建 Consumer Group。
    */ CreateConsumerGroup(query: {
        /**
        * 地域 ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * Consumer Group 名称。
        * - 只能包含字母、数字、短横线（-）、下划线（_）。
        * - 长度限制在 **3-64** 个字符，多于 **64** 个字符将被自动截取。
        * - 一旦创建后不能再修改。
        * @example `consumer_group_test`
        */ "ConsumerId": string;
        /**
        * 实例 ID。可调用 [GetInstanceList](https://help.aliyun.com/document_detail/94533.html?spm=a2c4g.11186623.2.11.6efb754byCLl4z#concept-94533-zh) 获取。
        * @example `alikafka_pre-cn-0pp1954n****`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用 GetConsumerProgress 查询 Consumer Group 的消费状态。
    */ GetConsumerProgress(query: {
        /**
        * 地域 ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * Consumer Group ID。
        * @example `kafka-test`
        */ "ConsumerId": string;
        /**
        * 实例 ID。
        * @example `alikafka_pre-cn-mp919o4v****`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用 CreateTopic 创建 Topic。
    */ CreateTopic(query: {
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
    }): Promise<{}>;
    /**
    * 调用 GetInstanceList 获取您在某地域下所购买的实例的信息。
    */ GetInstanceList(query: {
        /**
        * 实例所属的地域 ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
    }): Promise<{}>;
    /**
    * 调用 GetTopicStatus 获取 Topic 的消息收发数据。
    */ GetTopicStatus(query: {
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
    }): Promise<{}>;
    /**
    * 调用 GetConsumerList 获取 Consumer Group 列表。
    */ GetConsumerList(query: {
        /**
        * 地域 ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例 ID。
        * @example `alikafka_post-cn-v0h18sav****`
        */ "InstanceId": string;
        "PageSize"?: string;
        "CurrentPage"?: string;
    }): Promise<{}>;
    /**
    * 调用 GetTopicList 获取 Topic 的列表。
    */ GetTopicList(query: {
        /**
        * 地域 ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * @example `当前页面。`
        */ "CurrentPage"?: string;
        /**
        * @example `页面大小。`
        */ "PageSize"?: string;
        /**
        * 实例 ID。
        * @example `alikafka_pre-cn-0pp1954n2003 `
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用 DeleteTopic 删除 Topic。
    */ DeleteTopic(query: {
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
    }): Promise<{}>;
    /**
    * 调用 DeleteConsumerGroup 删除 ConsumerGroup。
    */ DeleteConsumerGroup(query: {
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
    }): Promise<{}>;
    GetAllInstanceIdList(query: {
        "RegionId"?: string;
    }): Promise<{}>;
}
export default ALIKAFKA;
