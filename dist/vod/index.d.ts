interface VOD {
    /**
    * 调用CreateAppInfo创建新的应用。
    */ CreateAppInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ResourceRealOwnerId"?: number;
        /**
        * 应用名称，不能重复。最多包含128个字符或汉字，UTF-8编码。格式：`^[a-zA-Z0-9.@-\u4e00-\u9fa5]+$`。
        * @example `test`
        */ "AppName"?: string;
        /**
        * 应用描述，最多支持512个字符或汉字，UTF-8编码。
        * @example `myfirstapp`
        */ "Description"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteTranscodeTemplateGroup删除转码配置信息，可删除转码模板组下的部分转码模板，也可强制删除整个转码模板组。
    */ DeleteTranscodeTemplateGroup(query: {
        "RegionId"?: string;
        /**
        * 转码模板组ID。
        * @example `4c71a339fecec0152b4fa6f4527xxx`
        */ "TranscodeTemplateGroupId": string;
        "OwnerId"?: number;
        /**
        * 需要删除的转码模板ID列表。ID以英文逗号分隔，最大支持10个模板ID。
        * > **DeleteMode**取值**DeleteTranscodeTemplate**时，该参数必传。
        * @example `["dddddd","ffffff"]`
        */ "TranscodeTemplateIds"?: string;
        /**
        * 是否强制删除整个转码模板组。取值：
        * - **true**：删除整个模板组及其转码模板列表。
        * - **false（默认）**：只删除指定的转码模板。
        * @example `true`
        */ "ForceDelGroup"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateAITemplate修改AI模板。
    */ UpdateAITemplate(query: {
        "RegionId"?: string;
        /**
        * 模板名称，最大128字节。
        * @example `test`
        */ "TemplateName": string;
        /**
        * 模板详细配置。
        * @example `XXXXX`
        */ "TemplateConfig": string;
        /**
        * 模板ID。
        * @example `XXXXX`
        */ "TemplateId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用RefreshVodObjectCaches刷新节点上的文件内容。指定URL内容刷新至Cache节点，支持URL批量刷新。支持post请求，参数用form表单。
    */ RefreshVodObjectCaches(query: {
        "RegionId"?: string;
        /**
        * 输入示例：abc.com/image/1.png，多个URL用换行符（\n或\r\n）分隔。
        * @example `abc.com/image/1.png`
        */ "ObjectPath": string;
        "OwnerId"?: number;
        /**
        * 刷新的类型。取值范围：
        * - File（默认值）
        * - Directory
        * @example `File`
        */ "ObjectType"?: string;
    }): Promise<{}>;
    /**
    * 调用SetDefaultWatermark设置默认水印。
    */ SetDefaultWatermark(query: {
        "RegionId"?: string;
        /**
        * 水印ID。
        * @example `9bcc8bfadb843f475c109a2671d0df97`
        */ "WatermarkId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteAITemplate删除AI模板。
    */ DeleteAITemplate(query: {
        "RegionId"?: string;
        /**
        * 模板ID。
        * @example `XXXXX`
        */ "TemplateId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用AttachAppPolicyToIdentity为指定身份（RAM用户或角色）附加点播应用的访问权限。
    */ AttachAppPolicyToIdentity(query: {
        "RegionId"?: string;
        /**
        * - 类型为RamUser时，传入RAM子账号ID。
        * - 类型为RamRole时，传入角色名称。
        * @example `xxxx`
        */ "IdentityName": string;
        /**
        * 策略名称。多个用英文逗号分隔。
        * 暂时只支持设置为系统策略，可选值：**VODAppFullAccess**，**VODAppReadOnlyAccess**，**VODAppAdministratorAccess**。
        * @example `VODAppFullAccess`
        */ "PolicyNames": string;
        /**
        * 应用ID。
        * > 当策略名称为VODAppAdministratorAccess时，该字段非必选，其他策略时，该字段必填。
        * @example `app-xxxxx`
        */ "AppId"?: string;
        /**
        * 身份类型。取值：**RamUser**（RAM子账号）, **RamRole**（RAM角色）。
        * @example `RamRole`
        */ "IdentityType": string;
        "OwnerId"?: number;
        "ResourceRealOwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteMessageCallback删除事件通知的回调方式、回调地址、事件类型。
    */ DeleteMessageCallback(query: {
        "RegionId"?: string;
        /**
        * 应用ID，不传时为系统默认应用的ID，即**app-1000000**。
        * @example `app-1000000`
        */ "AppId"?: string;
        "OwnerId"?: string;
        /**
        * 资源所有者ID。
        * @example `574`
        */ "ResourceRealOwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用GetCategories获取指定的分类信息，及其子分类（即下一级分类）的列表。
    */ GetCategories(query: {
        "RegionId"?: string;
        "OwnerId"?: string;
        /**
        * 分类ID，默认为根节点分类ID，即**-1**。
        * @example `49339`
        */ "CateId"?: number;
        /**
        * 子分类列表页号，默认值为**1**。
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 子分类列表页大小，默认值为**10**，最大值为**100**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 排序字段和排序顺序，多个用逗号分隔。按创建时间排序。取值范围：
        * - **CreationTime:Desc**
        * - **CreationTime:Asc**
        * > 排序字段示例：[排序字段](https://help.aliyun.com/document_detail/99179.html?spm=a2c4g.11186623.2.20.7e036ad8dnvm2w#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)。
        * 获取搜索条件是前5000条的数据时，最多支持三个排序字段。
        * 获取搜索条件是所有数据时，仅支持一个排序字段。
        * @example `CreationTime:Desc`
        */ "SortBy"?: string;
        /**
        * 素材片段类型。取值：
        * - **Video（默认值）**：视频
        * - **Image**：图片
        * @example `Video`
        */ "Type"?: string;
    }): Promise<{}>;
    /**
    * 调用GetTranscodeSummary根据视频ID查询视频转码摘要，包括视频转码状态、转码进展等汇总信息。由于可能存在多次转码，故该接口只返回最近一次的转码摘要。
    */ GetTranscodeSummary(query: {
        "RegionId"?: string;
        /**
        * 视频ID，多个用英文逗号分隔，最多支持10个。
        * @example `"ddddddddd,ggggggg,hhhhhhh"`
        */ "VideoIds": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateVideoInfos批量修改视频信息。
    */ UpdateVideoInfos(query: {
        "RegionId"?: string;
        /**
        * 更新内容。一次最多支持修改20个视频的视频信息。
        * @example `[{"VideoId":"f45cf4eba5c84d25b90233389558c39","Title":"测试标题","Description":"测试描述","CoverURL":"http://sample.aliyun.com/sample.jpg","CateId":"6163631","Tags":"测试标签"},{"VideoId":"f45cf4eba5c84d25b90233389558c36","Title":"测试标题","Description":"测试描述","CoverURL":"http://sample.aliyun.com/sample.jpg","CateId":"6163631","Tags":"测试标签"}]`
        */ "UpdateContent": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeVodDomainConfigs查询域名配置，一次可查询多个功能配置。
    */ DescribeVodDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 点播加速域名。
        * @example `www.example.com`
        */ "DomainName": string;
        /**
        * 功能列表名称，多个用英文逗号分隔。
        * @example `filetype_based_ttl_set,set_req_host_header`
        */ "FunctionNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用GetTranscodeTask根据转码任务ID查询转码作业详细信息。
    */ GetTranscodeTask(query: {
        "RegionId"?: string;
        /**
        * 转码任务ID。
        * @example `ttttttt`
        */ "TranscodeTaskId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateAppInfo更新应用信息。
    */ UpdateAppInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ResourceRealOwnerId"?: number;
        /**
        * 应用ID。
        * @example `app-xxxxxx`
        */ "AppId"?: string;
        /**
        * 应用名称，最多包含128个字符或汉字，UTF-8编码。格式：`^[a-zA-Z0-9.@-\u4e00-\u9fa5]+$`。
        * @example `test`
        */ "AppName"?: string;
        /**
        * 应用描述，最多支持512个字符或汉字，UTF-8编码。
        * @example `my first app.`
        */ "Description"?: string;
        /**
        * 应用状态，可选值：**Normal**(正常启用)，**Disable**(停用)。
        * @example `Disable`
        */ "Status"?: string;
    }): Promise<{}>;
    /**
    * 调用DetachAppPolicyFromIdentity为指定账号身份（RAM子账号或RAM角色）撤销指定的应用授权。
    */ DetachAppPolicyFromIdentity(query: {
        "RegionId"?: string;
        /**
        * - 类型为RamUser时，传入RAM子账号ID。
        * - 类型为RamRole时，传入角色名称。
        * @example `xxxxx`
        */ "IdentityName": string;
        /**
        * 策略名称，暂时只支持设置为系统策略，多个用英文逗号分隔。
        * 可选值：**VODAppFullAccess**，**VODAppReadOnlyAccess**，**VODAppAdministratorAccess**。
        * @example `VODAppFullAccess`
        */ "PolicyNames": string;
        /**
        * 应用ID。当策略名称为VODAppAdministratorAccess时，该字段非必选，其他策略时，该字段必填。
        * @example `app-xxxx`
        */ "AppId"?: string;
        /**
        * 身份类型，取值：**RamUser**（RAM子账号）, **RamRole**（RAM角色）。
        * @example `RamUser`
        */ "IdentityType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用PreloadVodObjectCaches将源站的内容主动预热到L2 Cache节点上，首次访问可直接命中缓存，缓解源站压力。支持post请求，参数用form表单。
    */ PreloadVodObjectCaches(query: {
        "RegionId"?: string;
        /**
        * 输入示例：a.com/image/1.png，多个URL间用换行符（\n或\r\n）分隔。
        * @example `vod.test.com/test.txt`
        */ "ObjectPath": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateVodTemplate修改截图模板。
    */ UpdateVodTemplate(query: {
        "RegionId"?: string;
        /**
        * 截图模板ID。
        * @example `ddddddddddddd`
        */ "VodTemplateId": string;
        "OwnerId"?: number;
        /**
        * 模板名称。长度不超过128个字节，UTF-8编码。
        * @example `test`
        */ "Name"?: string;
        /**
        * 截图模板配置数据。
        * @example `{"SnapshotConfig":{"Count":10,"SpecifiedOffsetTime":0,"Interval":1}`
        */ "TemplateConfig"?: string;
    }): Promise<{}>;
    /**
    * 调用GetAIVideoTagResult获取多模态内容理解结果。
    */ GetAIVideoTagResult(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `88c6ca184c0e47098a5b665exxxxx`
        */ "MediaId": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用SetMessageCallback设置事件通知的回调方式、回调地址、事件类型。
    */ SetMessageCallback(query: {
        "RegionId"?: string;
        /**
        * 回调方式选择HTTP时，回调地址。
        * @example `http://test.com`
        */ "CallbackURL"?: string;
        "OwnerId"?: string;
        "CallbackSwitch"?: string;
        /**
        * 回调方式，取值：**HTTP** | **MNS**。
        * @example `HTTP`
        */ "CallbackType"?: string;
        /**
        * 回调事件类型，为空时关闭所有消息通知，为ALL时开启全部消息通知。也可指定开启某些消息通知，多个用逗号分隔。取值：[事件类型](https://help.aliyun.com/document_detail/55627.html?spm=a2c4g.11186623.2.15.45eb7ca2afB9e2#MessageCallbackType)。
        * @example `FileUploadComplete`
        */ "EventTypeList"?: string;
        /**
        * 回调方式选择HTTP时，回调鉴权开关，取值：**on**（启用）、**off**（不启用）。
        * @example `on`
        */ "AuthSwitch"?: string;
        /**
        * 回调方式选择HTTP时，鉴权Key，最长32位，必须同时包含大小写字母和数字。
        * @example `dsf346dvet`
        */ "AuthKey"?: string;
        /**
        * 资源所有者ID。
        * @example `324`
        */ "ResourceRealOwnerId"?: number;
        /**
        * 回调方式选择MNS时，消息队列公网Endpoint。
        * @example `endpoint`
        */ "MnsEndpoint"?: string;
        /**
        * 回调方式选择MNS时，消息队列名称。
        * @example `quene_name`
        */ "MnsQueueName"?: string;
        /**
        * 应用ID，不传时为系统默认应用的ID，即**app-1000000**。
        * @example `app-1000000`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodRefreshQuota查询刷新预热URL及目录的最大限制数量和当日剩余数量。
    */ DescribeVodRefreshQuota(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribePlayTopVideos获取每日TOP视频的播放数据统计（包括VV、UV和播放总时长）。
    */ DescribePlayTopVideos(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 日期，UTC格式。
        * @example `2016-06-29T19:00:00Z`
        */ "BizDate": string;
        /**
        * 分页的页码，默认值：**1**。
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 每页大小，默认值为**100**，最大值为**1000**。
        * @example `100`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用GetURLUploadInfos获取URL上传信息。
    */ GetURLUploadInfos(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * JobId列表。多个用逗号分隔，最多支持10个。
        * @example `xxxxxxx`
        */ "JobIds"?: string;
        /**
        * 上传源视频URL列表。需URLencode，多个用逗号分隔，最多支持10个。如果同一URL视频多次上传，建议传入单个URL进行查询，最多返回100条记录。
        * > JobIds和UploadURLs必须指定一个，二者同时传入时只处理JobIds。
        * @example `http://xxx`
        */ "UploadURLs"?: string;
    }): Promise<{}>;
    /**
    * 调用SubmitSnapshotJob提交视频截图作业，开始异步截图处理。支持普通截图和雪碧图截图。
    */ SubmitSnapshotJob(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `d3e680e618708fef7cefbf2cae7cc931`
        */ "VideoId": string;
        "OwnerId"?: number;
        /**
        * 截图指定时间的起始点，单位：毫秒。默认值：**0**。
        * @example `0`
        */ "SpecifiedOffsetTime"?: number;
        /**
        * 截图宽，取值范围：`[8,4096]`，默认原片宽，单位：px。
        * @example `8`
        */ "Width"?: string;
        /**
        * 截图高，取值范围：`[8,4096]`，默认原片高，单位：px。
        * @example `8`
        */ "Height"?: string;
        /**
        * 截图的最大数量。默认值：**1**。
        * > **Count**和**Interval**至少指定一个，若同时指定，截图数目以少者为准。
        * @example `1`
        */ "Count"?: number;
        /**
        * 截图的间隔时间，必须**大于等于0**，单位：秒。其中，Interval为**0**表示按照Count数根据视频时长平均截图。默认值：**1**。
        * @example `1`
        */ "Interval"?: number;
        /**
        * 生成雪碧图的配置信息，如果不为空则生成雪碧图。
        * @example `{'CellWidth': 120, 'CellHeight': 68, 'Columns': 3,'Lines': 10, 'Padding': 20, 'Margin': 50}`
        */ "SpriteSnapshotConfig"?: string;
        /**
        * 截图模板ID，推荐先构建截图模板，再传递截图模板ID。
        * > 如果传递该参数，会忽略除**Action**、**VideoId**之外的请求参数。截图模板创建详细请参考[添加截图模板](https://help.aliyun.com/document_detail/99406.html?spm=a2c4g.11186623.2.17.a35d5f28WoLjDw)。
        * @example `snapshotTemplateId`
        */ "SnapshotTemplateId"?: string;
        /**
        * 自定义数据，将在截图完成时进行回调。
        * - 最大长度为1024。
        * - 建议采用JSON字符串。
        * @example `{"Vod":{"Title":"test","CateId":"234"}"}`
        */ "UserData"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribePlayUserTotal获取指定时间范围内的每日播放数据总量统计。
    */ DescribePlayUserTotal(query: {
        "RegionId"?: string;
        /**
        * 结束时间，UTC格式。
        * @example `2016-06-30T19:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 起始时间，UTC格式。
        * 支持查询2018-01-01起的数据，即StartTime大于等于2018-01-01T00:00:00Z。
        * @example `2016-06-29T19:00:00Z`
        */ "StartTime": string;
    }): Promise<{}>;
    /**
    * 调用DeleteImage删除用户上传的图片及视频自动截图。
    */ DeleteImage(query: {
        "RegionId"?: string;
        /**
        * 图片删除操作类型。取值：
        * - **ImageURL**：根据图片URL删除指定图片。
        * - **ImageId**：根据图片ID删除指定图片。
        * - **VideoId**：根据视频ID删除其关联图片。
        * @example `VideoId`
        */ "DeleteImageType": string;
        "OwnerId"?: number;
        /**
        * 图片URL。
        * - DeleteImageType=ImageURL时必传。
        * - URL编码，多个以英文逗号分隔。
        * - 避免存在特殊字符导致图片无法删除成功，需要URL编码后再做逗号拼接。
        * @example `http://xxxx,http://xxxxx`
        */ "ImageURLs"?: string;
        /**
        * 图片ID。
        * - 支持批量，多个英文逗号分隔。
        * - DeleteImageType=ImageId时必传。
        * @example `ImageId1,ImageId2`
        */ "ImageIds"?: string;
        /**
        * 视频ID。DeleteImageType=VideoId时必传。
        * @example `fdbsngsn4363mnf`
        */ "VideoId"?: string;
        /**
        * 图片类型。DeleteImageType=VideoId时必传。
        * 取值：
        * - **CoverSnapshot**：封面截图。
        * - **NormalSnapshot**：SubmitSnapshotJob接口发起的普通截图 。
        * - **SpriteSnapshot**：SubmitSnapshotJob接口发起的雪碧截图。
        * - **SpriteOriginSnapshot**：组成雪碧图的原始小图。
        * - **All（以上多种类型的图片）**：非All时支持多个类型英文逗号分隔传入。
        * @example `All`
        */ "ImageType"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodTranscodeData查询转码用量数据。
    */ DescribeVodTranscodeData(query: {
        "RegionId"?: string;
        /**
        * 获取数据结束时间点，需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2019-02-01T16:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2019-02-01T16:00:00Z`
        */ "StartTime": string;
        /**
        * 存储区域，默认返回所有区域。
        * 支持批量查询，多个区域用逗号（半角）分隔。取值范围：**cn-shanghai(上海)**、**cn-beijing(北京)**、**eu-central-1(德国)**、**ap-southeast-1(新加坡)**。
        * @example `cn-beijing`
        */ "Region"?: string;
        /**
        * 存储名称（阿里云OSS存储Bucket名称），默认返回所有存储。支持批量查询，多个用逗号（半角）分隔。
        * @example `bucket01`
        */ "Storage"?: string;
        /**
        * 转码规格，默认返回所有转码规格。
        * 支持批量查询，多个用逗号（半角）分隔。取值范围：**Audio（音频）**、**Segmentation（转封装）**、**H264.LD**、**H264.SD**、**H264.HD**、**H264.2K**、**H264.4K**等。
        * @example `Audio`
        */ "Specification"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateVodDomain修改加速域名。
    */ UpdateVodDomain(query: {
        "RegionId"?: string;
        /**
        * 点播加速域名。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
        */ "Sources"?: string;
        /**
        * 顶级接入域。
        * @example `example.com`
        */ "TopLevelDomain"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodRefreshTasks查询刷新和预热状态是否生效。
    */ DescribeVodRefreshTasks(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 按任务ID查询刷新状态。
        * @example `704225667`
        */ "TaskId"?: string;
        /**
        * 按路径查询，准确匹配。
        * @example `http://aaa.com/1.txt`
        */ "ObjectPath"?: string;
        /**
        * 页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 任务类型。取值范围：
        * - file
        * - directory
        * - preload
        * @example `file`
        */ "ObjectType"?: string;
        /**
        * 域名。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 任务状态。取值范围：
        * - Complete（完成）
        * - Refreshing（刷新中）
        * - Failed（刷新失败）
        * @example `Complete`
        */ "Status"?: string;
        /**
        * 分页大小。默认值：**20**。最大值：**50**。
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 开始时间。
        * @example `2017-01-01T12:12:20Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `2017-01-01T12:12:20Z`
        */ "EndTime"?: string;
        /**
        * 资源组ID。
        * @example `xxxxx`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodDomainTrafficData获取加速域名的网络流量监控数据，单位：byte。
    */ DescribeVodDomainTrafficData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 要查询的域名。若为空，则默认返回所有加速域名的合并数据。支持批量查询，多个域名用半角逗号分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，使用UTC时间。格式为：**YYYY-MM-DDThh:mmZ**。
        * - 最小数据粒度为5分钟，若为空，则默认读取最近24小时的数据。
        * @example `2019-01-20T15:59:58Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，需大于起始时间。
        * 日期格式按照ISO8601表示法，使用UTC时间。格式为：**YYYY-MM-DDThh:mmZ**。
        * @example `2019-01-20T15:59:58Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**，**3600**和**86400**秒。不传和传的值不支持时，使用默认值。
        * - 3天以内（不包含3天整）支持300(默认), 3600, 86400。
        * - 3-31天（不包含31天整）支持3600(默认)和86400。
        * - 31天以上支持86400(默认)。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名。默认为所有运营商。
        * @example `Alibaba`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名。默认为所有区域。
        * @example `cn-shanghai`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用GetVideoList获取视频信息列表。
    */ GetVideoList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 视频分类ID。
        * @example `7249287`
        */ "CateId"?: number;
        /**
        * 视频状态，默认获取所有视频，多个可以用逗号分隔。取值包括：**Uploading(上传中)，UploadFail(上传失败)，UploadSucc(上传完成)，Transcoding(转码中)，TranscodeFail(转码失败)，Blocked(屏蔽)，Normal(正常)**。
        * @example `Uploading,Normal`
        */ "Status"?: string;
        /**
        * 当前页码，默认值为**1**。
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 列表页大小，可选。默认值为**10**，最大值为**100**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 结果排序。取值：
        * - **CreationTime:Desc（默认值）**：按创建时间倒序
        * - **CreationTime:Asc**
        * @example `CreationTime:Asc`
        */ "SortBy"?: string;
        /**
        * CreationTime（创建时间）的开始时间，为开区间(大于开始时间)。
        * 日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。例如，2017-01-11T12:00:00Z（为北京时间2017年1月11日20点0分0秒）。
        * @example `2017-01-11T12:00:00Z`
        */ "StartTime"?: string;
        /**
        * CreationTime的结束时间，为闭区间(小于等于结束时间)。
        * 日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。例如，2017-01-11T12:00:00Z（为北京时间2017年1月11日20点0分0秒）。
        * @example `2017-01-11T12:00:00Z`
        */ "EndTime"?: string;
        /**
        * 视频的存储区域。
        * @example `out-xxxx.oss-cn-shanghai.aliyuncs.com`
        */ "StorageLocation"?: string;
    }): Promise<{}>;
    /**
    * 调用GetDefaultAITemplate查询默认AI模板。
    */ GetDefaultAITemplate(query: {
        "RegionId"?: string;
        /**
        * 模板类型，取值：**AIMediaAudit(智能审核)**。
        * @example `AIMediaAudit`
        */ "TemplateType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用AddWatermark添加水印数据。
    */ AddWatermark(query: {
        "RegionId"?: string;
        /**
        * 水印名称。只支持中英文、数字。长度不超过128个字节，UTF-8编码。
        * @example `水印`
        */ "Name": string;
        /**
        * 水印显示位置、效果等配置(JSON字符串)。
        * @example `{"Width":"55","Height":"55","Dx":"9","Dy":"9","ReferPos":"BottonLeft","Type":"Image"}`
        */ "WatermarkConfig": string;
        /**
        * 水印类型：**Image(图片，默认值)**、**Text(文字**)。
        * 水印类型不同，WatermarkConfig内容不同。
        * @example `Text`
        */ "Type": string;
        "OwnerId"?: number;
        /**
        * 水印文件oss地址。图片水印必传。
        * @example `http://outin-3262681cddeb00163e1403e7.oss-cn-shanghai.aliyuncs.com/image/cover/C9934515B1EF727EBAE7FDEC-6-2.png`
        */ "FileUrl"?: string;
        /**
        * 应用ID。取值如：**app-1000000**。
        * @example `app-xxxx`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用ListTranscodeTemplateGroup查询转码模板配置列表。
    */ ListTranscodeTemplateGroup(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 列表大小。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 当前页码。
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 应用ID。取值如：**app-1000000**。
        * @example `app-xxxxx`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用SubmitAIMediaAuditJob提交智能审核作业。作业在提交成功后会异步执行，不保证接口返回时作业已处理完成。
    */ SubmitAIMediaAuditJob(query: {
        "RegionId"?: string;
        /**
        * AI模版ID。不指定时使用智能审核默认AI模版ID。
        * @example `XXXXXXX`
        */ "TemplateId"?: string;
        /**
        * 视频ID。
        * @example `XXXXX`
        */ "MediaId": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用GetAuditHistory获取人工审核的历史记录。
    */ GetAuditHistory(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `93ab850b4f6f44eab54b6e91d24d81d4`
        */ "VideoId": string;
        /**
        * 页号，默认值为**1**。
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 分页大小。默认值为**10**，最大值为**100**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 结果排序。取值范围：
        * - **CreationTime:Desc**（默认值）：按创建时间倒序
        * - **CreationTime:Asc**
        * @example `CreationTime:Desc`
        */ "SortBy"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribePlayUserAvg获取指定时间范围内的每日播放数据均量统计。
    */ DescribePlayUserAvg(query: {
        "RegionId"?: string;
        /**
        * 结束时间，UTC格式。
        * @example `2016-06-30T19:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 起始时间，UTC格式。
        * 支持查询2018-01-01起的数据，即StartTime大于等于2018-01-01T00:00:00Z。
        * @example `2016-06-29T19:00:00Z`
        */ "StartTime": string;
    }): Promise<{}>;
    /**
    * 调用DeleteMultipartUpload立即删除上传中产生的碎片文件。
    */ DeleteMultipartUpload(query: {
        "RegionId"?: string;
        /**
        * 媒体类型，取值：**video（音视频）**。
        * @example `video`
        */ "MediaType": string;
        /**
        * 媒体ID。
        * @example `1234abcd`
        */ "MediaId": string;
        "OwnerId"?: string;
        /**
        * 资源所有者ID。
        * @example `34624557`
        */ "ResourceRealOwnerId"?: number;
    }): Promise<{}>;
    AddCategory(query: {
        "RegionId"?: string;
        /**
        * 分类名称，不能超过64个字节，UTF8编码
        * @example `35018bc7-efab-420a-abda-777795695b2a`
        */ "CateName": string;
        "OwnerId"?: string;
        /**
        * 父分类ID，若不填，则默认生成一级分类，根节点分类ID为-1
        * @example `620963913456741794`
        */ "ParentId"?: number;
        "Type"?: string;
    }): Promise<{}>;
    /**
    * 调用AddVodDomain添加点播加速域名。每次只能提交一个加速域名，一个用户最多添加20个域名。
    */ AddVodDomain(query: {
        "RegionId"?: string;
        /**
        * 需要接入点播的加速域名。
        * 支持泛域名，以符号“.”开头，如：.example.com。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 回源地址列表。
        * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
        */ "Sources": string;
        "OwnerId"?: number;
        /**
        * 检查域名是否能正常访问url。
        * @example `check_url`
        */ "CheckUrl"?: string;
        /**
        * 国际用户、国内L3及以上用户设置有效。取值范围：**domestic**(中国大陆，默认)，**overseas**(港澳台及海外)，**global**(全球加速)。
        * @example `domestic`
        */ "Scope"?: string;
    }): Promise<{}>;
    /**
    * 调用GetEditingProject获取云剪辑工程（视频编辑任务）的详细信息。
    */ GetEditingProject(query: {
        "RegionId"?: string;
        /**
        * 云剪辑工程ID。
        * @example `fb2101bf24bf41c78b2754cb318787dc`
        */ "ProjectId": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用ListWatermark查询用户水印数据列表。
    */ ListWatermark(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 列表每页大小。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 当前页码。
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 应用ID。
        * @example `app-xxxxx`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用GetAppInfos通过应用ID查询应用信息，支持批量查询。
    */ GetAppInfos(query: {
        "RegionId"?: string;
        /**
        * 应用ID列表，最多支持10个，多个使用英文逗号分隔。
        * @example `app-xxxxx`
        */ "AppIds": string;
        "OwnerId"?: number;
        "ResourceRealOwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用GetMezzanineInfo获取音视频的源文件信息，包括文件地址、分辨率、码率等。
    */ GetMezzanineInfo(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `1f1a6fc03ca048e594814031b8a6559e`
        */ "VideoId": string;
        "OwnerId"?: number;
        /**
        * FileURL(源文件地址)签名过期时间。单位为秒，默认值为**1800**，支持设置最小值为**1**。
        * > - 如果返回的是CDN加速地址：
        *     - 只有开启了URL鉴权，FileURL才会定期失效，否则会永久有效。
        *     - 最小值：**1**
        *     - 最大值：无限制
        *     - 默认值：未设置时，取值为URL鉴权中设置的默认有效时长。
        * - 如果返回的是OSS源站地址：
        *     - 只有存储权限为私有，FileURL才会定期失效，否则会永久有效。
        *     - 最小值：**1**
        *     - 最大值：为降低源站安全风险，最大值为**2592000（即30天）**。
        *     - 默认值：未设置时，取值为**3600**。
        * @example `3600`
        */ "AuthTimeout"?: number;
        /**
        * 参数暂不可用。
        * @example `false`
        */ "PreviewSegment"?: boolean;
        /**
        * 输出地址类型。取值范围 ：
        * - oss：回源地址
        * - cdn（默认值）：加速地址
        * > 当源文件所在的bucket类型为in时，只返回oss地址。
        * @example `oss`
        */ "OutputType"?: string;
        /**
        * 附加信息类型。多个用逗号分隔，默认只返回基本信息。取值范围 ：
        * - video：视频流信息
        * - audio：音频流信息
        * @example `video`
        */ "AdditionType"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteStream删除媒体流(视频流，音频流)信息及存储文件，并且支持批量删除。
    */ DeleteStream(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `de3a60c5-759c-4cd4-bb79-6cedfeefdf4d`
        */ "VideoId": string;
        /**
        * - 媒体流转码的作业ID列表，多个用逗号分隔，最多支持同一个视频下的20个作业ID。
        * - JobId通过获取播放地址接口(GetPlayInfo)返回的PlayInfo结构体中获取，每个媒体流对应的JobId不同。
        * @example `f1a64a67-98f0-4423-b8bd-057d4a20aa94`
        */ "JobIds": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateImageInfos批量修改图片信息。
    */ UpdateImageInfos(query: {
        "RegionId"?: string;
        /**
        * 更新内容。一次最多支持修改20个图片的视频信息。
        * > Title、Description、Tags 更新内容中不能包含表情符。
        * @example `[{"ImageId":"ff8fe57e3461416c9d40d66a267a4e09","Title":"标题","Description":"描述","Tags":"标签1,标签2"}]`
        */ "UpdateContent": string;
        "OwnerId"?: number;
        /**
        * 资源所有者ID。
        * @example `346547`
        */ "ResourceRealOwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ListAIJob查询AI作业。在提交AI作业后，会进行异步处理，通过此接口可以实时查询作业信息。
    */ ListAIJob(query: {
        "RegionId"?: string;
        /**
        * 作业ID列表。最多一次查10个，多个ID之间用逗号隔开。
        * @example `1236ca184c0e47098a5b665e2xxxxxx`
        */ "JobIds": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用SetDefaultTranscodeTemplateGroup设置默认转码模板配置。
    */ SetDefaultTranscodeTemplateGroup(query: {
        "RegionId"?: string;
        /**
        * 转码模板组ID。
        * @example `ffffffffff`
        */ "TranscodeTemplateGroupId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteVodDomain删除已添加的点播加速域名。
    */ DeleteVodDomain(query: {
        "RegionId"?: string;
        /**
        * 点播加速域名，多个用英文逗号分隔。
        * @example `example.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteEditingProject删除云剪辑工程，支持批量删除。
    */ DeleteEditingProject(query: {
        "RegionId"?: string;
        /**
        * 云剪辑工程ID。支持多个云剪辑工程，以逗号分隔。
        * @example `fb2101bf24bf41c78b2754cb318787dc`
        */ "ProjectIds": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribePlayVideoStatis获取指定视频在指定时间范围内的每日播放统计数据。
    */ DescribePlayVideoStatis(query: {
        "RegionId"?: string;
        /**
        * 指定时间段的结束时间，UTC格式。
        * @example `2016-06-30T19:00:00Z`
        */ "EndTime": string;
        /**
        * 指定视频的视频ID。
        * @example `2a8d4cb9ecbb487681473a153aba8fda`
        */ "VideoId": string;
        "OwnerId"?: number;
        /**
        * 指定时间段的起始时间，UTC格式。
        * @example `2016-06-29T19:00:00`
        */ "StartTime": string;
    }): Promise<{}>;
    /**
    * 调用DeleteVodTemplate删除截图模板。
    */ DeleteVodTemplate(query: {
        "RegionId"?: string;
        /**
        * 截图模板ID。
        * @example `ddddddd`
        */ "VodTemplateId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用SearchEditingProject搜索云剪辑工程（视频编辑列表）。
    */ SearchEditingProject(query: {
        "RegionId"?: string;
        "OwnerId"?: string;
        /**
        * CreationTime（创建时间）的结束时间。
        * - 为闭区间（小于等于结束时间）。
        * - 日期格式按照ISO8601标准表示，使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2017-01-11T12:00:00Z`
        */ "EndTime"?: string;
        /**
        * CreationTime（创建时间）的开始时间。
        * - 为开区间（大于开始时间）。
        * - 日期格式按照ISO8601标准表示，使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2017-01-11T12:00:00Z`
        */ "StartTime"?: string;
        /**
        * 云剪辑工程状态。多个用逗号分隔，如：Normal,Produced。默认获取所有云剪辑工程。
        * 取值范围：
        * - **Normal**（草稿）
        * - **Producing**（合成中）
        * - **Produced**（合成成功）
        * - **ProduceFailed**（合成失败）
        * @example `Normal`
        */ "Status"?: string;
        /**
        * 当前页码。默认值为**1**。
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 分页大小。默认值为**10**，最大值为**100**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 结果排序方式。取值范围：
        * - **CreationTime:Desc**（默认值）：按创建时间倒序
        * - **CreationTime:Asc**
        * @example `CreationTime:Desc`
        */ "SortBy"?: string;
        /**
        * 云剪辑工程标题。
        * @example `test`
        */ "Title"?: string;
    }): Promise<{}>;
    /**
    * 调用GetVideoInfos批量获取视频信息。
    */ GetVideoInfos(query: {
        "RegionId"?: string;
        /**
        * 视频ID列表。多个用逗号分隔，最多支持20个。
        * @example `7753d144efd74dfd8e649c6c45fe0579,7753d144efd74dfd8e649c6c45fe0570`
        */ "VideoIds": string;
        "OwnerId"?: number;
        /**
        * 参数暂不可用。
        * @example `aaa`
        */ "AdditionType"?: string;
    }): Promise<{}>;
    /**
    * 调用SetVodDomainCertificate设置某域名下证书功能是否启用及修改证书信息。
    */ SetVodDomainCertificate(query: {
        "RegionId"?: string;
        /**
        * 指定证书所属加速域名。需属于HTTPS加速类型。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * HTTPS证书是否启用。取值：
        * - **on**：启用
        * - **off**（默认值）：不启用
        * @example `off`
        */ "SSLProtocol": string;
        "OwnerId"?: number;
        /**
        * 证书名称。
        * @example `cert_name`
        */ "CertName"?: string;
        /**
        * 安全证书内容，不启用证书则无需输入，配置证书请输入证书内容。
        * @example `xxx`
        */ "SSLPub"?: string;
        /**
        * 私钥内容，不启用证书则无需输入，配置证书请输入私钥内容。
        * @example `yyy`
        */ "SSLPri"?: string;
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用GetUploadDetails通过媒资ID（支持批量）获取媒资上传详情，如上传时间、已上传比例、上传来源等信息。
    */ GetUploadDetails(query: {
        "RegionId"?: string;
        /**
        * 媒资ID。
        * 目前仅支持视频ID。多个用英文逗号分隔，最多支持20个。
        * @example `media_ids`
        */ "MediaIds": string;
        "OwnerId"?: number;
        /**
        * 资源所有者ID。
        * @example `5432684`
        */ "ResourceRealOwnerId"?: number;
        /**
        * 媒体类型。默认为**video**，取值：**video(音视频)**。
        * @example `video`
        */ "MediaType"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteMezzanines批量删除源文件信息及存储。
    */ DeleteMezzanines(query: {
        "RegionId"?: string;
        /**
        * 视频ID列表。一次最多支持20个视频ID，多个用逗号分隔。
        * @example `23ab850b4f6f44eab54b6e91d24d8157,93ab850b4f6f44eab54b6e91d24d81d4`
        */ "VideoIds": string;
        "OwnerId"?: number;
        /**
        * 强制删除源文件，默认为**false**。
        * > 当视频转码模式为不转码，即分发或异步转码时，由于源文件会作为原画用于播放，默认不可删除该视频的源文件，若需要强制删除该视频的源文件，可将值置为**true**。
        * @example `false`
        */ "Force"?: boolean;
    }): Promise<{}>;
    /**
    * 调用GetPlayInfo通过视频ID直接获取媒体文件（支持视频和音频）的播放地址。
    */ GetPlayInfo(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `fd1c76fc-806b-4467-a194-405528706d29`
        */ "VideoId": string;
        "OwnerId"?: number;
        /**
        * 视频流格式，多个用逗号分隔，默认获取所有格式的流。支持格式：
        * - **mp4**
        * - **m3u8**
        * - **mp3**
        * - **mpd** (仅当转码模板中配置了mpd封装格式时才会输出，详见[转码模板配置-Container](https://help.aliyun.com/document_detail/52839.html?spm=a2c4g.11186623.2.16.f2ee58fc6Rb9V1#h2--transcodetemplate-div-id-transcodetemplate-div-37)。）
        * @example `mp4,m3u8,mp3`
        */ "Formats"?: string;
        /**
        * 播放地址过期时间，单位：秒。
        * - 如果返回的是CDN加速地址：
        *     - 只有开启了URL鉴权播放地址才会定期失效，否则会永久有效。
        *     - 最小值：**1**
        *     - 最大值：**无限制**
        *     - 默认值：未设置时，取值为**URL鉴权中设置的默认有效时长**。
        * - 如果返回的是OSS源站地址：
        *     - 只有存储权限为私有，播放地址才会定期失效，否则会永久有效。
        *     - 最小值：**1**
        *     - 最大值：为降低源站安全风险，最大值为**2592000（即30天）**。
        *     - 默认值：未设置时，取值为**3600**。
        * @example `1800`
        */ "AuthTimeout"?: number;
        /**
        * 参数暂不可用。
        * @example `abckljd`
        */ "Rand"?: string;
        /**
        * 参数暂不可用。
        * @example `{"CI":"tUZiRCWWeU1jC\r\n","Caller":"sLmbasRssnpX64NoGho2k=\r\n","ExpireTime":"2019-04-24T06:19:59Z","MediaId":"e89916f7f9dd05bb9ede9409ae2bbc90","PlayDomain":"test.aliyun.com","Signature":"ljCklFypCsSt="}`
        */ "AuthInfo"?: string;
        /**
        * 参数暂不可用。
        * @example `iOS`
        */ "Channel"?: string;
        /**
        * 参数暂不可用。
        * @example `2.5.1`
        */ "PlayerVersion"?: string;
        /**
        * 输出地址类型。取值范围 ：
        * - **oss**：回源地址
        * - **cdn（默认）**：加速地址
        * 仅支持播放格式为mp4的oss地址。
        * @example `cdn`
        */ "OutputType"?: string;
        /**
        * 视频流类型。多个用逗号分隔，默认获取所有类型的流。支持类型：
        * - **video**
        * - **audio**
        * @example `video`
        */ "StreamType"?: string;
        /**
        * CDN二次鉴权参数，为JSON字符串。当开启了CDN二次鉴权功能时，可通过该参数设置鉴权URL的uid和rand，详见[URL鉴权](https://help.aliyun.com/document_detail/57007.html?spm=a2c4g.11186623.2.22.f2ee58fc6Rb9V1)。
        * @example `{"uid":"12345","rand":"abckljd"}`
        */ "ReAuthInfo"?: string;
        /**
        * 视频流清晰度，多个用逗号分隔，默认获取所有清晰度的流。取值：
        * - **FD**：流畅
        * - **LD**：标清
        * - **SD**：高清
        * - **HD**：超清
        * - **OD**：原画
        * - **2K**：2K
        * - **4K**：4K
        * - **SQ**：普通音质
        * - **HQ**：高音质
        * - **AUTO**：自适应码率，仅当转码模板中配置了打包时才会有该清晰度输出，详见[转码模板配置-PackageSetting](https://help.aliyun.com/document_detail/52839.html?spm=a2c4g.11186623.2.19.f2ee58fc6Rb9V1#h2--transcodetemplate-div-id-transcodetemplate-div-37)。
        * @example `FD,SD`
        */ "Definition"?: string;
        /**
        * 返回数据类型。取值范围 ：
        * - **Single（默认）**：每种清晰度和格式只返回一路最新转码完成的流。
        * - **Multiple**：每种清晰度和格式返回所有转码完成的流。
        * @example `Single`
        */ "ResultType"?: string;
        /**
        * 播放自定义设置，为JSON字符串，支持指定域名播放设置。
        * @example `{"PlayDomain":"vod.test_domain","XForwardedFor":"yqCD7Fp1uqChoVj/sl/p5Q==","PreviewTime":"20","MtsHlsUriToken":"yqCD7Fp1uqChoVjslp5Q"}`
        */ "PlayConfig"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteVideo删除完整视频（包括其源文件、转码后的流文件、封面截图等），支持批量删除。
    */ DeleteVideo(query: {
        "RegionId"?: string;
        /**
        * 视频ID列表，多个用逗号分隔，最多支持10个。
        * @example `e44ebf114f4d429e9b2d2adbea8bf5b5,e44ebf114f4d429e9b2d2adbea8bf55`
        */ "VideoIds": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用AddTranscodeTemplateGroup添加转码配置信息，可创建新的转码模板组，或者向指定模板组中添加新的转码模板。
    */ AddTranscodeTemplateGroup(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 转码模板组名称。长度不超过128个字节，UTF-8编码。
        * **TranscodeTemplateGroupId**和**Name**必须传递一个。
        * @example `transcodetemplate`
        */ "Name"?: string;
        /**
        * 转码模板配置信息(JSON字符串)。
        * 该参数不传递，则不会构建转码处理流程，视频上传不会触发转码。
        * @example `[{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30"},"Audio":{"Codec":"AAC","Bitrate":"64","Definition":"SD","EncryptType":"Private","Container":{"Format":"m3u8"},"PackageType":"HLSPackage"}}]`
        */ "TranscodeTemplateList"?: string;
        /**
        * 转码模板组ID。
        * @example `4c71a339fecec0152b4fa6f4527xxx`
        */ "TranscodeTemplateGroupId"?: string;
        /**
        * 应用ID。取值如：**app-1000000**。使用说明参考文档[多应用](https://help.aliyun.com/document_detail/113600.html?spm=a2c4g.11186623.2.17.33456d22HYxXg0)。
        * @example `app-xxxxx`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateVideoInfo修改视频信息。
    */ UpdateVideoInfo(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `2deda932654a40878312baf9b0ed810d`
        */ "VideoId": string;
        "OwnerId"?: number;
        /**
        * 视频标题，长度不超过128个字节，UTF8编码。
        * @example `阿里云VOD视频标题`
        */ "Title"?: string;
        /**
        * 视频标签，单个标签不超过32字节，最多不超过16个标签。多个用逗号分隔，UTF8编码。
        * @example `标签1,标签2`
        */ "Tags"?: string;
        /**
        * 视频描述，长度不超过1024个字节，UTF8编码。
        * @example `阿里云视频描述`
        */ "Description"?: string;
        /**
        * 视频封面URL地址。
        * @example `https://image.example.com/coversample.jpg`
        */ "CoverURL"?: string;
        /**
        * 视频分类ID。
        * @example `38476`
        */ "CateId"?: number;
        "DownloadSwitch"?: string;
        "Status"?: string;
        "CustomMediaInfo"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodCertificateList获取证书列表信息。
    */ DescribeVodCertificateList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 点播加速域名。
        * @example `example.com`
        */ "DomainName"?: string;
    }): Promise<{}>;
    /**
    * 调用GetVideoInfo通过视频ID获取视频的基本信息，包括：视频标题、描述、时长、封面URL、状态、创建时间、大小、截图、分类和标签等信息。
    */ GetVideoInfo(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `9ae2af63-6ca6-4835-b0c1-0412f44891fc`
        */ "VideoId": string;
        "OwnerId"?: number;
        "ResultTypes"?: string;
        /**
        * 参数暂不可用。
        * @example `custom`
        */ "AdditionType"?: string;
    }): Promise<{}>;
    /**
    * 调用BatchSetVodDomainConfigs批量配置加速域名。
    */ BatchSetVodDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 点播加速域名，多个用英文半角逗号分隔。
        * @example `example.com`
        */ "DomainNames": string;
        /**
        * 功能列表。
        * - Functions格式：`[{"functionArgs":[{"argName":"domain_name","argValue":"www.example.com"}],"functionName":"set_req_host_header"}]`
        * - 某些功能，如filetype_based_ttl_set，可以设置多条纪录，当需要更新其中某条纪录时，可通过该条纪录的configId来指定。 `[{"functionArgs":[{"argName":"file_type","argValue":"jpg"},{"argName":"ttl","argValue":"18"},{"argName":"weight","argValue":"30"}],"functionName":"filetype_based_ttl_set","configId":5068995}]`
        * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"www.example.com"}],"functionName":"set_req_host_header"}]`
        */ "Functions": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用GetMediaAuditResultDetail获取智能审核结果详情。通过此接口可实时查询审核结果详情。
    */ GetMediaAuditResultDetail(query: {
        "RegionId"?: string;
        /**
        * 视频内容审核结果页码，默认值为**1**，每页最多返回**20**条记录。
        * @example `1`
        */ "PageNo": number;
        /**
        * 视频ID。
        * @example `XXXXX`
        */ "MediaId": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用SetAuditSecurityIp设置审核安全IP。
    */ SetAuditSecurityIp(query: {
        "RegionId"?: string;
        /**
        * 审核安全IP列表，每个分组最多支持100个，以逗号隔开，格式如下：
        * - 精确IP: 10.23.12.24
        * - CIDR模式: 10.23.12.24/24（无类域间路由，/24表示了地址中前缀的长度，范围`[1,32]`）
        * @example `10.23.12.24`
        */ "Ips": string;
        /**
        * 审核安全组名称，默认为**Default**。每个用户最多支持10个安全分组。
        * @example `Default`
        */ "SecurityGroupName"?: string;
        /**
        * 操作方式，取值范围：
        * - **Append**：默认值，追加IP白名单。
        * - **Cover**：覆盖原IP白名单。
        * - **Delete**：删除IP白名单。
        * @example `Cover`
        */ "OperateMode"?: string;
    }): Promise<{}>;
    /**
    * 调用ListSnapshots查询指定媒体截图。
    */ ListSnapshots(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `d3e680e618708fef7cefbf2cae7cc931`
        */ "VideoId": string;
        "OwnerId"?: number;
        /**
        * 返回的截图类型。取值范围：
        * - **CoverSnapshot（默认值）**：封面截图
        * - **NormalSnapshot**：SubmitSnapshotJob接口发起的普通截图
        * - **SpriteSnapshot**：SubmitSnapshotJob接口发起的雪碧截图
        * - **SpriteOriginSnapshot**：组成雪碧图的原始小图
        * @example `CoverSnapshot`
        */ "SnapshotType"?: string;
        /**
        * 截图地址过期时间。默认值：**3600秒**，最小值：**3600秒 **(当指定时间小于3600秒时，默认为3600秒）。
        * > 如果返回的是OSS地址，为降低源站安全风险，最大值为2592000(即30天)。该参数只有开启了[URL鉴权](https://help.aliyun.com/document_detail/57007.html?spm=a2c4g.11186623.2.15.52a33d21ZDBetT)才会生效。
        * @example `3600`
        */ "AuthTimeout"?: string;
        /**
        * 翻页大小。默认值：**20**，最大值：**100**。
        * @example `20`
        */ "PageSize"?: string;
        /**
        * 翻页页号。默认值：**1**。
        * @example `1`
        */ "PageNo"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteAttachedMedia删除辅助媒资，支持批量删除。
    */ DeleteAttachedMedia(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 辅助媒资ID列表。多个用逗号分隔。最多支持20个。
        * @example `xxxxxxxx,xxxxxxxxx`
        */ "MediaIds"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodDomainBpsData获取加速域名的网络带宽监控数据。
    */ DescribeVodDomainBpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 要查询的域名。若为空，则默认返回所有加速域名的合并数据。支持批量查询，多个用半角逗号分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，使用UTC时间。格式为：**YYYY-MM-DDThh:mmZ**。
        * - 最小数据粒度为5分钟，若为空，则默认读取最近24小时的数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，需大于起始时间。
        * 日期格式按照ISO8601表示法，使用UTC时间。格式为：**YYYY-MM-DDThh:mmZ**。
        * @example `2015-12-10T20:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**，**3600**和**86400**秒。
        * - 3天以内（不包含3天整）支持300(默认), 3600, 86400。
        * - 3-31天（不包含31天整）支持3600(默认)和86400。
        * - 31天以上支持86400(默认)。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名。默认为所有运营商。
        * @example `Alibaba`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名。默认为所有区域。
        * @example `cn-shanghai`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodAIData查询AI处理（智能审核、视频DNA等）的用量数据。
    */ DescribeVodAIData(query: {
        "RegionId"?: string;
        /**
        * 获取数据结束时间点，需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2019-02-01T16:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2019-02-01T16:00:00Z`
        */ "StartTime": string;
        /**
        * 存储区域，默认返回所有区域。
        * 支持批量查询，多个区域用逗号（半角）分隔。取值范围：**cn-shanghai(上海)**、**cn-beijing(北京)**、**eu-central-1(德国)**、**ap-southeast-1(新加坡)**。
        * @example `cn-beijing`
        */ "Region"?: string;
        /**
        * AI类型，默认返回类型。
        * 支持批量查询，多个区域用逗号（半角）分隔。取值范围：**AIVideoCensor（智能审核）**、**AIVideoFPShot（视频DNA）**、**AIVideoTag（多模态标签）**。
        * @example `AIVideoCensor`
        */ "AIType"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodStorageData查询媒资管理（存储空间、存储流出流量）的用量数据。
    */ DescribeVodStorageData(query: {
        "RegionId"?: string;
        /**
        * 获取数据结束时间点，需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2019-02-01T16:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2019-02-01T16:00:00Z`
        */ "StartTime": string;
        /**
        * 存储区域。
        * 默认返回所有区域。支持批量查询，多个区域用逗号（半角）分隔。取值范围：**cn-shanghai(上海)**、**cn-beijing(北京)**、**eu-central-1(德国)**、**ap-southeast-1(新加坡)**。
        * @example `cn-shanghai`
        */ "Region"?: string;
        /**
        * 存储类型。
        * @example `bucket_type`
        */ "StorageType"?: string;
        /**
        * 存储名称（阿里云OSS存储Bucket名称），默认返回所有存储。支持批量查询，多个用逗号（半角）分隔。
        * @example `bucket`
        */ "Storage"?: string;
    }): Promise<{}>;
    /**
    * 调用AddAITemplate添加AI模板。
    */ AddAITemplate(query: {
        "RegionId"?: string;
        /**
        * 模板类型，取值范围：**AIMediaAudit(智能审核)**。
        * @example `AIMediaAudit`
        */ "TemplateType": string;
        /**
        * 模板详细配置，JSON字符串，具体值详见[AITemplateConfig](https://help.aliyun.com/document_detail/89863.html?spm=a2c4g.11186623.2.15.286a5046RmMdjh#AITemplateConfig)。
        * @example `XXXXX`
        */ "TemplateConfig": string;
        /**
        * 模板名称，最大128字节。
        * @example `AI-media-test`
        */ "TemplateName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用GetMediaAuditResultTimeline获取到所有违规内容截图的时间点。
    */ GetMediaAuditResultTimeline(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `XXXXX`
        */ "MediaId": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用MoveAppResource将媒资等资源从一个应用迁移到另外一个应用。
    */ MoveAppResource(query: {
        "RegionId"?: string;
        /**
        * 资源类型。
        * 支持video（视频），image（图片），attached（辅助媒资）。
        * @example `video`
        */ "ResourceType": string;
        /**
        * 资源ID， 多个以英文逗号分隔，一次最多20条。
        * @example `xxx,xxx`
        */ "ResourceIds": string;
        /**
        * 目标应用ID。
        * @example `app-xxxxx`
        */ "TargetAppId": string;
        "OwnerId"?: number;
        "ResourceRealOwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用CreateUploadVideo获取视频上传地址和凭证，并创建视频信息。
    */ CreateUploadVideo(query: {
        "RegionId"?: string;
        /**
        * 视频标题。
        * 长度不超过128个字符或汉字，UTF8编码。
        * @example `76f98aba-ab84-4f48-833a-07fe9bc2e316`
        */ "Title": string;
        /**
        * 视频源文件名。
        * 必须带扩展名，且扩展名不区分大小写。支持的扩展名参见<a href="~~55396~~">上传概述</a>的限制部分。
        * @example `f26e9ddb-31f5-47cf-8c4f-f5a92b097334`
        */ "FileName": string;
        "OwnerId"?: number;
        /**
        * 自定义视频封面URL地址。
        * @example `f5c75b76-82a5-4562-aa42-339e0daf833b`
        */ "CoverURL"?: string;
        /**
        * 视频描述。
        * 长度不超过1024个字符或汉字，UTF8编码。
        * @example `d192107b-4e80-46ae-a6e9-8995c2de7223`
        */ "Description"?: string;
        /**
        * 视频文件大小。单位：字节。
        * @example `123`
        */ "FileSize"?: number;
        /**
        * 参数暂不可用。
        * @example `127.0.0.1`
        */ "IP"?: string;
        /**
        * 视频分类ID。
        * 请在**点播控制台**>**全局设置**>**分类管理**中编辑或查看分类的ID。
        * @example `67788823`
        */ "CateId"?: number;
        /**
        * 视频标签。
        * 单个标签不超过32个字符或汉字，最多不超过16个标签。多个用逗号分隔，UTF8编码。
        * @example `tag1,tag2`
        */ "Tags"?: string;
        /**
        * 参数暂不可用。
        * @example `NoTranscode`
        */ "TranscodeMode"?: string;
        /**
        * 自定义设置，为JSON字符串，支持消息回调等设置。
        * @example `{"MessageCallback":"{"CallbackURL":"http://test.test.com"}", "Extend":"{"localId":"xxx", "test":"www"}"}`
        */ "UserData"?: string;
        /**
        * 模板组ID。
        * 当不为空时，视频转码使用当前指定的模板组进行转码。可在控制台转码设置里查看模版组ID。
        * @example `405477f9e21e498eaa5cd19ea2c7c854`
        */ "TemplateGroupId"?: string;
        /**
        * 工作流ID。
        * 如果同时传递了WorkflowId和TemplateGroupId，以WorkflowId为准。使用说明参考文档[工作流](https://help.aliyun.com/document_detail/115347.html?spm=a2c4g.11186623.2.23.23c4257eJ1Qsl1)。
        * @example `405477f9e21e498eaa5c-d19ea2c7c854`
        */ "WorkflowId"?: string;
        /**
        * 存储地址。
        * 当不为空时，会使用该指定的存储地址上传视频文件。可在**点播控制台** > **存储管理**里查看存储地址。
        * @example `out-xxxx.oss-cn-shanghai.aliyuncs.com`
        */ "StorageLocation"?: string;
        /**
        * 参数暂不可用。
        * @example `{"aa":123}`
        */ "CustomMediaInfo"?: string;
        /**
        * 应用ID。取值如：**app-1000000**。使用说明参考文档[多应用](https://help.aliyun.com/document_detail/113600.html?spm=a2c4g.11186623.2.22.23c4257eovDfWP)。
        * @example `app-xxxxxx`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用GetAITemplate查询AI模板。
    */ GetAITemplate(query: {
        "RegionId"?: string;
        /**
        * 模板ID。
        * @example `XXXXX`
        */ "TemplateId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用GetWatermark查询单个水印数据。
    */ GetWatermark(query: {
        "RegionId"?: string;
        /**
        * 水印ID。
        * @example `9bcc8bfadb843f475c109a2671d0df97`
        */ "WatermarkId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteVodSpecificConfig删除点播加速域名的配置。
    */ DeleteVodSpecificConfig(query: {
        "RegionId"?: string;
        /**
        * 点播加速域名。
        * @example `www.example.com`
        */ "DomainName": string;
        /**
        * 配置ID。
        * @example `2317`
        */ "ConfigId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ListTranscodeTask根据视频ID查询视频历史转码任务信息，该接口不返回具体的作业信息。
    */ ListTranscodeTask(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `ddddddddd`
        */ "VideoId": string;
        "OwnerId"?: number;
        /**
        * 开始时间，UTC时间：**yyyy-MM-ddTHH:mm:ssZ**。
        * @example `2019-01-23T12:35:12Z`
        */ "StartTime"?: string;
        /**
        * 结束时间，UTC时间：**yyyy-MM-ddTHH:mm:ssZ**。
        * @example `2019-01-23T12:35:12Z`
        */ "EndTime"?: string;
        /**
        * 查询页数据大小，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 查询数据的当前页码，默认值为**1**。
        * @example `1`
        */ "PageNo"?: number;
    }): Promise<{}>;
    /**
    * 调用GetMessageCallback查询事件通知的回调方式、回调地址、事件类型。
    */ GetMessageCallback(query: {
        "RegionId"?: string;
        "OwnerId"?: string;
        /**
        * 资源所有者ID。
        * @example `346`
        */ "ResourceRealOwnerId"?: number;
        /**
        * 应用ID，不传时为系统默认应用的ID，即**app-1000000**。
        * @example `app-1000000`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodDomainLog获取指定域名的CDN原始访问日志下载地址。
    */ DescribeVodDomainLog(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 域名（只支持单个查询）。
        * @example `example1.com`
        */ "DomainName": string;
        /**
        * 分页大小。默认值：**300**。最大值：**1000**。
        * @example `300`
        */ "PageSize"?: number;
        /**
        * 页码。默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 获取日志起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。例如：2016-10-20T04:00:00Z。
        * @example `2016-10-20T04:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间。起止时间和结束时间，间隔不超过一年。
        * 获取日期格式按照ISO8601表示法，并使用UTC时间。例如：2016-10-20T04:00:00Z。
        * @example `2016-10-20T04:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateWatermark更新水印数据。
    */ UpdateWatermark(query: {
        "RegionId"?: string;
        /**
        * 水印显示位置、效果等配置(JSON字符串)。
        * 不同的水印类型对应不同的WatermarkConfig内容。
        * @example `{"Width":"55","Height":"55","Dx":"9","Dy":"9","ReferPos":"BottonLeft","Type":"Image"}`
        */ "WatermarkConfig": string;
        /**
        * 水印名称。只支持中英文、数字。长度不超过128个字节。UTF-8编码。
        * @example `test`
        */ "Name"?: string;
        /**
        * 水印ID。
        * @example `aasaassa`
        */ "WatermarkId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteWatermark删除水印。
    */ DeleteWatermark(query: {
        "RegionId"?: string;
        /**
        * 水印ID。
        * @example `9bcc8bfadb843f475c109a2671d0df97`
        */ "WatermarkId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ListAppPoliciesForIdentity列出指定账号身份（RAM子账号或RAM角色）被授予的应用权限的列表。
    */ ListAppPoliciesForIdentity(query: {
        "RegionId"?: string;
        /**
        * - 类型为RamUser时，传入RAM子账号ID。
        * - 类型为RamRole时，传入角色名称。
        * @example `xxxxx`
        */ "IdentityName"?: string;
        /**
        * 身份类型。取值：**RamUser**（RAM子账号）, **RamRole**（RAM角色）。
        * @example `RamUser`
        */ "IdentityType"?: string;
        "OwnerId"?: number;
        /**
        * 应用ID。
        * @example `app-xxxxxx`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteAppInfo删除应用信息。
    */ DeleteAppInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ResourceRealOwnerId"?: number;
        /**
        * 应用ID。
        * @example `app-xxxxx`
        */ "AppId"?: string;
    }): Promise<{}>;
    /**
    * 调用BatchStartVodDomain启用状态为“停用”的点播加速域名，将DomainStatus变更为online。
    */ BatchStartVodDomain(query: {
        "RegionId"?: string;
        /**
        * 点播加速域名，多个用英文逗号分隔。
        * @example `example.com`
        */ "DomainNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ListAITemplate查询AI模板列表。
    */ ListAITemplate(query: {
        "RegionId"?: string;
        /**
        * 模板类型。
        * @example `AIMediaAudit`
        */ "TemplateType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ListAppInfo根据查询条件获取有权限的应用信息列表。
    */ ListAppInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ResourceRealOwnerId"?: number;
        /**
        * 应用状态。取值范围：**Normal**（正常），**Disable**（停用）。应用创建后默认为Normal。
        * @example `Normal`
        */ "Status"?: string;
        /**
        * 页号。默认从1开始。
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 每页返回条数。默认值为**10**，最大值为**100**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateTranscodeTemplateGroup修改转码配置信息，可修改转码模板组下指定的转码模板配置。
    */ UpdateTranscodeTemplateGroup(query: {
        "RegionId"?: string;
        /**
        * 转码模板组ID。
        * @example `4c71a339fecec0152b4fa6f4527xxx`
        */ "TranscodeTemplateGroupId": string;
        "OwnerId"?: number;
        /**
        * 转码模板组名称。长度不超过128个字节，UTF-8编码。
        * @example `transcodetemplate`
        */ "Name"?: string;
        /**
        * 转码模板配置信息(JSON字符串)。
        * @example `[{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30"},"Audio":{"Codec":"AAC","Bitrate":"64","Definition":"SD","EncryptType":"Private","Container":{"Format":"m3u8"},"PackageType":"HLSPackage"}}]`
        */ "TranscodeTemplateList"?: string;
        /**
        * 指定的转码模板被锁定。
        * @example `locked`
        */ "Locked"?: string;
    }): Promise<{}>;
    /**
    * 调用GetVideoPlayAuth获取视频播放时所需的播放凭证。
    */ GetVideoPlayAuth(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `dfde02284a5c46618b1722a097adaf4a`
        */ "VideoId": string;
        "OwnerId"?: number;
        /**
        * 播放凭证过期时间，默认为**100**秒，取值范围`[100,3600]`。
        * @example `3600`
        */ "AuthInfoTimeout"?: number;
        "ReAuthInfo"?: string;
        /**
        * 媒体播放时的自定义设置字段，为JSON字符串，目前该接口仅支持指定域名播放的设置。
        * @example `{"PlayDomain":"vod.test_domain"}`
        */ "PlayConfig"?: string;
    }): Promise<{}>;
    /**
    * 调用BatchStopVodDomain批量停用点播加速域名，将DomainStatus变更为Offline。
    */ BatchStopVodDomain(query: {
        "RegionId"?: string;
        /**
        * 点播加速域名，多个用英文逗号分隔。
        * @example `example.com`
        */ "DomainNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateCategory修改视频分类。
    */ UpdateCategory(query: {
        "RegionId"?: string;
        /**
        * 分类ID。
        * @example `706363`
        */ "CateId": number;
        /**
        * 分类名称，不能超过64个字节，UTF8编码。
        * @example `阿里云分类名称`
        */ "CateName": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteCategory删除视频分类，同时会删除其下级分类（包括二级分类和三级分类），请慎重操作。
    */ DeleteCategory(query: {
        "RegionId"?: string;
        /**
        * 分类ID。
        * @example `-3300080371970025740`
        */ "CateId": number;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用GetMediaDNAResult获取视频DNA结果。视频DNA作业完成后，可通过此接口实时查询DNA结果。
    */ GetMediaDNAResult(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `88c6ca184c0e47098a5b665e2a126797`
        */ "MediaId": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateAttachedMediaInfos批量修改辅助媒资信息。
    */ UpdateAttachedMediaInfos(query: {
        "RegionId"?: string;
        /**
        * 更新内容。一次最多支持修改20个辅助媒资信息。
        * @example `[{"MediaId ":"xxxx","Title":"标题","Description":"描述","Tags":"标签1,标签2"}]`
        */ "UpdateContent": string;
        "OwnerId"?: number;
        /**
        * 资源所有者ID。
        * @example `235`
        */ "ResourceRealOwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用RefreshUploadVideo用于视频文件上传超时后重新获取视频上传凭证。
    */ RefreshUploadVideo(query: {
        "RegionId"?: string;
        /**
        * 视频ID。
        * @example `c6a23a870c8c4ff8b02dcd40cbd38133`
        */ "VideoId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ListAuditSecurityIp获取审核安全IP列表。
    */ ListAuditSecurityIp(query: {
        "RegionId"?: string;
        /**
        * 审核安全IP分组名称，默认获取所有。
        * @example `Default`
        */ "SecurityGroupName"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeVodDomainCertificateInfo获取指定加速域名的证书信息。
    */ DescribeVodDomainCertificateInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 点播加速域名。
        * @example `example.com`
        */ "DomainName": string;
    }): Promise<{}>;
    /**
    * 调用CreateAudit进行人工审核，可用于审核视频、音频等媒体信息。
    */ CreateAudit(query: {
        "RegionId"?: string;
        /**
        * 审核内容数组，一次最多支持20个视频的审核内容。需将数组转为字符串后作为参数值。
        * @example `[{"VideoId":"93ab850b4f6f44eab54b6e91d24d81d4","Status":"Normal"},{"VideoId":"43ab850b4f6f44eab54b6e91d24d81d3","Status":"Blocked","Reason":"色情视频","Comment":"有露点镜"}]`
        */ "AuditContent": string;
    }): Promise<{}>;
    /**
    * 调用SetEditingProjectMaterials设置云剪辑工程的待剪辑素材。
    */ SetEditingProjectMaterials(query: {
        "RegionId"?: string;
        /**
        * 素材ID。即媒资ID，如视频VideoId、图片ImageId、辅助媒资MediaId等。支持多个素材，以逗号分隔。
        * @example `9e3101bf24bf41c78b275123318788ca`
        */ "MaterialIds": string;
        /**
        * 云剪辑工程ID。
        * @example `fb2101bf24bf41c78b2754cb318787dc`
        */ "ProjectId": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    /**
    * 调用SetDefaultAITemplate设置默认AI模板。
    */ SetDefaultAITemplate(query: {
        "RegionId"?: string;
        /**
        * 模板ID。
        * @example `33b88e9ceb64fe11d566e423cXXXXXX`
        */ "TemplateId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeVodDomainUsageData查询加速流量或带宽用量数据。
    */ DescribeVodDomainUsageData(query: {
        "RegionId"?: string;
        /**
        * 获取数据结束时间点，需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2015-12-10T20:00Z`
        */ "EndTime": string;
        /**
        * 数据类型。取值范围：**bps（带宽）、traf（流量）**。
        * @example `bps`
        */ "Field": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
        * @example `2015-12-10T20:00Z`
        */ "StartTime": string;
        /**
        * 加速域名。若参数为空，默认返回所有加速域名合并后数据。支持批量查询，多个用逗号（半角）分隔。
        * @example `example.com`
        */ "DomainName"?: string;
        /**
        * 用量类型。
        * @example `traf`
        */ "Type"?: string;
        /**
        * 区域代号，默认为CN中国大陆。
        * 取值范围：**CN（中国大陆）**、**OverSeas（海外区域）**。
        * @example `CN`
        */ "Area"?: string;
    }): Promise<{}>;
    /**
    * 调用SubmitTranscodeJobs提交媒体转码作业，开始异步转码处理。
    */ SubmitTranscodeJobs(query: {
        "RegionId"?: string;
        /**
        * 使用指定的模板组进行转码，可在[控制台转码设置](https://vod.console.aliyun.com/?spm=a2c4g.11186623.2.18.2f1a2267jCybwh#/vod/settings/transcode/vod)里查看模版组ID。
        * @example `56e680e618708fef7cefbf2cae7cc9yu`
        */ "TemplateGroupId": string;
        /**
        * 视频ID。
        * @example `d3e680e618708fef7cefbf2cae7cc931`
        */ "VideoId": string;
        /**
        * 拥有者ID。
        * @example `1237342`
        */ "OwnerId"?: number;
        /**
        * 管道ID。
        * @example `d3e680e618708fef7cefbf2cae7cc931`
        */ "PipelineId"?: string;
        /**
        * 加密配置，为JSON字符串，只有使用HLS标准加密时才需要此参数。
        * > - **EncryptConfig**结构体中**CipherText**参数必须为通过[GenerateDataKey](https://help.aliyun.com/document_detail/28948.html?spm=a2c4g.11186623.2.21.2f1a2267jCybwh)生成的AES_128密文秘钥，否则标准加密转码失败，标准加密接入流程请参阅[HLS标准加密](https://help.aliyun.com/document_detail/68612.html?spm=a2c4g.11186623.2.22.2f1a2267jCybwh)。
        * - 无论标准加密、私有加密，**TemplateGroupId**对应的模板数据，必须都勾选HLS加密选项，否则不加密。
        * @example `{"CipherText":"ZjJmZGViNzUtZWY1Mi00Y2RlLTk3MTMt", "DecryptKeyUri":"http://decrypt.demo.com?CipherText=ZjJmZGViNzUtZWY1Mi00Y2RlLTk3MTMt"}`
        */ "EncryptConfig"?: string;
        /**
        * 覆盖参数(JSON字符串)，支持对转码模板关联的指定图片水印文件、文字水印内容、字幕文件地址以及字幕文件编码格式的覆盖。
        * @example `{"Watermarks":[{"WatermarkId":"watermark1","FileUrl":"http://test.bucket.aliyuncs.com/image/replace.png"},{"WatermarkId":"watermark2","Content":"水印测试"}]}`
        */ "OverrideParams"?: string;
        /**
        * 当前发起的转码作业在所有排队作业中的优先级。取值范围：`[1-10]`。最高优先级：**10**，默认值：**6**。
        * > Priority参数只影响当前发起的转码作业在所有排队状态作业中的优先级，但不影响已经转码处理中的任务优先级。
        * @example `6`
        */ "Priority"?: string;
        /**
        * 用户自定义数据。
        * @example `{"type":"vod"}`
        */ "UserData"?: string;
    }): Promise<{}>;
    /**
    * 调用GetTranscodeTemplateGroup根据转码模板组ID查询转码配置的详细信息。
    */ GetTranscodeTemplateGroup(query: {
        "RegionId"?: string;
        /**
        * 转码模板组ID。
        * @example `a591f697c71676f73e6ae1502142d0`
        */ "TranscodeTemplateGroupId": string;
        /**
        * 拥有者ID
        * @example `123477443`
        */ "OwnerId"?: number;
    }): Promise<{}>;
    AddEditingProject(query: {
        "RegionId"?: string;
        "Title": string;
        "OwnerId"?: string;
        "Description"?: string;
        "Timeline"?: string;
        "CoverURL"?: string;
        "Division"?: string;
    }): Promise<{}>;
    CreateUploadAttachedMedia(query: {
        "RegionId"?: string;
        "BusinessType": string;
        "OwnerId"?: number;
        "Title"?: string;
        "MediaExt"?: string;
        "FileName"?: string;
        "FileSize"?: string;
        "Tags"?: string;
        "CateId"?: number;
        "StorageLocation"?: string;
        "Description"?: string;
        "UserData"?: string;
        "CateIds"?: string;
        "AppId"?: string;
        "Icon"?: string;
    }): Promise<{}>;
    CreateUploadImage(query: {
        "RegionId"?: string;
        "ImageType": string;
        "OwnerId"?: number;
        "Title"?: string;
        "ImageExt"?: string;
        "OriginalFileName"?: string;
        "Tags"?: string;
        "StorageLocation"?: string;
        "CateId"?: number;
        "UserData"?: string;
        "Description"?: string;
        "AppId"?: string;
    }): Promise<{}>;
    GetAIMediaAuditJob(query: {
        "RegionId"?: string;
        "JobId": string;
        "OwnerId"?: string;
    }): Promise<{}>;
    GetAttachedMediaInfo(query: {
        "RegionId"?: string;
        "MediaIds": string;
        "OwnerId"?: number;
        "AuthTimeout"?: number;
        "ResourceRealOwnerId"?: number;
        "OutputType"?: string;
    }): Promise<{}>;
    GetEditingProjectMaterials(query: {
        "RegionId"?: string;
        "Type"?: string;
        "ProjectId": string;
        "OwnerId"?: string;
        "MaterialType"?: string;
    }): Promise<{}>;
    GetImageInfo(query: {
        "RegionId"?: string;
        "ImageId": string;
        "OwnerId"?: number;
        "AuthTimeout"?: number;
        "OutputType"?: string;
    }): Promise<{}>;
    GetMediaAuditResult(query: {
        "RegionId"?: string;
        "MediaId": string;
        "OwnerId"?: string;
        "ResourceRealOwnerId"?: number;
    }): Promise<{}>;
    GetVodTemplate(query: {
        "RegionId"?: string;
        "VodTemplateId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ListLiveRecordVideo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "StreamName"?: string;
        "DomainName"?: string;
        "AppName"?: string;
        "QueryType"?: string;
        "PageNo"?: number;
        "PageSize"?: number;
        "SortBy"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    ListVodTemplate(query: {
        "RegionId"?: string;
        "TemplateType": string;
        "OwnerId"?: number;
        "AppId"?: string;
    }): Promise<{}>;
    ProduceEditingProjectVideo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ProjectId"?: string;
        "Timeline"?: string;
        "Title"?: string;
        "Description"?: string;
        "CoverURL"?: string;
        "MediaMetadata"?: string;
        "ProduceConfig"?: string;
        "UserData"?: string;
    }): Promise<{}>;
    RegisterMedia(query: {
        "RegionId"?: string;
        "RegisterMetadatas": string;
        "OwnerId"?: number;
        "TemplateGroupId"?: string;
        "UserData"?: string;
        "WorkflowId"?: string;
    }): Promise<{}>;
    SearchMedia(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "SearchType"?: string;
        "Fields"?: string;
        "Match"?: string;
        "SortBy"?: string;
        "PageNo"?: number;
        "PageSize"?: number;
        "ScrollToken"?: string;
        "SessionId"?: string;
        "ResultTypes"?: string;
    }): Promise<{}>;
    SubmitAIJob(query: {
        "RegionId"?: string;
        "MediaId"?: string;
        "OwnerId"?: string;
        "Types"?: string;
        "Config"?: string;
        "UserData"?: string;
        "Input"?: string;
    }): Promise<{}>;
    SubmitPreprocessJobs(query: {
        "RegionId"?: string;
        "PreprocessType": string;
        "VideoId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UpdateEditingProject(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "OwnerId"?: string;
        "Title"?: string;
        "Timeline"?: string;
        "Description"?: string;
        "CoverURL"?: string;
    }): Promise<{}>;
    UploadMediaByURL(query: {
        "RegionId"?: string;
        "UploadURLs": string;
        "OwnerId"?: number;
        "TemplateGroupId"?: string;
        "StorageLocation"?: string;
        "UploadMetadatas"?: string;
        "Priority"?: string;
        "MessageCallback"?: string;
        "UserData"?: string;
        "AppId"?: string;
        "WorkflowId"?: string;
    }): Promise<{}>;
    AddVodTemplate(query: {
        "RegionId"?: string;
        "TemplateType": string;
        "TemplateConfig": string;
        "Name": string;
        "OwnerId"?: number;
        "SubTemplateType"?: string;
        "AppId"?: string;
    }): Promise<{}>;
    DescribeVodDomainDetail(query: {
        "RegionId"?: string;
        "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeVodUserDomains(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "PageSize"?: number;
        "PageNumber"?: number;
        "DomainName"?: string;
        "DomainStatus"?: string;
        "DomainSearchType"?: string;
        "CdnType"?: string;
        "CheckDomainShow"?: boolean;
        "FuncId"?: string;
        "FuncFilter"?: string;
    }): Promise<{}>;
    ModifyVodDomainSchdmByProperty(query: {
        "RegionId"?: string;
        "Property": string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
}
export default VOD;
