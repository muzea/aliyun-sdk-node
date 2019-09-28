interface LIVE {
    /**
    * 调用AddLiveAppRecordConfig配置APP录制，输出内容保存到OSS中。
    */ AddLiveAppRecordConfig(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * 支持通配符(*)，代表该域名下所有的AppName。
        * @example `testApp`
        */ "AppName": string;
        /**
        * OssEndpoint域名。
        * @example `oss-cn-shanghai.aliyuncs.com`
        */ "OssEndpoint": string;
        /**
        * OssBucket名称。
        * @example `testBucket`
        */ "OssBucket": string;
        "RecordFormat": string[];
        /**
        * 加速域名，指播放域名。
        * @example `test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 流名称。
        * @example `teststream`
        */ "StreamName"?: string;
        /**
        * 录制开始时间。格式：UTC时间。
        * 设置时间必须从当前时间开始15天之内的时间，只在流级别录制(StreamName不为空)有效。
        * @example `2018-04-10T09:57:21Z`
        */ "StartTime"?: string;
        /**
        * 录制结束时间。格式：UTC时间。
        * 设置时间必须从当前时间开始15天之内的时间，只在流级别录制(StreamName不为空)有效，且时间应晚于录制开始时间。
        * @example `2018-04-16T09:57:21Z`
        */ "EndTime"?: string;
        /**
        * 按需录制。
        * - 0表示关闭。
        * - 1表示通过HTTP回调方式。
        * - 7表示默认不录制，通过RealTimeRecordCommand接口手动控制录制启停。
        * >使用1方式时候需要先通过[AddLiveRecordNotifyConfig接口](~~51831~~)设置OnDemandUrl，否则默认不录制。
        * @example `1`
        */ "OnDemand"?: number;
    }): Promise<{}>;
    /**
    * 调用AddLiveDomain添加直播域名，一次只能提交一个域名。
    */ AddLiveDomain(query: {
        "RegionId"?: string;
        /**
        * 域名业务类型。取值：
        * - **liveVideo**：播流域名
        * - **liveEdge**：边缘推流域名
        * @example `liveVideo`
        */ "LiveDomainType": string;
        /**
        * 需要接入直播的域名。
        * 支持泛域名，以符号“.”开头，如：.a.com。
        * @example `live.yourdomain.com`
        */ "DomainName": string;
        /**
        * 直播域名单元化信息。目前单元化信息取值有**cn-beijing**、**cn-shanghai**、**ap-southeast-1**。
        * @example `cn-beijing`
        */ "Region": string;
        "OwnerId"?: number;
        /**
        * 检查域名是否能正常访问url。
        * @example `http://live.yourdomain.com/status.html`
        */ "CheckUrl"?: string;
        /**
        * 加速区域。国际用户、国内L3及以上用户设置有效。取值范围：
        * - **domestic（默认值）**：国内
        * - **overseas**：海外
        * - **global**：全球
        * @example `domestic`
        */ "Scope"?: string;
        /**
        * 顶级调度域。
        * @example `www.yourTopLevelDomain`
        */ "TopLevelDomain"?: string;
    }): Promise<{}>;
    /**
    * 获当前应用AppId下房间列表。
    */ DescribeRoomList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 业务方APP ID。
        * @example `live-app`
        */ "AppId": string;
        /**
        * 房间ID
        * @example `live-room`
        */ "RoomId"?: string;
        /**
        * 创建房间时输入的主播ID
        * @example `live-anchord`
        */ "AnchorId"?: string;
        /**
        * 状态。
        *
        * - 0：流关闭，
        *
        * - 1：流开启，
        *
        * - 2：流中断。
        * @example `1`
        */ "RoomStatus"?: number;
        /**
        * 查询范围开始时间，格式：yyyy-MM-dd'T'HH:mm:ss'Z'
        * @example `2019-01-19T00:00:00Z`
        */ "StartTime"?: string;
        /**
        * 查询范围结束时间，格式：yyyy-MM-dd'T'HH:mm:ss'Z'
        * @example `2019-01-19T12:11:00Z`
        */ "EndTime"?: string;
        /**
        * 返回按创建时间排序，取值： asc , desc, 默认：desc 降序
        * @example `asc`
        */ "Order"?: string;
        /**
        * 页码。 默认：1
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 每页数量。 默认：10
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveRecordVodConfigs查询直转点配置列表。
    */ DescribeLiveRecordVodConfigs(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `play.aliyunlive.com`
        */ "DomainName": string;
        /**
        * 直播流所属应用名称。
        * @example `app`
        */ "AppName"?: string;
        /**
        * 直播流名称。
        * @example `stream`
        */ "StreamName"?: string;
        /**
        * 分页的页码。默认值：**1**。
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 每页大小。默认值为**10**。
        * - 取值范围：5~100
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveRecordConfig查询域名下所有App录制配置。
    */ DescribeLiveRecordConfig(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName"?: string;
        /**
        * 直播流名称。
        * @example `myStreamName`
        */ "StreamName"?: string;
        /**
        * 当前页码。默认值：**1**。
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 每页大小。默认值：**10**，取值范围：**5~30**。
        * @example `5`
        */ "PageSize"?: number;
        /**
        * 排序。取值：
        * - asc（默认值）：升序
        * - desc：降序
        * @example `asc`
        */ "Order"?: string;
    }): Promise<{}>;
    /**
    * 调用AddCustomLiveStreamTranscode添加自定义转码配置信息。
    */ AddCustomLiveStreamTranscode(query: {
        /**
        * 所属区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * 可包含数字、大小写字母、下划线("_")或短横线("-")。
        * @example `AppName`
        */ "App": string;
        /**
        * 转码模板自定义名称。
        * 取值要求：数字、大小写字母或短横线("-")。
        * <note>不能与标准的转码模板命名重复。</note>
        * @example `LDtest`
        */ "Template": string;
        /**
        * 自定义转码模版类型。目前支持：
        * - **h264**(自定义H264标准模版)
        * - **h264-nbhd**(自定义H264窄带高清™模版)
        * - **h265** (自定义H265标准模版)
        * - **h265-nbhd** (自定义H265窄带高清模版)
        * - **audio纯音频模板**
        * @example `h264`
        */ "TemplateType": string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `live.aliyunlive.com`
        */ "Domain": string;
        /**
        * 转码视频宽度。
        * - 取值范围：Width≥ 100
        * - max(Height,Width) ≤ 2560
        * - min(Height,Width) ≤ 1440
        * <note>265窄带高清模板不得超过1280*720</note>
        * @example `720`
        */ "Height"?: number;
        /**
        * 转码视频宽度。
        * - 取值要求：Width ≥ 100
        * - max(Height,Width) ≤ 2560
        * - min(Height,Width) ≤ 1440
        * <note>265窄带高清模板不得超过1280*720</note>
        * @example `576`
        */ "Width"?: number;
        /**
        * 转码视频帧率。单位：fps，取值范围：1~60。
        * @example `30`
        */ "FPS"?: number;
        /**
        * 转码视频比特率。单位：kbps，取值范围：1~6000。
        * <note>转码视频会尽量接近您所设定的比特率, 但转码视频的实际比特率不能保证和您所设定的完全一致, 尤其是当您设定的比特率过大或过小时。</note>
        * @example `720`
        */ "VideoBitrate"?: number;
        /**
        * 转码音频比特率。单位: kbps，取值范围：1 ≤AudioBitrate ≤ 1000。
        * @example `512`
        */ "AudioBitrate"?: number;
        /**
        * 视频GOP。单位: 帧，取值要求：1 ≤ Gop ≤ 3000。
        * @example `1`
        */ "Gop"?: string;
        /**
        * 视频GOP。取值：
        * - **1**：baseline
        * - **2**：main
        * - **3**：high
        * @example `2`
        */ "Profile"?: number;
        /**
        * 音频编码Profile。可选值
        * - aac_low
        * - aac_he
        * - aac_he_v2
        * - aac_ld，采样率不能超过44100
        * @example `aac_low`
        */ "AudioProfile"?: string;
        /**
        * 音频编码器。可选值：**aac** | **mp3**。
        * @example `aac`
        */ "AudioCodec"?: string;
        /**
        * 音频采样率。取值：**22050~96000**。
        * >如果是 aac_ld, 则采样率不能超过44100
        * @example `96000`
        */ "AudioRate"?: number;
        /**
        * 音频声道数。可选值：**1** | **2** 。
        * @example `2`
        */ "AudioChannelNum"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveCertificateList获取证书列表信息。
    */ DescribeLiveCertificateList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 您的域名。
        * @example `live.yourdomain.com`
        */ "DomainName"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteCasterProgram删除导播台节目单。
    */ DeleteCasterProgram(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台实例ID
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveDomain删除已添加的直播域名。
    */ DeleteLiveDomain(query: {
        "RegionId"?: string;
        /**
        * 要删除的域名。
        * @example `live.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamRecordIndexFiles查询某个时间段内的所有录制索引文件。
    */ DescribeLiveStreamRecordIndexFiles(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名称。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 开始时间。
        * 格式：UTC时间。示例：2015-12-01T17:36:00Z。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime": string;
        /**
        * 结束时间。与StartTime间隔时间不能超过4天。
        * 格式：UTC时间。示例：2015-12-01T17:36:00Z。
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        *
        * 当前页码。默认值为**1**。
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 每页大小。可取值为**5~30**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 排序。取值：
        * - asc（默认值）：升序
        * - desc：降序
        * @example `asc`
        */ "Order"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamRecordContent查询录制内容。
    */ DescribeLiveStreamRecordContent(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名称。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 开始时间。
        * 格式：UTC时间。
        * 示例：2015-12-01T17:36:00Z。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime": string;
        /**
        * 结束时间。与StartTime的间隔时间不能超过4天。
        * 格式：UTC时间。
        * 示例：2015-12-01T17:36:00Z。
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamSnapshotInfo查询一段时间内截图内容。
    */ DescribeLiveStreamSnapshotInfo(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名称。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 开始时间。
        * 格式：2015-12-01T17:36:00Z。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime": string;
        /**
        * 结束时间。EndTime和StartTime之间的间隔不能超过**1**天。
        * 格式：2015-12-01T17:36:00Z。
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        *
        * 一次调用获取的数量。
        * - 取值范围：1~100
        * - 默认值：10
        * @example `10`
        */ "Limit"?: number;
        /**
        * 排序。取值：
        * - asc（默认值）：升序
        * - desc：降序
        * @example `asc`
        */ "Order"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateLiveStreamRecordIndexFiles创建录制索引文件。
    */ CreateLiveStreamRecordIndexFiles(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名称。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * OSS endpoint。
        * @example ` oss-cn-shanghai.aliyuncs.com`
        */ "OssEndpoint": string;
        /**
        * OSS存储bucket名称。
        * @example `test123`
        */ "OssBucket": string;
        /**
        * OSS存储的录制文件名。
        * @example `{AppName}/{StreamName}/{Date}/{Hour}/{Minute}_{Second}.m3u8`
        */ "OssObject": string;
        /**
        * 开始时间。
        * 格式：UTC时间。
        * 示例：2015-12-01T17:36:00Z。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime": string;
        /**
        * 结束时间。与StartTime间隔时间不能超过4天。
        * 格式：UTC时间。
        * 示例：2015-12-01T17:36:00Z。
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainSnapshotData查询直播域名截图张数数据。
    */ DescribeLiveDomainSnapshotData(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 获取数据结束时间。需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
        * @example `2018-01-02T00:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
        * > 支持查询**2018/01/01**起的数据，即**StartTime**≥`2018-01-01T00:00:00Z`。
        * @example `2018-01-01T00:00:00Z`
        */ "StartTime": string;
        /**
        * 需要查询的直播域名。
        * @example `www.example.com`
        */ "DomainName"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainTranscodeData查询直播域名转码时长数据。
    */ DescribeLiveDomainTranscodeData(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 获取数据结束时间。需大于起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间格式：`YYYY-MM-DDThh:mm:ssZ`。
        * @example `2018-01-02T01:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间格式：`YYYY-MM-DDThh:mm:ssZ`。
        * > 支持查询2018/01/01起的数据，即**StartTime** ≥ `2018-01-01T00:00:00Z`。
        * @example `2018-01-01T00:00:00Z`
        */ "StartTime": string;
        /**
        * 需要查询的直播域名。
        * @example `www.example.com`
        */ "DomainName"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainRecordData查询直播域名录制时长数据。
    */ DescribeLiveDomainRecordData(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 获取数据结束时间，需大于起始时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
        * @example `2018-01-02T00:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
        * > 支持查询2018/01/01起的数据，即StartTime≥`2018-01-01T00:00:00Z`。
        * @example `2018-01-01T00:00:00Z`
        */ "StartTime": string;
        /**
        * 需要查询的直播域名。
        * @example `www.example.com`
        */ "DomainName"?: string;
        /**
        * 录制类型，目前支持**TS**、**MP4**、**FLV**三种，不传查询所有类型。
        * @example `MP4`
        */ "RecordType"?: string;
    }): Promise<{}>;
    /**
    * 调用BatchSetLiveDomainConfigs批量配置域名。
    */ BatchSetLiveDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 您的直播域名，多个用英文半角逗号分隔。
        * @example `play.yourdomain.com`
        */ "DomainNames": string;
        /**
        * 功能列表。
        * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"home.1sapp.com"}],"functionName":"set_req_host_header"}]`
        */ "Functions": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 查询HLS直播流的实时在线⼈人数和带宽信息。
    */ DescribeHlsLiveStreamRealTimeBpsData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * DescribeHlsLiveStreamRealTimeBpsData
        * @example `2018-08-08T00:00:00Z`
        */ "Time": string;
        /**
        * 域名列列表，以逗号分割，注意必须是英文字符
        * @example `live.aiyun.com`
        */ "DomainName"?: string;
    }): Promise<{}>;
    /**
    * 调用AddLiveRecordVodConfig增加直播录制转点播配置，将录制内容保存到点播媒资库。
    */ AddLiveRecordVodConfig(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * 支持通配符（*），代表该域名下所有的AppName，不能与普通录制设置的AppName重复。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 点播转码模板组ID。
        * @example `e2d796d3bb5fd8049d32bff62f940711`
        */ "VodTranscodeGroupId": string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        /**
        * 流名称。
        * @example `stream`
        */ "StreamName"?: string;
        /**
        * 周期录制时长，单位为秒。默认值为**3600**，可取值为**300~21600**。
        * @example `300`
        */ "CycleDuration"?: number;
        /**
        * 是否开启自动合并。
        * - **ON**：开启
        * - **OFF**：关闭
        * @example `OFF`
        */ "AutoCompose"?: string;
        /**
        * 登录点播控制台，找存储管理，复制存储地址
        * @example `xxx-tjptr2vatm.oss-cn-shanghai.aliyuncs.com`
        */ "StorageLocation"?: string;
        /**
        * 自动合并点播转码模板组ID。
        * <note>如果开启了自动合并，则该字段必填。</note>
        * @example `XXXXXX`
        */ "ComposeVodTranscodeGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用AddLiveDomainMapping添加直播域名播流域名和推流域名的映射关系配置。
    */ AddLiveDomainMapping(query: {
        "RegionId"?: string;
        /**
        * 您的播流域名，域名类型为**liveVideo**。
        * @example `play.yourdomain.com`
        */ "PullDomain": string;
        /**
        * 您的推流域名，域名类型为**liveEdge**。
        * @example `push.yourdomain.com`
        */ "PushDomain": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveDomainMapping删除直播域名播流域名和推流域名的映射关系配置。
    */ DeleteLiveDomainMapping(query: {
        "RegionId"?: string;
        /**
        * 您的播流域名，域名类型为**liveVideo**。
        * @example `pull.yourdomain.com`
        */ "PullDomain": string;
        /**
        * 您的推流域名，域名类型为**liveEdge**。
        * @example `push.yourdomain.com`
        */ "PushDomain": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveUserDomains查询用户名下所有的直播域名。
    */ DescribeLiveUserDomains(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 直播域名业务类型，不传查询所有。
        * 取值：**liveVideo**|**liveEdge**。
        * @example `liveVideo`
        */ "LiveDomainType"?: string;
        /**
        * 分页大小。默认值为**20**，最大值为**50**。
        * @example `100`
        */ "PageSize"?: number;
        /**
        * 当前页码。取值范围：**1~100000**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 域名模糊匹配过滤。
        * 不传值，默认查询用户所有直播域名。
        * @example `*.testdomain.com`
        */ "DomainName"?: string;
        /**
        * 域名所属区域。
        * @example `cn-beijing`
        */ "RegionName"?: string;
        /**
        * 域名查询类型。取值：
        * - **fuzzy_match（默认值）**：模糊匹配
        * - **pre_match**：前匹配
        * - **suf_match**：后匹配
        * - **full_match**：完全匹配
        * @example `fuzzy_match`
        */ "DomainSearchType"?: string;
        /**
        * 域名状态过滤。域名状态包括：
        * - **online**：运行中（表示域名服务状态正常）
        * - **offline**：已停止
        * - **configuring**：配置中
        * @example `online`
        */ "DomainStatus"?: string;
    }): Promise<{}>;
    /**
    * 添加直播拉流信息，仅支持拉取直播流
    */ AddLivePullStreamInfoConfig(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 用户的直播流所在的源站，多个源站可以填多个地址，用分号分隔
        * @example `live.yourdomain.com`
        */ "SourceUrl": string;
        /**
        * 拉流开始时间，UTC格式, StartTime和EndTime时间间隔在7天内
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime": string;
        /**
        * 拉流结束时间，UTC格式, StartTime和EndTime时间间隔在7天内,且EndTime超过当前时间
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 您的拉流域名为用户的播放域名
        * @example `live.yourdomain.com`
        */ "DomainName": string;
    }): Promise<{}>;
    /**
    * 调用SetLiveDomainCertificate设置某域名下证书功能是否启用及修改证书信息。
    */ SetLiveDomainCertificate(query: {
        "RegionId"?: string;
        /**
        * 指定证书所属加速域名。属于`https`加速类型。
        * @example `play.yourdomain.com`
        */ "DomainName": string;
        /**
        * HTTPS证书是否启用。取值：
        * - **on**：启用
        * - **off（默认值）**：不启用
        * @example `off`
        */ "SSLProtocol": string;
        "OwnerId"?: number;
        /**
        * 证书名称。
        * @example `证书1`
        */ "CertName"?: string;
        "CertType"?: string;
        /**
        * 安全证书内容。
        * 不启用证书则无需输入，配置证书请输入证书内容。
        * @example `XXX`
        */ "SSLPub"?: string;
        /**
        * 私钥内容。
        * 不启用证书则无需输入，配置证书请输入私钥内容。
        * @example `XXX`
        */ "SSLPri"?: string;
        "ForceSet"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveCertificateDetail获取证书详细信息。
    */ DescribeLiveCertificateDetail(query: {
        "RegionId"?: string;
        /**
        * 证书名称。
        * @example `certname`
        */ "CertName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainConfigs查询直播域名配置，一次可查询多个功能配置。
    */ DescribeLiveDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `live.yourdomain.com`
        */ "DomainName": string;
        /**
        * 功能列表名称，用逗号分隔。
        * @example `set_req_host_header`
        */ "FunctionNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用StartLiveDomain启用状态为停用的直播域名，将DomainStatus变更为online。
    */ StartLiveDomain(query: {
        "RegionId"?: string;
        /**
        * 直播域名。
        * @example `live.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用StopLiveDomain停用某个直播域名，将DomainStatus变更为offline。
    */ StopLiveDomain(query: {
        "RegionId"?: string;
        /**
        * 直播域名。
        * @example `live.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamOnlineUserNum查询直播流实时在线人数。
    */ DescribeLiveStreamOnlineUserNum(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName"?: string;
        /**
        * 直播流名称。
        * @example `testStream`
        */ "StreamName"?: string;
        /**
        * 开始时间。
        * - UTC格式。
        *  - StartTime和EndTime时间间隔在7天内。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * - UTC格式。
        * - StartTime和EndTime时间间隔在7天内。
        * @example `2017-12-21T08:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamHistoryUserNum查询直播流历史在线人数。
    */ DescribeLiveStreamHistoryUserNum(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 开始时间。
        * - UTC格式。
        * - StartTime和EndTime时间间隔在一天内。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime": string;
        /**
        * 结束时间。
        * - UTC格式。
        * - StartTime和EndTime时间间隔在一天内，且EndTime不超过当前时间。
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime": string;
        /**
        * 您的域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveAppRecordConfig解除录制配置。
    */ DeleteLiveAppRecordConfig(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 流名称。
        * @example `teststream`
        */ "StreamName"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveRecordVodConfig删除直播录制转点播配置。
    */ DeleteLiveRecordVodConfig(query: {
        /**
        * 区域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        /**
        * 播流地址。
        * @example `testApp`
        */ "StreamName"?: string;
    }): Promise<{}>;
    /**
    * 调用SetLiveStreamsNotifyUrlConfig设置推流回调配置。
    */ SetLiveStreamsNotifyUrlConfig(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 设置直播流信息推送到的URL地址。
        * >必须以`http://`开头。
        * @example `rtmp://play.aliyunlive.com/notify`
        */ "NotifyUrl": string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "AuthType"?: string;
        "AuthKey"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainDetail获取指定直播域名配置的基本信息。
    */ DescribeLiveDomainDetail(query: {
        "RegionId"?: string;
        /**
        * 直播域名名称。
        * @example `live.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用BatchDeleteLiveDomainConfigs批量删除域名配置。
    */ BatchDeleteLiveDomainConfigs(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名，多个用英文半角逗号分隔。
        * @example `play.yourdomain.com`
        */ "DomainNames": string;
        /**
        * 功能列表名称，用逗号分隔。
        * @example `referer_white_list_set,ip_black_list_set`
        */ "FunctionNames": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用AddLiveDetectNotifyConfig添加回调通知URL。
    */ AddLiveDetectNotifyConfig(query: {
        "RegionId"?: string;
        /**
        * 发现涉黄涉政等违规内容的回调函数。
        * @example `http://www.yourdomain.cn/examplecallback.action`
        */ "NotifyUrl": string;
        /**
        * 用户域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteCasterComponent删除组件。
    */ DeleteCasterComponent(query: {
        "RegionId"?: string;
        /**
        * 组件ID。
        * @example `21926b36-7dd2-4fde-ae25-51b5bc8e52d8`
        */ "ComponentId": string;
        "OwnerId"?: number;
        /**
        * 导播间ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用StopCasterScene停止指定场景，限制仅用于PVW的关闭。
    */ StopCasterScene(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 场景ID，PVW时有效。
        * @example `242b4e2c-c30f-4442-85ba-2e3e4e3dec1b`
        */ "SceneId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeCasterScenes查询场景信息列表。
    */ DescribeCasterScenes(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
        /**
        * 场景ID。
        * @example `b5f8c837-ceeb-424f-b30b-68e94e864995`
        */ "SceneId"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteLivePullStreamInfoConfig删除拉流信息。
    */ DeleteLivePullStreamInfoConfig(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 您的拉流域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteCaster删除导播台。
    */ DeleteCaster(query: {
        "RegionId"?: string;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveAppSnapshotConfig解除直播流下AppName的截图配置，重新推流后生效。
    */ DeleteLiveAppSnapshotConfig(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用SetCasterSceneConfig全量设置场景配置，清空场景配置，并将布局信息设置并生效至指定场景。
    */ SetCasterSceneConfig(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 场景ID。
        * @example `242b4e2c-c30f-4442-85ba-2e3e4e3dec1b`
        */ "SceneId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
        /**
        * 布局ID。
        * @example `0c6da077-f037-49e8-8440-3be133938359`
        */ "LayoutId"?: string;
        "ComponentId"?: string[];
    }): Promise<{}>;
    /**
    * 调用UpdateCasterSceneConfig增量设置场景配置，不清空原配置，布局信息在原场景上增量修改，效率较全量设置高。
    */ UpdateCasterSceneConfig(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 场景ID。
        * @example `242b4e2c-c30f-4442-85ba-2e3e4e3dec1b`
        */ "SceneId": string;
        /**
        * 布局ID。
        * @example `eeab74fb-379d-4599-a93d-86d16a05f92d`
        */ "LayoutId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
        "ComponentId"?: string[];
    }): Promise<{}>;
    /**
    * 调用AddCasterLayout添加导播台布局。
    */ AddCasterLayout(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "VideoLayer": string[];
        "AudioLayer": string[];
        "BlendList": string[];
        "MixList": string[];
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DeleteCasterVideoResource删除视频资源。
    */ DeleteCasterVideoResource(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 资源ID。
        * @example `05ab713c-676e-49c0-96ce-cc408da1b314`
        */ "ResourceId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamsBlockList获取域名下直播流播放的黑名单。
    */ DescribeLiveStreamsBlockList(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 当前页码。默认值为**1**。
        * @example `2`
        */ "PageNum"?: number;
        /**
        * 每页大小。取值范围：**1~3000**之间的任意整数，默认值为**2000**，最大值为**3000**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用StopCaster停止导播台，停止PVW、PGM场景，清理输出配置，停止底层音视频处理任务。
    */ StopCaster(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用EffectCasterVideoResource将视频资源生效至指定场景，场景引用该视频资源时有效。
    */ EffectCasterVideoResource(query: {
        "RegionId"?: string;
        /**
        * 场景ID。
        * @example `05ab713c-676e-49c0-96ce-cc408da1b314`
        */ "SceneId": string;
        /**
        * 资源ID。
        * @example `f096e8d6-0319-4c96-82bc-ecbc79cfac0d`
        */ "ResourceId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用ModifyCasterComponent修改组件。
    */ ModifyCasterComponent(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 组件ID。
        * @example `05ab713c-676e-49c0-96ce-cc408da1b314`
        */ "ComponentId": string;
        "OwnerId"?: number;
        /**
        * 导播间ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 组件名称，默认为组件ID。
        * @example `text01`
        */ "ComponentName"?: string;
        /**
        * 组件的类型，取值：**text | image | caption**。
        * @example `text`
        */ "ComponentType"?: string;
        /**
        * 组件显示的特效。取值：
        *  - **none（默认值）**：无
        *  - **animateH**：水平滚动
        *  - **animateV**：垂直滚动
        * @example `animateV`
        */ "Effect"?: string;
        /**
        * 设置该组件Layer的尺寸，布局等信息。 JSON格式字符串，参数名采用首字母大写、驼峰格式。
        * @example `{"HeightNormalized":"1","PositionRefer":"topRight","WidthNormalized":"0","PositionNormalized":["0.1","0.2"]}`
        */ "ComponentLayer"?: string;
        /**
        * 如果组件类型是**text**，设置该Layer元素属性。 JSON格式字符串，参数名采用首字母大写，驼峰格式。
        * @example `{"BorderWidthNormalized":"1","SizeNormalized":"0.2","Color":"0x000000","FontName":"KaiTi","BorderColor":"0x000000","Text":"hello world!"}`
        */ "TextLayerContent"?: string;
        /**
        * 如果组件类型是**image**，设置该Layer元素属性。 JSON格式字符串，参数名采用首字母大写，驼峰格式。
        * @example `{"MaterialId":"6cf724c6ebfd4a59b5b3cec6f10d5ecf"}`
        */ "ImageLayerContent"?: string;
        /**
        * 如果组件类型是**caption**，设置该Layer元素属性。 JSON格式字符串，参数名采用首字母大写，驼峰格式。
        * @example `{"BorderWidthNormalized":0.01,"SizeNormalized":0.05,"Color":"0x000000","LocationId":"RV01","SourceLan":"cn","FontName":"KaiTi","BorderColor":"0xffffff"}`
        */ "CaptionLayerContent"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeCasterVideoResources查询视频源。
    */ DescribeCasterVideoResources(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveDetectNotifyConfig删除回调通知URL。
    */ DeleteLiveDetectNotifyConfig(query: {
        "RegionId"?: string;
        /**
        * 用户域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ForbidLiveStream禁止某条流的推送，可以预设某个时刻将流恢复。
    */ ForbidLiveStream(query: {
        /**
        * 所在区域。
        * @example `cn-beijing`
        */ "RegionId"?: string;
        /**
        * 应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 流名称。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 用于指定主播推流还是客户端拉流，目前支持 “publisher”(主播推送)。
        * @example `publisher`
        */ "LiveStreamType": string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        /**
        * 是否只断流不加入黑名单，取值: yes，表示只断流不加黑名单
        * @example `no`
        */ "Oneshot"?: string;
        "ControlStreamAction"?: string;
        /**
        * 恢复流的时间。
        * UTC时间，格式：2015-12-01T17:37:00Z。
        * @example `2015-12-01T17:37:00Z`
        */ "ResumeTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveStreamsNotifyUrlConfig删除推流回调配置。
    */ DeleteLiveStreamsNotifyUrlConfig(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
    }): Promise<{}>;
    /**
    * 调用EffectCasterUrgent将指定场景画面紧急切换至备播视频，限制仅用于PGM场景的备播切换。
    */ EffectCasterUrgent(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 场景ID，PGM场景时有效。
        * @example `242b4e2c-c30f-4442-85ba-2e3e4e3dec1b`
        */ "SceneId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DeleteCasterLayout删除布局数据。
    */ DeleteCasterLayout(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 布局ID。
        * @example `21926b36-7dd2-4fde-ae25-51b5bc8e52d8`
        */ "LayoutId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeCasters查询导播台列表。
    */ DescribeCasters(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `af2ace82-dc55-40b1-9fa3-688787214b1d`
        */ "CasterId"?: string;
        /**
        * 导播台名称。
        * @example `caster001`
        */ "CasterName"?: string;
        /**
        * 起始时间，UTC 格式。 例如：`2016-06-29T19:00:00Z`。
        * @example `2016-06-29T19:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * @example `2016-06-29T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 页码。
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 每页条数。
        * @example `5`
        */ "PageSize"?: number;
        /**
        * 状态。
        *
        * - **0**：空闲
        * - **1**：导播中
        * @example `0`
        */ "Status"?: number;
    }): Promise<{}>;
    /**
    * 调用ResumeLiveStream恢复某条流的推送。
    */ ResumeLiveStream(query: {
        "RegionId"?: string;
        /**
        * 用于指定主播推流还是客户端拉流，目前支持“publisher”（主播推送）。
        * @example `publisher`
        */ "LiveStreamType": string;
        /**
        * 应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 流名称。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用ModifyCasterLayout修改布局配置，传递修改项，非修改内容无需传递。
    */ ModifyCasterLayout(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 布局Id。
        * @example `21926b36-7dd2-4fde-ae25-51b5bc8e52d8`
        */ "LayoutId": string;
        "VideoLayer": string[];
        "AudioLayer": string[];
        "BlendList": string[];
        "MixList": string[];
        "OwnerId"?: number;
        /**
        * 导播台Id。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamsControlHistory获取某个域名或应用下的直播流操作记录。
    */ DescribeLiveStreamsControlHistory(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间。UTC格式：2015-12-01T17:37:00Z。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime": string;
        /**
        * 查询结束时间。UTC格式：2015-12-01T17:37:00Z。
        * EndTime和StartTime之间的间隔不能超过30天。
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime": string;
        /**
        * 您的直播加速域名。
        * @example `play.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamsNotifyUrlConfig查询推流回调配置。
    */ DescribeLiveStreamsNotifyUrlConfig(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
    }): Promise<{}>;
    /**
    * 调用AddTrancodeSEI添加转码SEI信息。
    */ AddTrancodeSEI(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `AppName`
        */ "AppName": string;
        /**
        * 流名称。
        * @example `StreamName`
        */ "StreamName": string;
        /**
        * SEI文本。长度限制：4000字节。
        * @example `firsttxt`
        */ "Text": string;
        /**
        * 追加到每一个关键帧/每一帧。取值：**keyframe** | **frame**。
        * @example `keyframe`
        */ "Pattern": string;
        /**
        * 重复次数，-1代表无限。
        * @example `1`
        */ "Repeat": number;
        /**
        * 接收到命令后的delay时间。单位： 毫秒。
        * @example `100`
        */ "Delay": number;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `live.aliyunlive.com`
        */ "DomainName": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamBitRateData查询RTMP协议的直播流的设置时间范围内的一组帧率和码率，适用于获取历史数据。
    */ DescribeLiveStreamBitRateData(query: {
        "RegionId"?: string;
        /**
        * 您的域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName"?: string;
        /**
        * 直播流的名称。
        * @example `testStream`
        */ "StreamName"?: string;
        /**
        * 起始时间。
        * UTC格式，例如：2016-06-29T19:00:00Z。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * UTC格式，例如：2016-06-30T19:00:00Z
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateLiveDetectNotifyConfig更新回调通知URL。
    */ UpdateLiveDetectNotifyConfig(query: {
        "RegionId"?: string;
        /**
        * 发现涉黄等违规内容的回调函数。
        * @example `http://www.yourdomain.cn/examplecallback.action`
        */ "NotifyUrl": string;
        /**
        * 用户域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用StartCasterScene启动指定场景，限制仅用于PVW的打开。
    */ StartCasterScene(query: {
        "RegionId"?: string;
        /**
        * 场景ID，PVW场景时有效。
        * @example `242b4e2c-c30f-4442-85ba-2e3e4e3dec1b`
        */ "SceneId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用AddLiveSnapshotDetectPornConfig可按照域名和App级别配置直播流审核服务。
    */ AddLiveSnapshotDetectPornConfig(query: {
        "RegionId"?: string;
        /**
        *
        * 直播流所属应用名称。
        * 支持*，表示全部。
        * @example `testApp`
        */ "AppName": string;
        /**
        * OSS域名。
        * @example `oss.aliyunlive.com`
        */ "OssEndpoint": string;
        /**
        * OSS存储bucket名称。
        * @example `livebucket`
        */ "OssBucket": string;
        /**
        * 用户域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 保存涉黄涉政等违规图片的对象模板。
        * 如不明确给出，默认为`{AppName}/{StreamName}/{Date}/{Hour}/{Minute}_{Second}.jpg`。
        * @example `record/{AppName}/{StreamName}/{Sequence}`
        */ "OssObject"?: string;
        "Scene"?: string[];
        /**
        * 采样间隔。单位：秒。
        * 取值范围：**5~3600**。
        * @example `10`
        */ "Interval"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainBpsData查询直播域名的网络带宽监控数据。
    */ DescribeLiveDomainBpsData(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的直播域名。
        * 若参数为空，默认返回所有直播域名合并后数据。
        * @example `test.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为**5**分钟。
        * - 最大数据粒度为**1**天。
        * - 最长可查询**90**天内的数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间。
        * - 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
        * - 最小数据粒度为**5**分钟。
        * - 最大数据粒度为**1**天。
        * - 最长可查询**90**天内的数据。
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300（默认值）**, **3600**和**86400**秒。
        * > 不传或传值不支持时，使用默认值300秒。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `alibaba`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `tianjin`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateLiveSnapshotDetectPornConfig更新审核配置。
    */ UpdateLiveSnapshotDetectPornConfig(query: {
        "RegionId"?: string;
        /**
        * App名，支持*表示全部。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 用户域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * OSS域名。
        * @example `oss-cn-shanghai.aliyuncs.com`
        */ "OssEndpoint"?: string;
        /**
        * OSS存储bucket名称。
        * @example `test123`
        */ "OssBucket"?: string;
        /**
        * 保存涉黄涉政等违规图片的对象模板。
        * 如不明确给出，默认为`{AppName}/{StreamName}/{Date}/{Hour}/{Minute}{Second}.jpg`。
        * @example `{AppName}/{StreamName}/{Date}/{Hour}/{Minute}_{Second}.jpg`
        */ "OssObject"?: string;
        /**
        * 采样间隔。
        * 取值范围：**5-3600秒**。
        * @example `5`
        */ "Interval"?: number;
        "Scene"?: string[];
    }): Promise<{}>;
    /**
    * 调用DescribeCasterStreamUrl查询导播台流信息列表。
    */ DescribeCasterStreamUrl(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeCasterConfig查询导播台配置信息。
    */ DescribeCasterConfig(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用CopyCaster复制导播台，复制指定导播台并返回新导播台实例。
    */ CopyCaster(query: {
        "RegionId"?: string;
        /**
        * 原导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "SrcCasterId": string;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `53200b81-b761-4c10-842a-a0726d972293`
        */ "ClientToken": string;
        "OwnerId"?: number;
        /**
        * 新导播台名称。
        * @example `caster001`
        */ "CasterName": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamsPublishList获取某一时间段内某个域名（或域名下某应用或某个流）的推流记录。
    */ DescribeLiveStreamsPublishList(query: {
        /**
        * 所属区域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 起始时间。
        * UTC 格式，例如：2016-06-29T19:00:00Z。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime": string;
        /**
        * 结束时间。EndTime和StartTime之间的间隔不能超过30天。
        * UTC格式，例如：2016-06-30T19:00:00Z。
        * @example `2017-12-22T08:00:00Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * 您的域名。
        * @example `play.yourdomain.com`
        */ "DomainName": string;
        /**
        * 直播流所属应用名称。
        * <note>AppName不支持通配符（*）查询，且不支持模糊查询。</note>
        * @example `testApp`
        */ "AppName"?: string;
        /**
        * 直播流名称。
        * <note>StreamName不支持通配符（*）查询，但支持模糊查询 。</note>
        * @example `testStream`
        */ "StreamName"?: string;
        /**
        * 分页大小，取值：**1~3000**之前的任意整数。最大值为**3000**，默认值为**2000**。
        * @example `1500`
        */ "PageSize"?: number;
        /**
        * 当前页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 流类型。取值范围：
        * - **all（默认值）**：查询所有流
        * - **raw**：查询原始流
        * - **trans**：查询转码流
        * @example `all`
        */ "StreamType"?: string;
        /**
        * 指定是否模糊匹配流名称。取值：
        * - **fuzzy**：模糊匹配
        * - **strict**：精准匹配
        * @example `fuzzy`
        */ "QueryType"?: string;
        /**
        * 排序方式。取值范围：
        * - stream_name_desc
        * - stream_name_asc
        * - stream_publish_time_desc
        * - stream_publish_asc
        * @example `stream_publish_time_desc`
        */ "OrderBy"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveRecordNotifyConfig删除域名级别录制回调配置。
    */ DeleteLiveRecordNotifyConfig(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamRecordIndexFile查询单个录制索引文件。
    */ DescribeLiveStreamRecordIndexFile(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名称。
        * @example `testStream`
        */ "StreamName": string;
        /**
        * 索引文件ID。
        * @example `xxx`
        */ "RecordId": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamsOnlineList查看指定域名下（或者指定域名下某个应用）的所有正在推的流的信息。
    */ DescribeLiveStreamsOnlineList(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `play.yourdomain.com`
        */ "DomainName": string;
        /**
        * 应用名称。
        * <note>AppName不支持通配符（*）查询，且不支持模糊查询。</note>
        * @example `testApp`
        */ "AppName"?: string;
        /**
        * 流名称。
        * <note>StreamName不支持通配符（*）查询，但支持模糊查询 。</note>
        * @example `myStream`
        */ "StreamName"?: string;
        /**
        * 每页大小，取值：**1~3000**之前的任意整数。最大值为**3000**，默认值为**2000**。
        * @example `1500`
        */ "PageSize"?: number;
        /**
        * 当前页码，默认值为**1**。
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 流类型。取值范围：
        * - **all（默认值）**：查询所有流
        * - **raw**：查询原始流
        * - **trans**：查询转码流
        * @example `all`
        */ "StreamType"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        /**
        * 指定是否模糊匹配流名称。取值：
        * - **fuzzy**：模糊匹配
        * - **strict**：精准匹配
        * @example `fuzzy`
        */ "QueryType"?: string;
        "OrderBy"?: string;
    }): Promise<{}>;
    /**
    * 调用StartCaster启动导播台。若PVW、PGM场景不存在则创建，启动PVW、PGM场景，启动底层音视频处理任务。
    */ StartCaster(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用SetCasterConfig配置导播台，全量覆盖配置信息，若指定参数置为空则清除导播台该项配置。
    */ SetCasterConfig(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 导播台名称。
        * @example `caster001`
        */ "CasterName"?: string;
        /**
        * 域名。
        * 请您在导播台启动前完成域名配置。 若该参数为空，默认清除导播台域名配置。
        * @example `test.live.com`
        */ "DomainName"?: string;
        /**
        * 转码配置。
        * JSON格式字符串，结构体内部字段请按首字母大写，驼峰格式输入。 若该参数设置为空，默认清除转码配置。
        * @example `lld`
        */ "TranscodeConfig"?: string;
        /**
        * 录制配置。
        * 参数设置为空时表示不启用录制功能。 JSON格式字符串，结构体内部字段请按首字母大写，驼峰格式输入。 若该参数置为空，默认清除录制配置。
        * @example `{ "endpoint": "XXXXXX",  "ossBucket": "XXXXXX", "videoFormat": ["flv","m3u8" ]  "interval": 5 }`
        */ "RecordConfig"?: string;
        /**
        * 延时播放。
        * - 0（默认值）：禁用延时
        * - 大于0：为启用延时
        * - 时间单位：秒
        * - 若该参数置为空，默认清除延播配置。
        * @example `0`
        */ "Delay"?: number;
        /**
        * 备播视频，媒资库素材Id若该参数置为空，默认清除备播配置。
        * @example `a2b8e671`
        */ "UrgentMaterialId"?: string;
        /**
        * 用户自定义导播台旁路输出地址。 若该参数为空，则默认使用阿里云自动生成的输出地址。
        * @example `http://XXXXXX/XXXXXXX`
        */ "SideOutputUrl"?: string;
        /**
        * 用户回调地址。若需要接收回调通知，请输入可用的接收地址，接受http协议。 若该参数置为空，默认取消导播台回调通知。
        * @example `http://XXXXXX/XXXXXXX`
        */ "CallbackUrl"?: string;
        /**
        * 轮播生效标志。
        * - **0**：不生效
        * - **1**：生效
        * @example `1`
        */ "ProgramEffect"?: number;
        /**
        * 轮播台名称，若使用轮播功能时可配置。
        * @example `program_name`
        */ "ProgramName"?: string;
        /**
        * 是否启用Channel。
        *
        * - **0（默认）**：不启用。
        * - **1**：启用。
        * > 默认不启用，且启用后不可取消；不启用时Resource直接被布局引用，首次开启Channel需要在导播台停止的状态下进行，之前已存在的布局将被废弃，Resource需要首先设置到Channel中，新增的布局直接引用Channel，通过Channel可调整视频源播放进度和播放状态，该模式下视频源、PVW、PGM三区域若引用同一Resource，则对应画面将保持同步。
        * @example `1`
        */ "ChannelEnable"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveSnapshotConfig查询域名下的截图配置。
    */ DescribeLiveSnapshotConfig(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 直播流所属应用名称。
        * *表示查询针对域名的配置，不传表示查询该域名下所有的配置。
        * @example `testApp`
        */ "AppName"?: string;
        /**
        *
        * 分页的页码。
        * 默认值：**1**。
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 每页大小。取值范围：**5~30**。
        * 默认值：**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 排序。取值：
        * - asc（默认值）：升序
        * - desc：降序
        * @example `asc`
        */ "Order"?: string;
    }): Promise<{}>;
    /**
    * 调用AddCasterComponent添加组件。
    */ AddCasterComponent(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 用于指定组件位置，每个位置至多设置一个组件，格式需符合“RC01…RC99”。
        * > 组件类型为caption时，表示引用的视频源Location。
        * @example `RC01`
        */ "LocationId": string;
        /**
        * 组件类型。可取值：**text** | **image** | **caption**。
        * @example `text`
        */ "ComponentType": string;
        /**
        * 设置该组件Layer的尺寸，布局等信息。
        * JSON格式字符串，参数名采用首字母大写、驼峰格式。
        * @example `{"HeightNormalized":"1","PositionRefer":"topRight","WidthNormalized":"0","PositionNormalized":["0.1","0.2"]}`
        */ "ComponentLayer": string;
        "OwnerId"?: number;
        /**
        * 导播间ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 组件名称。默认为组件ID。
        * @example `text01`
        */ "ComponentName"?: string;
        /**
        * 组件显示的特效 。可取值：
        *
        * - **none（默认值）**：无
        * - **animateH**：水平滚动
        * - **animateV**：垂直滚动
        * @example `animateH`
        */ "Effect"?: string;
        /**
        * 设置该Layer元素属性，JSON格式字符串，参数名采用首字母大写，驼峰格式。
        * @example `{"BorderWidthNormalized":"1","SizeNormalized":"0.2","Color":"0x000000","FontName":"KaiTi","BorderColor":"0x000000","Text":"hello world!"}`
        */ "TextLayerContent"?: string;
        /**
        * 设置该Layer元素属性，JSON格式字符串，参数名采用首字母大写，驼峰格式。
        * @example `{"MaterialId":"6cf724c6ebfd4a59b5b3cec6f10d5ecf"}`
        */ "ImageLayerContent"?: string;
        /**
        * 设置该Layer元素属性，JSON格式字符串，参数名采用首字母大写，驼峰格式。
        * @example `{"BorderWidthNormalized":0.01,"SizeNormalized":0.05,"Color":"0x000000","LocationId":"RV01","SourceLan":"cn","FontName":"KaiTi","BorderColor":"0xffffff"}`
        */ "CaptionLayerContent"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveSnapshotDetectPornConfig查询审核配置。
    */ DescribeLiveSnapshotDetectPornConfig(query: {
        "RegionId"?: string;
        /**
        * 用户域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * app名，如不给出表示域名下所有的。
        * @example `testApp`
        */ "AppName"?: string;
        /**
        * 分页的页码。
        * 默认值：**1**。
        * @example `1`
        */ "PageNum"?: number;
        /**
        *
        * 每页大小。默认值：**10**。
        * 取值范围：**5~30**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 排序。取值：
        * - **Asc（默认值）**：升序
        * - **Desc**：降序
        * @example `asc`
        */ "Order"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyCasterVideoResource修改视频资源。
    */ ModifyCasterVideoResource(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 资源ID。
        * @example `05ab713c-676e-49c0-96ce-cc408da1b314`
        */ "ResourceId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
        /**
        * 视频源名称。
        * @example `test001`
        */ "ResourceName"?: string;
        /**
        * 直播流地址。
        * @example `rtmp://XXXXXX/XXX/XXXXXX`
        */ "LiveStreamUrl"?: string;
        /**
        * 素材ID。
        * @example `f080575eb5f4427684fc0715159ab3cd`
        */ "MaterialId"?: string;
        /**
        * 点播文件地址。
        * 当且仅当资源为文件视频，且视频文件未导入素材库时使用，仅限**mp4、flv、ts、mov**格式。
        * @example `http://XXXXXX/XXX/XXXXXX.flv`
        */ "VodUrl"?: string;
        /**
        * 仅对文件视频有效，BeginOffset值大于0，表示从相对于首帧的偏差时间作为开始读取的位置。 单位：毫秒(ms) 。
        * @example `0`
        */ "BeginOffset"?: number;
        /**
        * 仅对文件视频有效，单位：毫秒(ms) 。
        *
        * - EndOffset值大于0时，表示从相对于首帧的偏差时间为结束读取的位置。
        * - EndOffset值小于0时，表示相对于最后一帧的偏差时间作为结束读取的位置。
        * @example `10000`
        */ "EndOffset"?: number;
        /**
        * 仅对文件视频有效，表示播放完后重复继续播放的次数。
        *
        * - **0（默认值）**：表示不重复播放。
        * - **-1**：表示一直循环重复。
        * @example `2`
        */ "RepeatNum"?: number;
        /**
        * PTS回调间隔，单位ms，仅对点播素材有效。
        * @example `2000`
        */ "PtsCallbackInterval"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLivePullStreamConfig查询域名下拉流配置信息。
    */ DescribeLivePullStreamConfig(query: {
        "RegionId"?: string;
        /**
        * 您的拉流域名。
        * @example `play.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamTranscodeInfo查询转码配置信息。
    */ DescribeLiveStreamTranscodeInfo(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 您的加速域名。
        * @example `play.aliyunlive.com`
        */ "DomainTranscodeName": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveRecordNotifyConfig查询域名级别录制回调配置。
    */ DescribeLiveRecordNotifyConfig(query: {
        "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveSnapshotDetectPornConfig删除直播审核的配置。
    */ DeleteLiveSnapshotDetectPornConfig(query: {
        "RegionId"?: string;
        /**
        * App名，支持`*`表示全部。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 用户域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用CopyCasterSceneConfig将原场景配置应用至目标场景并生效，仅限PVW场景配置拷贝至PGM场景。
    */ CopyCasterSceneConfig(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 原场景ID，仅限于PVM场景。
        * @example `f1a361f4-bee3-436d-ae6e-d38e69437666`
        */ "FromSceneId": string;
        /**
        * 目标场景ID，仅限于PGM场景。
        * @example `05ab713c-676e-49c0-96ce-cc408da1b314`
        */ "ToSceneId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用UpdateLiveRecordNotifyConfig更新域名级别录制回调配置。
    */ UpdateLiveRecordNotifyConfig(query: {
        "RegionId"?: string;
        /**
        * 加速域名。
        * @example `test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 录制回调（包括事件回调和状态回调）url地址。
        * - 必须以`http://`或`https:/`/开头。
        * - 需要做url encode。
        * @example `http://www.yourdomain.cn/examplecallback.action`
        */ "NotifyUrl"?: string;
        /**
        * 按需回调url地址。
        * - 必须以`http://`或`https://`开头。
        * - 需要做url encode。
        * @example `http://www.yourdomain.cn/ondemandcallback.action`
        */ "OnDemandUrl"?: string;
        /**
        * 是否需要录制任务状态回调，可取值：**true | false**。
        * 默认值：**false**。
        * @example `false`
        */ "NeedStatusNotify"?: boolean;
    }): Promise<{}>;
    /**
    * 调用AddCasterVideoResource添加视频源，视频源数量受限于导播台输入路数。
    */ AddCasterVideoResource(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 视频源名称。
        * @example `test001`
        */ "ResourceName": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
        */ "CasterId": string;
        /**
        * 用于标识视频源位置，定义布局内画面的引用编号，每个位置至多关联一个资源，格式需符合“RV01…RV12”。
        * @example `RV01`
        */ "LocationId"?: string;
        /**
        * 直播流地址，视频源类型为直播流时必选。
        * @example `http://live.aliyun.com/AppName/StreamName.flv`
        */ "LiveStreamUrl"?: string;
        /**
        * 媒资库素材ID，视频源类型为素材时必选。
        * @example `f080575eb5f4427684fc0715159ab3cd`
        */ "MaterialId"?: string;
        /**
        * 点播文件地址，当且仅当资源为文件视频，且视频文件未导入素材库时使用，仅限**mp4、flv、ts**格式。
        * @example `http://live.aliyun.com/AppName/StreamName.flv`
        */ "VodUrl"?: string;
        /**
        * 仅对文件视频有效， 单位：毫秒(ms) 。
        * > 大于0，表示从相对于首帧的偏差时间作为开始读取的位置。
        * @example `1000`
        */ "BeginOffset"?: number;
        /**
        * 仅对文件视频有效，单位：毫秒(ms)。
        *
        * > - 大于0时，表示从相对于首帧的偏差时间为结束读取的位置。
        * - 小于0时，表示相对于最后一帧的偏差时间作为结束读取的位置。
        * @example `10000`
        */ "EndOffset"?: number;
        /**
        * 仅对文件视频有效，表示播放完后重复继续播放的次数。
        * > 其中，**0（默认值）**表示不重复播放。**-1**表示一直循环重复。
        * @example `2`
        */ "RepeatNum"?: number;
        /**
        * PTS回调间隔。
        * @example `2000`
        */ "PtsCallbackInterval"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeCasterLayouts查询布局列表。
    */ DescribeCasterLayouts(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 布局ID。
        * 若未指定，则查询导播台下所有布局列表。
        * @example `72d2ec7a-4cd7-4a01-974b-7cd53947f053`
        */ "LayoutId"?: string;
    }): Promise<{}>;
    /**
    * 调用AddLiveRecordNotifyConfig添加域名级别录制回调配置。
    */ AddLiveRecordNotifyConfig(query: {
        "RegionId"?: string;
        /**
        * 录制回调（包括录制事件和状态回调） url 地址。
        * - 必须以`http://`或者`https://`开头。
        * @example `http://www.yourdomain.cn/examplecallback.action`
        */ "NotifyUrl": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 是否需要录制任务状态回调，可取值：**true | false**。
        * 默认值：false。
        * @example `false`
        */ "NeedStatusNotify"?: boolean;
        /**
        * 按需录制回调 url 地址。
        * - 必须以`http://`或者`https://`开头。
        * - 更多详情参考[按需录制回调文档](~~85910~~)。
        * @example `http://www.yourdomain.cn/ondemandcallback.action`
        */ "OnDemandUrl"?: string;
    }): Promise<{}>;
    /**
    * 调用AddLiveAppSnapshotConfig配置截图信息。输出内容保存到OSS中，重新推流即生效。
    */ AddLiveAppSnapshotConfig(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * 支持通配符＊号，代表该域名下所有的AppName。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 截图周期，单位：秒。取值范围：**5~3600**。
        * @example `5`
        */ "TimeInterval": number;
        /**
        * OSSEndpoint域名。
        * @example `oss-cn-shanghai.aliyuncs.com`
        */ "OssEndpoint": string;
        /**
        * OSSBucket名称。
        * @example `test123`
        */ "OssBucket": string;
        /**
        * 您的加速域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * OSS存储文件名，每次截图都覆盖此文件。
        * - 小于256bytes。
        * - 目前仅支持生成jpg图片。
        * - 支持变量匹配，包含{AppName}、{StreamName}，例如：`{AppName}/{StreamName}.jpg`。
        * @example `{AppName}/{StreamName}.jpg`
        */ "OverwriteOssObject"?: string;
        /**
        * OSS存储文件名。每次截图都递增存储，**DescribeLiveStreamSnapshotInfo**接口查询一段时间的文件。
        * - 小于256bytes。
        * - 目前仅支持生成jpg图片。
        * - 支持变量匹配，包含{AppName}、{StreamName}、{UnixTimestamp}、{Sequence}，其中 {UnixTimestamp}、{Sequence} 必填一个，如：`snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`。
        * @example `snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`
        */ "SequenceOssObject"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteLiveStreamTranscode删除转码配置信息。
    */ DeleteLiveStreamTranscode(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `app`
        */ "App": string;
        /**
        * 转码模版。目前有：
        * - 标准质量模板：**lld**、**lsd**、**lhd**、**lud**。
        * - 高品质（窄带高清™转码）模板：**ld**、**sd**、**hd**、**ud**。
        * @example `lld`
        */ "Template": string;
        /**
        * 您的加速域名。
        * @example `play.aliyunlive.com`
        */ "Domain": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeCasterComponents查询导播台组件列表。
    */ DescribeCasterComponents(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 组件ID。
        * @example `21926b36-7dd2-4fde-ae25-51b5bc8e52d8`
        */ "ComponentId"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateLiveAppSnapshotConfig更新直播流下的截图配置。输出内容保存到OSS中，重新推流后生效。
    */ UpdateLiveAppSnapshotConfig(query: {
        "RegionId"?: string;
        /**
        *
        * 直播流所属应用名称。
        * 支持**＊**号，代表该域名下所有的AppName。
        * @example `test123`
        */ "AppName": string;
        /**
        * 加速域名。
        * @example `test.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 截图周期，单位：秒。
        * 取值范围：**5~3600**。
        * @example `5`
        */ "TimeInterval"?: number;
        /**
        * OSSEndpoint域名。
        * @example `oss-cn-shanghai.aliyuncs.com`
        */ "OssEndpoint"?: string;
        /**
        * OSSBucket名称。
        * @example `test123`
        */ "OssBucket"?: string;
        /**
        * OSS存储文件名，每次截图都覆盖此文件。
        * - 小于256bytes。
        * - 目前仅支持生成jpg图片。
        * - 支持变量匹配，包含 {AppName}、{StreamName}。例如：`{AppName}/{StreamName}.jpg`。
        * - 传入**-**，表示删除此字段。
        * @example `{AppName}/{StreamName}.jpg`
        */ "OverwriteOssObject"?: string;
        /**
        * OSS存储文件名。每次截图都递增存储，**DescribeLiveStreamSnapshotInfo**接口查询一段时间的文件。
        * - 小于256bytes。
        * - 目前仅支持生成jpg图片。
        * - 支持变量匹配，包含 {AppName}、{StreamName}、{UnixTimestamp}、{Sequence}，其中 {UnixTimestamp}、{Sequence} 必填一个。例如：`snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`。
        * - 传入**-**，表示删除此字段。
        * @example `snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`
        */ "SequenceOssObject"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDetectNotifyConfig查询回调通知URL。
    */ DescribeLiveDetectNotifyConfig(query: {
        "RegionId"?: string;
        /**
        * 用户域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveStreamsFrameRateAndBitRateData实时查询直播流帧率和码率数据。
    */ DescribeLiveStreamsFrameRateAndBitRateData(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 您的域名。
        * @example `www.yourdomain.com`
        */ "DomainName": string;
        "OwnerId"?: number;
        /**
        * 直播流名称。
        * @example `testStream`
        */ "StreamName"?: string;
        /**
        * 开始时间。UTC格式。
        * @example `2017-12-21T08:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        * UTC格式。StartTime和EndTime时间间隔在7天内，且EndTime超过当前时间。
        * @example `2017-12-21T09:00:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainTrafficData查询直播域名网络流量监控数据。
    */ DescribeLiveDomainTrafficData(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的直播域名。
        * > 若参数为空，默认返回所有直播域名合并后数据。
        * @example `test.com`
        */ "DomainName"?: string;
        /**
        * 获取数据起始时间点。
        * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
        * - 最小数据粒度为**5**分钟。
        * - 最大数据粒度为**1**天。
        * - 最长可查询**90**天内的数据。
        * @example `2017-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间。
        * 获日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
        * - 最小数据粒度为**5**分钟。
        * - 最大数据粒度为**1**天。
        * - 最长可查询**90**天内的数据。
        * @example `2017-12-10T21:00:00Z`
        */ "EndTime"?: string;
        /**
        * 查询数据的时间粒度，支持**300**, **3600**和**86400**秒。
        * > 不传或传值不支持时，使用默认值**300**秒。
        * @example `300`
        */ "Interval"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `alibaba`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `tianjin`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用AddLiveStreamTranscode添加转码配置信息。
    */ AddLiveStreamTranscode(query: {
        "RegionId"?: string;
        /**
        * 直播流所属应用名称。
        * @example `app`
        */ "App": string;
        /**
        * 转码模版。目前有：
        * - **标准质量模板**：lld、lsd、lhd、lud
        * - **高品质（窄带高清™转码）模板**：ld、sd、hd、ud
        * @example `lld`
        */ "Template": string;
        /**
        * 您的加速域名。
        * @example `play.aliyunlive.com`
        */ "Domain": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 获取禁播房间列表，被禁止推流的房间可以通过此接口获取。
    */ DescribeForbidPushStreamRoomList(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 业务方APP ID。
        * @example `live-app`
        */ "AppId": string;
        /**
        * 支持的创建时间排列方式，递增：asc， 降序：desc  默认：desc 降序
        * @example `desc`
        */ "Order"?: string;
        /**
        * 页码。 默认：1
        * @example `1`
        */ "PageNum"?: number;
        /**
        * 每页数量。 默认：10
        * @example `3`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateCasterSceneAudio更新场景音频配置。
    */ UpdateCasterSceneAudio(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 场景ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e19876`
        */ "SceneId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 是否启用音频跟随。 默认启用音频跟随，为空则保持最近一次配置不变。
        * - **0**：混音模式，
        * - **1**：音频跟随视频模式
        * @example `1`
        */ "FollowEnable"?: number;
        "AudioLayer"?: string[];
        "MixList"?: string[];
    }): Promise<{}>;
    /**
    * 调用DescribeCasterSceneAudio查询场景音频配置信息。
    */ DescribeCasterSceneAudio(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 场景ID。
        * @example `97df6b7f-3490-47d2-ac50-883390876576`
        */ "SceneId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `97df6b7f-3490-47d2-ac50-883387654365`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainRealTimeTrafficData获取加速域名的1分钟流量监控数据。
    */ DescribeLiveDomainRealTimeTrafficData(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 可输入需要查询的加速域名。
        * > 支持批量域名查询，多个域名用逗号（半角）分隔。若参数为空，默认返回所有加速域名合并后数据。
        * @example `test.com`
        */ "DomainName": string;
        /**
        * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ` 。
        * > 不写默认读取过去1小时数据。
        * @example `2015-12-10T20:00:00Z`
        */ "StartTime"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `alibaba`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `tianjin`
        */ "LocationNameEn"?: string;
        /**
        * 结束时间需大于起始时间。日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
        * @example `2015-12-10T20:01:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyCasterProgram修改导播台节目单。
    */ ModifyCasterProgram(query: {
        "RegionId"?: string;
        "Episode": string[];
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeCasterChannels查询导播台通道信息列表。
    */ DescribeCasterChannels(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainRealTimeBpsData获取域名1分钟粒度带宽数据。
    */ DescribeLiveDomainRealTimeBpsData(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 域名。
        * @example `test.com,abc.com`
        */ "DomainName": string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `alibaba`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `tianjin`
        */ "LocationNameEn"?: string;
        /**
        * 起始时间。
        * 日期格式按照ISO8601表示法，并使用UTC时间。 例如：**2016-10-20T04:00:00Z**。
        * @example `2015-11-30T05:39:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。
        *
        * - 日期格式按照ISO8601表示法，并使用UTC时间。 例如：**2016-10-20T04:00:00Z**。
        * - 不填默认查询从StartTime起一小时内的数据。
        *
        * @example `2015-11-30T05:40:00Z`
        */ "EndTime"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteCasterSceneConfig清除指定场景的配置信息。
    */ DeleteCasterSceneConfig(query: {
        "RegionId"?: string;
        /**
        * 场景ID。
        * @example `b5f8c837-ceeb-424f-b30b-68e94e864995`
        */ "SceneId": string;
        /**
        * 可取值：
        * - **Component**：清除组件配置
        * - **Layou**：清除布局配置
        * - **All**：清除组件和布局配置
        * @example `Component`
        */ "Type": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `b4810848-bcf9-4aef-bd4a-e6bba2d966c8`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用AddCasterProgram添加导播台节目单。
    */ AddCasterProgram(query: {
        "RegionId"?: string;
        "Episode": string[];
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用CreateCaster创建导播台。
    */ CreateCaster(query: {
        "RegionId"?: string;
        /**
        * 导播台规格类型。可取值：
        * - **0**：播单型
        * - **1**：通用型
        * @example `1`
        */ "NormType": number;
        /**
        * 付费方式。可取值：
        * - **PrePaid**：预付费
        * - **PostPaid**：后付费
        *  > 目前只支持PostPaid。
        * @example `PrePaid`
        */ "ChargeType": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `53200b81-b761-4c10-842a-a0726d972293`
        */ "ClientToken": string;
        /**
        * 默认为**CasterId**。
        * @example `coco-caster5`
        */ "CasterName"?: string;
        /**
        * 导播台购买时间。
        * @example `2017-08-20T12:10:10Z`
        */ "PurchaseTime"?: string;
        /**
        * 导播台过期时间。
        * @example `2017-08-22T12:10:10Z`
        */ "ExpireTime"?: string;
        /**
        * 导播台预设分辨率。采用预付费方式时，取值：
        * - **lp_ld**：流畅
        * - **lp_sd**：标清
        * - **lp_hd**：高清
        * - **lp_ud**：超清
        * @example `lp_sd`
        */ "CasterTemplate"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeCasterProgram查询导播台节目单。
    */ DescribeCasterProgram(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 节目ID。
        * @example `1872639A-F203-4EC5-8E43-CB92E68F8732`
        */ "EpisodeId"?: string;
        /**
        * 节点类型。取值：
        *
        * - **Resource**：视频源
        * - **Component**：组件
        * @example `Resource`
        */ "EpisodeType"?: string;
        /**
        * 查询范围。 返回指定开始时间后开启的节目。
        * @example `2016-06-29T19:00:00`
        */ "StartTime"?: string;
        /**
        * 查询范围。 返回指定结束时间前开启的节目。
        * @example `2016-06-29T20:00:00`
        */ "EndTime"?: string;
        /**
        * 页码。
        * @example `5`
        */ "PageNum"?: number;
        /**
        * 每页节目数量。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 节目状态。 取值：
        *
        * - **0**：未播放
        * - **1**：播放中
        * - **2**：播放完毕
        * @example `0`
        */ "Status"?: number;
    }): Promise<{}>;
    /**
    * 调用AddCasterEpisode添加导播台节目。
    */ AddCasterEpisode(query: {
        "RegionId"?: string;
        /**
        * 节点类型。 取值：
        *
        * - **Resource**：视频源
        * - **Component**：组件
        *
        * @example `Resource`
        */ "EpisodeType": string;
        /**
        * 起始时间。
        *
        * UTC格式，例如：`2016-06-29T19:00:00Z` 。
        *
        * @example `2016-06-29T19:00:00Z`
        */ "StartTime": string;
        /**
        * 结束时间。
        * UTC 格式，例如：`2016-06-29T19:10:00Z `。
        *
        * @example `2016-06-29T19:10:00Z`
        */ "EndTime": string;
        /**
        * 切换策略。取值：
        *
        * - **TimeFirst**：时间优先
        * - **ContentFirst**：内容优先
        * <note>直播类视频源只允许采用时间优先，当节点类型为Resource时有效。 </note>
        * @example `TimeFirst`
        */ "SwitchType": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 节目名称。
        * @example `episode_1`
        */ "EpisodeName"?: string;
        /**
        * 视频源ID。
        *
        * > - 若节点类型为**Resource**时，参数有效且必选，
        * - 若节点类型为**Component**时，参数无效。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a41`
        */ "ResourceId"?: string;
        "ComponentId"?: string[];
    }): Promise<{}>;
    /**
    * 调用SetCasterChannel在视频源同步模式时，将视频资源设置到通道中。
    */ SetCasterChannel(query: {
        /**
        * 地域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 通道ID。
        * 布局画面的引用编号，每个通道位置至多设置一个资源，数量受限于导播台创建时的通道路数。格式符合“RV01...RV12”。
        * @example `RV01`
        */ "ChannelId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 视频源ID。
        * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
        */ "ResourceId"?: string;
        /**
        * 仅对文件视频有效，直播源无效，必须大于0，表示从相对于首帧的偏差时间作为开始读取的位置。 单位：毫秒(ms) 。
        * @example `1000`
        */ "SeekOffset"?: number;
        /**
        * 仅对文件视频有效，直播源无效。
        *
        * 播放状态：
        *
        * - **1（默认）**：播放
        * - **0**：暂停
        * @example `1`
        */ "PlayStatus"?: number;
    }): Promise<{}>;
    /**
    * 调用RealTimeRecordCommand按需完成手动录制。例如，动态地启动、停止录制 。
    */ RealTimeRecordCommand(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 您的加速域名。
        * @example `test.com`
        */ "DomainName": string;
        /**
        * App名。
        * @example `testApp`
        */ "AppName": string;
        /**
        * 直播流名。
        * @example `testStream`
        */ "StreamName": string;
        "OwnerId"?: number;
        /**
        * 操作行为。支持start、stop两种类型。
        * @example `start`
        */ "Command": string;
    }): Promise<{}>;
    /**
    * 调用DeleteCasterEpisode删除导播台节目。
    */ DeleteCasterEpisode(query: {
        "RegionId"?: string;
        /**
        * 节目ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf9327388752`
        */ "EpisodeId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
    }): Promise<{}>;
    /**
    * 调用AddCasterEpisodeGroupContent添加导播台节目列表。
    */ AddCasterEpisodeGroupContent(query: {
        "RegionId"?: string;
        /**
        * JSON字符串型的轮播单信息。参数采用首字母大写驼峰格式。
        * @example `{"CallbackUrl":"http://XXX:8000/","SideOutputUrl":"rtmp://YYY","DomainName":"ZZZ","StartTime":"2018-03-26T16:00:00Z","RepeatNum":-1,"Items":[{"ItemName":"节目1","VodUrl":"http://xxx-1.ts"},{"ItemName":"节目2","VodUrl":"http://xxx-2.ts"}]}`
        */ "Content": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `8751ad99-2ddb-4aac-ad44-84b211021c04`
        */ "ClientToken": string;
    }): Promise<{}>;
    /**
    * 调用AddCasterEpisodeGroup添加导播台节目列表。
    */ AddCasterEpisodeGroup(query: {
        "RegionId"?: string;
        /**
        * 域名。
        * @example `XXXXX.XXX.XXX`
        */ "DomainName": string;
        "Item": string[];
        /**
        * 起始时间。
        * UTC格式，例如：`2016-06-29T19:00:00Z `。
        * @example `2018-03-06T19:00:00Z`
        */ "StartTime": string;
        /**
        * 重复次数。其中。**0**表示不循环，**-1**表示无限循环。
        * @example `3`
        */ "RepeatNum": number;
        /**
        * 用户自定义旁路输出地址。
        * @example `http://XXXX/XXXX`
        */ "SideOutputUrl": string;
        /**
        * 用户回调地址。
        * @example `http://XXXXXX/XXXXXXX`
        */ "CallbackUrl": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `8751ad99-2ddb-4aac-ad44-84b211021c04`
        */ "ClientToken": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainRealTimeHttpCodeData获取加速域名1分钟粒度的HTTP返回码占比数据。
    */ DescribeLiveDomainRealTimeHttpCodeData(query: {
        /**
        * 区域。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 需要查询的加速域名。
        * > 支持批量查询，多个域名用逗号（半角）分隔。
        * @example `test.com,abc.com`
        */ "DomainName": string;
        /**
        * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。 格式为：`YYYY-MM-DDThh:mm:ssZ`。
        * > 若参数为空，默认读取过去**1**小时数据。
        * @example `2015-11-30T05:39:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间需大于起始时间。日期格式按照ISO8601表示法，并使用UTC时间。 格式为：`YYYY-MM-DDThh:mm:ssZ `。
        *
        * @example `2015-11-30T05:40:00Z`
        */ "EndTime"?: string;
        /**
        * 运营商英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有运营商。
        * @example `alibaba`
        */ "IspNameEn"?: string;
        /**
        * 区域英文名，通过**DescribeCdnRegionAndIsp**接口获得，不传为所有区域。
        * @example `tianjin`
        */ "LocationNameEn"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteCasterEpisodeGroup删除导播台节目列表。
    */ DeleteCasterEpisodeGroup(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 节目单ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf9327388752`
        */ "ProgramId": string;
    }): Promise<{}>;
    /**
    * 调用ModifyCasterEpisode修改导播台节目配置,节目类型不允许修改。
    */ ModifyCasterEpisode(query: {
        "RegionId"?: string;
        /**
        * 节目ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf9386233849`
        */ "EpisodeId": string;
        "OwnerId"?: number;
        /**
        * 导播台ID。
        * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
        */ "CasterId": string;
        /**
        * 节目名称。
        * @example `episode_name_1`
        */ "EpisodeName"?: string;
        /**
        * 视频源ID。
        *
        * - 若节点类型为**Resource视频源**时，参数有效且必选。
        * - 若节点类型为**Component组件**时，参数无效。
        * @example `16A96B9A-F203-4EC5-8E43-CB92E6837463`
        */ "ResourceId"?: string;
        "ComponentId"?: string[];
        /**
        * 起始时间。UTC格式，例如：2016-06-29T19:00:00Z。
        * @example `2016-06-29T19:00:00Z`
        */ "StartTime"?: string;
        /**
        * 结束时间。UTC格式 ，例如：2016-06-29T19:20:00Z。
        * @example `2016-06-29T19:20:00Z`
        */ "EndTime"?: string;
        /**
        * 切换策略。 节点类型为Resource视频源时有效。
        *
        * - **TimeFirst**：时间优先，直播类视频源只允许采用时间优先。
        * - **ContentFirst**：内容优先。
        * @example `TimeFirst`
        */ "SwitchType"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainFrameRateAndBitRateData查询直播域名下流帧率和码率数据。
    */ DescribeLiveDomainFrameRateAndBitRateData(query: {
        /**
        * 地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 查询时间点，UTC格式，如：2019-02-21T08:00:00Z。
        * @example `2019-02-21T08:00:00Z`
        */ "QueryTime": string;
        "OwnerId"?: number;
        /**
        * 您的域名。
        * @example `example.com`
        */ "DomainName": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLiveDomainOnlineUserNum查询域名下所有流某分钟的在线人数信息。
    */ DescribeLiveDomainOnlineUserNum(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 您的播流域名。
        * @example `example.com`
        */ "DomainName": string;
        /**
        * 查询的时间UTC 格式，精确到秒。
        * @example `2018-12-27T13:09:21Z`
        */ "QueryTime"?: string;
    }): Promise<{}>;
    UpdateBoard(query: {
        "RegionId"?: string;
        "BoardData": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    AllowPushStream(query: {
        "RegionId"?: string;
        "RoomId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    ApplyBoardToken(query: {
        "RegionId"?: string;
        "AppUid": string;
        "BoardId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    ApplyRecordToken(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    CompleteBoard(query: {
        "RegionId"?: string;
        "BoardId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    CompleteBoardRecord(query: {
        "RegionId"?: string;
        "RecordId": string;
        "EndTime": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    CreateBoard(query: {
        "RegionId"?: string;
        "AppUid": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    CreateRoom(query: {
        "RegionId"?: string;
        "RoomId": string;
        "AnchorId": string;
        "OwnerId"?: number;
        "AppId": string;
        "TemplateIds"?: string;
        "UseAppTranscode"?: boolean;
    }): Promise<{}>;
    DeleteBoard(query: {
        "RegionId"?: string;
        "BoardId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    DeleteLiveLazyPullStreamInfoConfig(query: {
        "RegionId"?: string;
        "AppName": string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DeleteRoom(query: {
        "RegionId"?: string;
        "RoomId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    DescribeBoardEvents(query: {
        "RegionId"?: string;
        "StartTime": string;
        "BoardId": string;
        "OwnerId"?: number;
        "AppId": string;
        "EndTime"?: string;
    }): Promise<{}>;
    DescribeBoardSnapshot(query: {
        "RegionId"?: string;
        "BoardId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    DescribeBoards(query: {
        "RegionId"?: string;
        "PageNum": number;
        "PageSize": number;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    DescribeCasterRtcInfo(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "CasterId": string;
    }): Promise<{}>;
    DescribeLiveDomainBpsDataByTimeStamp(query: {
        "RegionId"?: string;
        "TimePoint": string;
        "IspNames": string;
        "LocationNames": string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DescribeLiveDomainMapping(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DescribeLiveLazyPullStreamConfig(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
        "AppName"?: string;
        "LiveapiRequestFrom"?: string;
    }): Promise<{}>;
    DescribeLiveStreamCount(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DescribeLiveStreamDelayConfig(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DescribeLiveStreamOptimizedFeatureConfig(query: {
        "RegionId"?: string;
        "ConfigName": string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DescribeLiveStreamTranscodeStreamNum(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DescribeLiveTopDomainsByFlow(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
        "Limit"?: number;
    }): Promise<{}>;
    DescribeRecord(query: {
        "RegionId"?: string;
        "RecordId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    DescribeRecords(query: {
        "RegionId"?: string;
        "PageNum": number;
        "PageSize": number;
        "OwnerId"?: number;
        "AppId": string;
        "RecordState"?: string;
    }): Promise<{}>;
    DescribeRoomKickoutUserList(query: {
        "RegionId"?: string;
        "RoomId": string;
        "OwnerId"?: number;
        "AppId": string;
        "Order"?: string;
        "PageNum"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeRoomStatus(query: {
        "RegionId"?: string;
        "RoomId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    DescribeUpBpsPeakData(query: {
        "RegionId"?: string;
        "EndTime": string;
        "OwnerId"?: number;
        "StartTime": string;
        "DomainSwitch"?: string;
        "DomainName"?: string;
    }): Promise<{}>;
    DescribeUpBpsPeakOfLine(query: {
        "RegionId"?: string;
        "EndTime": string;
        "Line": string;
        "OwnerId"?: number;
        "StartTime": string;
        "DomainSwitch"?: string;
        "DomainName"?: string;
    }): Promise<{}>;
    DescribeUpPeakPublishStreamData(query: {
        "RegionId"?: string;
        "EndTime": string;
        "OwnerId"?: number;
        "StartTime": string;
        "DomainSwitch"?: string;
        "DomainName"?: string;
    }): Promise<{}>;
    ForbidPushStream(query: {
        "RegionId"?: string;
        "RoomId": string;
        "OwnerId"?: number;
        "AppId": string;
        "UserData"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    JoinBoard(query: {
        "RegionId"?: string;
        "AppUid": string;
        "BoardId": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    ModifyLiveDomainSchdmByProperty(query: {
        "RegionId"?: string;
        "Property": string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    RealTimeSnapshotCommand(query: {
        "RegionId"?: string;
        "DomainName": string;
        "AppName": string;
        "StreamName": string;
        "OwnerId"?: number;
        "Command": string;
        "Mode"?: number;
        "Interval"?: number;
    }): Promise<{}>;
    SendRoomNotification(query: {
        "RegionId"?: string;
        "RoomId": string;
        "Data": string;
        "OwnerId"?: number;
        "AppId": string;
        "AppUid"?: string;
        "Priority"?: number;
    }): Promise<{}>;
    SendRoomUserNotification(query: {
        "RegionId"?: string;
        "RoomId": string;
        "AppUid": string;
        "ToAppUid": string;
        "Data": string;
        "OwnerId"?: number;
        "AppId": string;
        "Priority"?: number;
    }): Promise<{}>;
    SetBoardCallback(query: {
        "RegionId"?: string;
        "CallbackEnable": number;
        "OwnerId"?: number;
        "AppId": string;
        "AuthKey"?: string;
        "AuthSwitch"?: string;
        "CallbackUri"?: string;
        "CallbackEvents"?: string;
    }): Promise<{}>;
    SetLiveLazyPullStreamInfoConfig(query: {
        "RegionId"?: string;
        "AppName": string;
        "PullDomainName": string;
        "PullProtocol": string;
        "OwnerId"?: number;
        "DomainName": string;
        "PullAppName"?: string;
        "PullAuthType"?: string;
        "PullAuthKey"?: string;
        "PullArgs"?: string;
        "LiveapiRequestFrom"?: string;
    }): Promise<{}>;
    SetLiveStreamDelayConfig(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
        "HlsDelay"?: number;
        "HlsLevel"?: string;
        "FlvDelay"?: number;
        "FlvLevel"?: string;
        "RtmpDelay"?: number;
        "RtmpLevel"?: string;
    }): Promise<{}>;
    SetLiveStreamOptimizedFeatureConfig(query: {
        "RegionId"?: string;
        "ConfigName": string;
        "ConfigStatus": string;
        "OwnerId"?: number;
        "DomainName": string;
        "ConfigValue"?: string;
    }): Promise<{}>;
    StartBoardRecord(query: {
        "RegionId"?: string;
        "BoardId": string;
        "StartTime": string;
        "OwnerId"?: number;
        "AppId": string;
    }): Promise<{}>;
    StartLiveIndex(query: {
        "RegionId"?: string;
        "AppName": string;
        "StreamName": string;
        "TokenId": string;
        "InputUrl": string;
        "OwnerId"?: number;
        "DomainName": string;
        "Interval"?: number;
        "OssBucket"?: string;
        "OssEndpoint"?: string;
        "OssUserId"?: string;
        "OssRamRole"?: string;
    }): Promise<{}>;
    StopLiveIndex(query: {
        "RegionId"?: string;
        "AppName": string;
        "StreamName": string;
        "TaskId": string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    UpdateBoardCallback(query: {
        "RegionId"?: string;
        "CallbackEnable": number;
        "OwnerId"?: number;
        "AppId": string;
        "AuthKey"?: string;
        "AuthSwitch"?: string;
        "CallbackUri"?: string;
        "CallbackEvents"?: string;
    }): Promise<{}>;
    UpdateLiveTopLevelDomain(query: {
        "RegionId"?: string;
        "DomainName": string;
        "TopLevelDomain": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateLiveRealTimeLogDelivery(query: {
        "RegionId"?: string;
        "Logstore": string;
        "Region": string;
        "DomainName": string;
        "OwnerId"?: number;
        "Project": string;
    }): Promise<{}>;
    DeleteLiveRealTimeLogLogstore(query: {
        "RegionId"?: string;
        "Logstore": string;
        "Region": string;
        "OwnerId"?: number;
        "Project": string;
    }): Promise<{}>;
    DeleteLiveRealtimeLogDelivery(query: {
        "RegionId"?: string;
        "Project": string;
        "Logstore": string;
        "Region": string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DescribeLiveDomainRealtimeLogDelivery(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    DescribeLiveRealtimeDeliveryAcc(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "StartTime"?: string;
        "EndTime"?: string;
        "Interval"?: string;
        "Project"?: string;
        "LogStore"?: string;
    }): Promise<{}>;
    DescribeLiveRealtimeLogAuthorized(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "LiveOpenapiReserve"?: string;
    }): Promise<{}>;
    DisableLiveRealtimeLogDelivery(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    EnableLiveRealtimeLogDelivery(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName": string;
    }): Promise<{}>;
    ListLiveRealtimeLogDelivery(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "LiveOpenapiReserve"?: string;
    }): Promise<{}>;
    ListLiveRealtimeLogDeliveryDomains(query: {
        "RegionId"?: string;
        "Logstore": string;
        "Region": string;
        "OwnerId"?: number;
        "Project": string;
    }): Promise<{}>;
    ListLiveRealtimeLogDeliveryInfos(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "LiveOpenapiReserve"?: string;
    }): Promise<{}>;
    ModifyLiveRealtimeLogDelivery(query: {
        "RegionId"?: string;
        "Logstore": string;
        "Region": string;
        "DomainName": string;
        "OwnerId"?: number;
        "Project": string;
    }): Promise<{}>;
    DescribeLiveDetectPornData(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DomainName"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "App"?: string;
        "Stream"?: string;
        "Fee"?: string;
        "Scene"?: string;
        "Region"?: string;
        "SplitBy"?: string;
    }): Promise<{}>;
    SetCasterSyncGroup(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "CasterId": string;
        "SyncGroup"?: string[];
    }): Promise<{}>;
}
export default LIVE;
