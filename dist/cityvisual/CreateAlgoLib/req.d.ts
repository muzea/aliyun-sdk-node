interface CreateAlgoLibRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 算法库版本。
    * @example `1.0.0`
    */ "AlgoLibVersion": string;
    /**
    * 算法包所在OSS的Endpoint。
    * @example `oss-cn-shanghai-internal.aliyuncs.com`
    */ "OssEndpoint": string;
    /**
    * 算法包所在OSS的AccessKey ID。
    * @example `LTAI********CSXJ`
    */ "OssAccessKeyId": string;
    /**
    * 算法包所在OSS的存储空间Bucket名称。
    * @example `bucket`
    */ "OssBucket": string;
    /**
    * 算法包在OSS中的相对路径。
    * @example `library/xxxx.tar.gz`
    */ "OssPath": string;
    /**
    * 算法库配置参数，Json格式的字符串。
    * @example `[{      "objType": "person",      "dbTableName": "person_offline_result",      "indexName": "person_offline_index",      "indexMode": "INDEX_PER_DAY",      "topicName": "person_offline",      "fields": [{          "name": "cameraId",          "type": "string",          "mandatory": true,          "isDatabaseField": true,          "isSearchEngineField": true,          "isMessageQueueField": true      }, {          "name": "objType",          "type": "string",          "mandatory": true,          "isDatabaseField": true,          "isSearchEngineField": true,          "isMessageQueueField": true      }, {          "name": "fileId",          "type": "string",          "mandatory": false,          "isDatabaseField": true,          "isSearchEngineField": true,          "isMessageQueueField": true      }  ]  }]`
    */ "JsonText": string;
    /**
    * 能力集名称，多个能力集用半角“,”隔开。
    * @example `PERSON,FACE`
    */ "CapabilityNames": string;
    /**
    * 算法包所在OSS的AccessKey Secret。
    * @example `etyDr0EZnf9NQ*************isN0`
    */ "OssAccessKeySecret": string;
    /**
    * 算法库的配置信息，jsonText的文本形式。
    * @example `xxx`
    */ "Text": string;
    /**
    * 实例ID。
    * @example `cityvisual-****`
    */ "InstanceId": string;
    /**
    * 算法库计算容量，对应视频路数。
    * @example `30`
    */ "Capacity"?: number;
    /**
    * 算法库名称。
    * @example `name`
    */ "AlgoLibName": string;
}
export { CreateAlgoLibRequest };