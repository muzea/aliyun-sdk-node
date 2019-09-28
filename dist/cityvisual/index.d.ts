interface CITYVISUAL {
    /**
    * 调用DeleteResourceProfile删除指定的计算资源配置。
    */ DeleteResourceProfile(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 资源参数集ID。
        * @example `4`
        */ "ResourceProfileId": string;
    }): Promise<{}>;
    /**
    * 调用ModifyWorkGroup修改接流工作组信息。
    */ ModifyWorkGroup(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 接流工作组描述。
        * @example `描述信息`
        */ "Description"?: string;
        /**
        * 接流工作组ID。
        * @example `234362`
        */ "WorkGroupId": string;
    }): Promise<{}>;
    /**
    * 调用ListComputeJobLogs获取计算日志名称列表。
    */ ListComputeJobLogs(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 计算工作组下指定计算Job的ID。
        * @example `173`
        */ "ComputeJobId": string;
        /**
        * 计算工作组ID。
        * @example `63`
        */ "JobGroupId": string;
    }): Promise<{}>;
    /**
    * 调用DeleteAlgoLib删除指定的算法库。
    */ DeleteAlgoLib(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 算法库ID。
        * @example `842`
        */ "AlgoLibId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeJobGroups获取已创建的计算工作组信息。
    */ DescribeJobGroups(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 分页查询时设置的每页行数。最大值：100。
        * 默认值：10。
        * @example `10`
        */ "PageSize": number;
        /**
        * 实例ID。
        * @example `cityvisual-Instance`
        */ "InstanceId": string;
        /**
        * 计算工作组ID。
        * @example `4`
        */ "JobGroupId"?: string;
        /**
        * 计算工作组列表的页码。起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber": number;
    }): Promise<{}>;
    /**
    * 调用DescribeCapabilities获取已创建的算法库能力集信息。
    */ DescribeCapabilities(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 算法库能力集列表的页码。起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 实例ID。
        * @example `cityvisual-xxxxx`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用CreateCapability创建算法库能力集。
    */ CreateCapability(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 实例ID。
        * @example `cityvisual-xxxxx`
        */ "InstanceId": string;
        /**
        * 算法库能力集名称。
        * @example `PERSON`
        */ "CapabilityName": string;
    }): Promise<{}>;
    /**
    * 调用ModifyCapability修改算法库能力集。
    */ ModifyCapability(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 算法库能力集ID。
        * @example `261`
        */ "CapabilityId": string;
        /**
        * 算法库能力集名称。
        * @example `PERSON`
        */ "CapabilityName": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    /**
    * 调用BatchModifyCameraStatus批量修改点位状态。
    */ BatchModifyCameraStatus(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 视频点位ID。
        * 取值可以由多个视频点位ID组成一个JSON数组，ID之间用半角逗号（,）隔开。
        * @example `["xxxxxxxxx", "yyyyyyyyy", … "zzzzzzzzz"]`
        */ "CameraIds": string;
        /**
        * 接流工作组ID。
        * @example `123`
        */ "WorkGroupId": string;
        /**
        * 待修改的视频点位状态。 取值范围：
        * *	ON_LINE: 接流
        * *	OFF_LINE: 断流
        * @example `ON_LINE`
        */ "StreamStatus": string;
    }): Promise<{}>;
    /**
    * 调用AttachStream给指定的计算工作组绑定Stream。
    */ AttachStream(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "Streams": string[];
        /**
        * 计算工作组的ID。
        * @example `4`
        */ "JobGroupId": string;
        /**
        * 实例ID。
        * @example `cityvisual-xxxxx`
        */ "InstanceId"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateJobGroup创建计算工作组信息。
    */ CreateJobGroup(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 资源参数集ID。
        * @example `6`
        */ "ResourceProfileId": string;
        /**
        * 算法库ID，
        * @example `3`
        */ "AlgoLibId": string;
        /**
        * 期望Job数量。
        * @example `10`
        */ "PlanedJobCount": number;
        /**
        * Job下视频流数量。
        * @example `5`
        */ "StreamPerJob": number;
        /**
        * 实例ID。
        * @example `cityvisual-Instance`
        */ "InstanceId": string;
        "JobGroupParams": string[];
        /**
        * Job数量。
        * @example `3`
        */ "JobCount"?: number;
        /**
        * 工作组名称。
        * @example `JobGroupName`
        */ "JobGroupName": string;
    }): Promise<{}>;
    /**
    * 调用CreateInstance创建一个实例。
    */ CreateInstance(query: {
        /**
        * 所属的地域ID。您可以调用DescribeRegions查看最新的阿里云地域列表。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 实例规格,指视频点位接入路数。
        * @example `20`
        */ "InstanceCapacity": number;
        /**
        * 实例名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
        * @example `ShangHai`
        */ "InstanceName"?: string;
        /**
        * 实例描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
        * @example `SHInstance`
        */ "Description"?: string;
        /**
        * 实例状态，取值范围：
        * * Running    运行中
        * * Stopped 已停止
        * @example `Running`
        */ "Status"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteWorkGroup删除指定的接流工作组。
    */ DeleteWorkGroup(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 工作组ID。
        * @example `2352`
        */ "WorkGroupId": string;
    }): Promise<{}>;
    /**
    * 调用GetComputeJobLog获取计算Job日志。
    */ GetComputeJobLog(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 计算工作组下指定的JobID。
        * @example `37`
        */ "JobId": string;
        /**
        * 日志名称。
        * @example `xxx.log`
        */ "JobLogName": string;
        /**
        * 日志大小。
        * @example `100`
        */ "Size"?: number;
        /**
        * 计算工作组ID。
        * @example `101`
        */ "JobGroupId": string;
    }): Promise<{}>;
    /**
    * 调用CreateResourceProfile创建计算资源配置信息。
    */ CreateResourceProfile(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 实例ID。
        * @example `cityvisual-Instance`
        */ "InstanceId": string;
        "ResourceProfileParams": string[];
        /**
        * 计算资源配置名称。
        * 长度为`[2,128]`个英文或中文字符。必须以大小字母或中文开头，不能以http:// 和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `name`
        */ "ResourceProfileName": string;
    }): Promise<{}>;
    /**
    * 调用DescribeStreams获取指定的计算工作组已绑定的视频流。
    */ DescribeStreams(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 视频流列表的页码。起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 关联的计算工作组ID。
        * @example `51`
        */ "JobGroupId": string;
    }): Promise<{}>;
    /**
    * 调用ModifyAlgoLib修改算法库信息。
    */ ModifyAlgoLib(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 算法库名称。
        * @example `AlgoLibName`
        */ "AlgoLibName"?: string;
        /**
        * 算法库版本。
        * @example `1.0.0`
        */ "AlgoLibVersion"?: string;
        /**
        * 算法库计算容量，对应视频路数。
        * @example `30`
        */ "Capacity"?: number;
        /**
        * 算法包所在OSS的Endpoint。
        * @example `oss-cn-shanghai-internal.aliyuncs.com`
        */ "OssEndpoint"?: string;
        /**
        * 算法包所在OSS的AccessKey ID。
        * @example `LTAI********CSXJ`
        */ "OssAccessKeyId"?: string;
        /**
        * 算法包所在OSS的存储空间Bucket名称。
        * @example `bucket`
        */ "OssBucket"?: string;
        /**
        * 算法包在OSS中的相对路径。
        * @example `library/xxxx.tar.gz`
        */ "OssPath"?: string;
        /**
        * Json格式的字符串。
        * @example `[{      "objType": "person",      "dbTableName": "person_offline_result",      "indexName": "person_offline_index",      "indexMode": "INDEX_PER_DAY",      "topicName": "person_offline",      "fields": [{          "name": "cameraId",          "type": "string",          "mandatory": true,          "isDatabaseField": true,          "isSearchEngineField": true,          "isMessageQueueField": true      }, {          "name": "objType",          "type": "string",          "mandatory": true,          "isDatabaseField": true,          "isSearchEngineField": true,          "isMessageQueueField": true      }, {          "name": "fileId",          "type": "string",          "mandatory": false,          "isDatabaseField": true,          "isSearchEngineField": true,          "isMessageQueueField": true      }  ]  }]`
        */ "JsonText"?: string;
        /**
        * 能力集名称。
        * @example `PERSON`
        */ "CapabilityNames"?: string;
        /**
        * 算法包所在OSS的AccessKey Secret。
        * @example `etyDr0EZnf9NQ*************isN0`
        */ "OssAccessKeySecret"?: string;
        /**
        * 算法库的配置信息，jsonText的文本形式。
        * @example `xxx`
        */ "Text"?: string;
        /**
        * 算法库ID。
        * @example `84`
        */ "AlgoLibId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    /**
    * 调用StopJobGroup停止指定的计算工作组。
    */ StopJobGroup(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 计算工作组的ID。
        * @example `4`
        */ "JobGroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    /**
    * 调用StartJobGroup启动指定的计算工作组。
    */ StartJobGroup(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 计算工作组的ID。
        * @example `4`
        */ "JobGroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyCamera修改视频点位信息。
    */ ModifyCamera(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 视频点位名称。
        * 长度为`[2,128]`个英文或中文字符。必须以大小字母或中文开头，不能以http:// 和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `CameraName`
        */ "CameraName"?: string;
        /**
        * 视频点位经纬度坐标
        * @example `{"latitude":"30.245853","longitude":"120.209947"}`
        */ "LocationInfo"?: string;
        /**
        * 实时视频点位网络url。
        * @example `320599500@xxx`
        */ "InviteUri"?: string;
        /**
        * 视频点位ID，指定待修改的视频点位。
        * @example `003_2`
        */ "CameraId": string;
        /**
        * 视频点位状态：
        * - **ON_LINE**: 在线
        * - **OFF_LINE**: 离线
        * @example `ON_LINE`
        */ "StreamStatus"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeInstances查询一个或多个实例的详细信息。
    */ DescribeInstances(query: {
        /**
        * 实例所属的地域ID。您可以调用DescribeRegions查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 实例名称，支持使用通配符*进行模糊搜索。
        * @example `*Joshua`
        */ "InstanceName"?: string;
        /**
        * 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
        * @example `["cityvisual-xxxxxxxxx", "cityvisual-yyyyyyyyy", … "cityvisual-zzzzzzzzz"]`
        */ "InstanceIds"?: string;
        /**
        * 实例状态列表的页码。起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeResourceProfiles获取已创建的计算资源配置信息。
    */ DescribeResourceProfiles(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 资源参数集列表的页码。起始值：**1**。
        * 默认值：**1** 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：**100**。
        * 默认值：**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 资源参数集ID。
        * @example `3`
        */ "ResourceProfileId"?: string;
        /**
        * 实例ID。
        * @example `cityvisual-Instance`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用CreateCamera创建视频点位信息。
    */ CreateCamera(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 工作组ID。
        * @example `511`
        */ "WorkGroupId": string;
        /**
        * 视频点位ID。
        * @example `003_2`
        */ "CameraId": string;
        /**
        * 实例ID。
        * @example `cityvisual-xxxx`
        */ "InstanceId": string;
        /**
        * 视频点位经纬度坐标。
        * @example `{"latitude":"30.245853","longitude":"120.209947"}`
        */ "LocationInfo"?: string;
        /**
        * 实时视频点位网络url。
        * @example `002_1`
        */ "InviteUri"?: string;
        /**
        * 离线视频文件的OSS地址。
        * @example `https://cityvisual.oss-cn-shanghai.aliyuncs.com/xxx.mp4`
        */ "OssPath"?: string;
        /**
        * 视频点位名称。
        * @example `name`
        */ "CameraName": string;
    }): Promise<{}>;
    /**
    * 调用DeleteCapability删除指定的算法库能力集。
    */ DeleteCapability(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 算法库能力集ID。
        * @example `262`
        */ "CapabilityId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeRegions查询您可以使用的阿里云地域。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        /**
        * 根据汉语、英语筛选返回结果。取值范围：
        * - zh-CN：中文
        * - en-US：英文
        * 默认值：zh-CN。
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyResourceProfile修改资源参数集。
    */ ModifyResourceProfile(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 资源参数集名称。
        * 长度为`[2,128]`个英文或中文字符。必须以大小字母或中文开头，不能以http:// 和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `name`
        */ "ResourceProfileName"?: string;
        "InstanceId"?: string;
        "ResourceProfileParams"?: string[];
        /**
        * 待修改的资源参数集ID。
        * @example `3`
        */ "ResourceProfileId": string;
    }): Promise<{}>;
    /**
    * 调用ModifyInstance修改实例。
    */ ModifyInstance(query: {
        /**
        * 地域ID
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 实例名称
        * @example `实例名称`
        */ "InstanceName"?: string;
        /**
        * 实例描述
        * @example `实例描述`
        */ "Description"?: string;
        /**
        * 实例状态，取值范围：
        * * Running    运行中
        * * Stopped 已停止
        * @example `Running`
        */ "Status"?: string;
        /**
        * 实例ID
        * @example `cityvisual-Instance`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用ModifyJobGroup修改计算工作组信息。
    */ ModifyJobGroup(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * JobGroup名称。
        * 长度为`[2,128]`个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `JobGroupName`
        */ "JobGroupName"?: string;
        /**
        * 资源参数集ID。
        * @example `23`
        */ "ResourceProfileId"?: string;
        /**
        * 算法库ID。
        * @example `2`
        */ "AlgoLibId"?: string;
        /**
        * 期望的计算Job数量。
        * @example `10`
        */ "PlanedJobCount"?: number;
        /**
        * 计算Job处理的视频流数量。
        * @example `5`
        */ "StreamPerJob"?: number;
        /**
        * 实际计算Job数量。
        * @example `3`
        */ "JobCount"?: number;
        "JobGroupParams"?: string[];
        /**
        * JobGroup状态。取值范围：
        * *	Running: 运行中
        * *	Stopped: 已停止
        * @example `Running`
        */ "Status"?: string;
        /**
        * 待修改的JobGroup的ID。
        * @example `3`
        */ "JobGroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeProtocols获取已支持的工作组协议。
    */ DescribeProtocols(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeCameras获取已创建的视频点位信息。
    */ DescribeCameras(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 视频点位列表的页码。起始值：1。
        * 默认值：**1** 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100。
        * 默认值：**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 视频点位ID。
        * @example `003_2`
        */ "CameraId"?: string;
        /**
        * 视频点位名称。
        * @example `name`
        */ "CameraName"?: string;
        /**
        * 视频点位状态：
        * - **ON_LINE**: 在线
        * - **OFF_LINE**: 离线
        * @example `ON_LINE`
        */ "StreamStatus"?: string;
        /**
        * 接流工作组ID。
        * @example `283`
        */ "WorkGroupId"?: string;
        /**
        * 实例ID。
        * @example `cityvisual-InstanceId`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用SearchImages搜索图片。
    */ SearchImages(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 实例ID。
        * @example `cityvisual-xxxxxx`
        */ "InstanceId": string;
        /**
        * 返回结果在查询结果集中的偏移量，默认为**0**。
        * @example `0`
        */ "From"?: number;
        /**
        * 图像内容，base64 编码，多个用","隔开。
        * > 当**NoFeature**值为**False**时，为必选项。
        * @example `/9j/4AAQSkZJRgABAQAAAQABAAD/2wB...`
        */ "Contents"?: string;
        /**
        * 查询范围起始时间戳 (毫秒)，
        * 13 位， 如1553734800000。
        * @example `1553734800000`
        */ "StartTime"?: string;
        /**
        * 查询类型。根据算法不同查询不同的类型，天擎算法查询类型示例:
        * - person(行人)
        * - bicycle (非机动⻋)
        * - vehicle(机动⻋)
        * @example `person`
        */ "Type"?: string;
        /**
        * 查询范围结束时间戳 (毫秒)，
        * 13 位， 如1553756400000。
        * @example `1553735800000`
        */ "EndTime"?: string;
        /**
        * 支持使用多个目标id查询，实现渐进性查询。
        * id与id之间用逗号“,”隔开，如:”001,002”,
        * 查询的结果是与001和002两个目标共同相似度最高的图像。
        * @example `001,002`
        */ "ImageIds"?: string;
        /**
        * 摄像头点位id，支持多点位查询。
        * 各个点位之间用逗号"," 隔开，如"0001,0002", 查询摄像头0001和0002下的目标。
        * @example `003_2`
        */ "CameraIds"?: string;
        "Attribute"?: string[];
        /**
        * "True"表示不用特征匹配查询，纯属性或id 查询， "False"表示使用特征查询。
        * @example `True`
        */ "NoFeature"?: string;
        /**
        * 返回结果数量，默认为**10**。
        * @example `100`
        */ "Size": number;
    }): Promise<{}>;
    /**
    * 调用CreateAlgoLib创建算法库。
    */ CreateAlgoLib(query: {
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
    }): Promise<{}>;
    /**
    * 调用DetachStream给指定的计算工作组解绑视频流。
    */ DetachStream(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "Streams": string[];
        /**
        * 计算工作组ID。
        * @example `63`
        */ "JobGroupId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeAlgoLibs获取已创建的算法库信息。
    */ DescribeAlgoLibs(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 算法库名称。
        * @example `name`
        */ "AlgoLibName"?: string;
        /**
        * 算法库能力集，多个能力集用半角“,”隔开。
        * @example `PERSON,FACE`
        */ "CapabilityName"?: string;
        /**
        * 算法库列表的页码。起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：100。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 算法库ID。
        * @example `372`
        */ "AlgoLibId"?: string;
        /**
        * 实例ID。
        * @example `351`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用DeleteJobGroup删除指定的计算工作组。
    */ DeleteJobGroup(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 计算工作组ID。
        * @example `3`
        */ "JobGroupId": string;
        "InstanceId"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteInstance释放一台到期的预付费（包年包月）实例。
    */ DeleteInstance(query: {
        /**
        * 地域ID
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 实例ID
        * @example `cityvisual-instance1`
        */ "InstanceId": string;
    }): Promise<{}>;
    CreateWorkGroup(query: {
        "RegionId"?: string;
        "Protocol": string;
        "JobNum": number;
        "InstanceId": string;
        "TheoryCutStatus"?: string;
        "Description"?: string;
        "TopicNum"?: number;
        "TopicPrefix"?: string;
        "Account"?: string;
        "Password"?: string;
        "Ip"?: string;
        "Port"?: number;
        "WorkGroupName": string;
    }): Promise<{}>;
    DeleteCamera(query: {
        "RegionId"?: string;
        "CameraId": string;
    }): Promise<{}>;
    DescribeWorkGroups(query: {
        "RegionId"?: string;
        "PageNumber"?: number;
        "PageSize"?: number;
        "WorkGroupId"?: string;
        "InstanceId": string;
    }): Promise<{}>;
    ListStreamsForCameras(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "CameraIds": string;
    }): Promise<{}>;
}
export default CITYVISUAL;
