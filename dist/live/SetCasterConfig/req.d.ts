export interface SetCasterConfigRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster](~~69338~~)接口创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "CasterId": string;
    /**
     * 导播台名称。
     * @example `liveCaster****`
     */
    "CasterName"?: string;
    /**
     * 主播流域名。
     * 请您在导播台启动前完成域名配置。 若该参数为空，默认清除导播台域名配置。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 转码配置。
     * JSON格式字符串，结构体内部字段请按首字母大写，驼峰格式输入。 若该参数设置为空，默认清除转码配置， 当转码模板为空的时候，导播台启动时会报错。
     * @example `{"casterTemplate": "lp_ld"}`
     */
    "TranscodeConfig"?: string;
    /**
     * 录制配置信息。格式为JSON。配置元素信息如下：
     * - **endpoint**：阿里云服务的API服务端地址。
     * - **ossBucket**：ossBucket名称。
     * - **videoFormat**：支持导出的视频文件格式，例如：`[{\"OssObjectPrefix\":\"record/{AppName}/{StreamName}/{StartTime}_{EndTime}\",\"Format\":\"m3u8\",\"CycleDuration\":21600,\"SliceOssObjectPrefix\":\"record/{AppName}/{StreamName}/{UnixTimestamp}\"},{\"OssObjectPrefix\":\"record/{AppName}/{StreamName}/{StartTime}_{EndTime}\",\"Format\":\"flv\",\"CycleDuration\":21600}]`。
     * - **interval**：时间间隔，单位为毫秒（ms）。
     * >参数设置为空时表示不启用录制功能。 若该参数置为空，默认清除录制配置。
     * @example `{ "endpoint": "http://oss-cn-********.aliyuncs.com/api",  "ossBucket****": "liveBucket****", "VideoFormat":[{\"OssObjectPrefix\":\"record/{AppName}/{StreamName}/{StartTime}_{EndTime}\",\"Format\":\"m3u8\",\"CycleDuration\":21600,\"SliceOssObjectPrefix\":\"record/{AppName}/{StreamName}/{UnixTimestamp}\"},{\"OssObjectPrefix\":\"record/{AppName}/{StreamName}/{StartTime}_{EndTime}\",\"Format\":\"flv\",\"CycleDuration\":21600}] "interval": 5 }`
     */
    "RecordConfig"?: string;
    /**
     * 延时播放。时间单位：秒。
     * - **0**（默认值）：禁用延时。
     * - 大于**0**：启用延时。
     * - **空**：默认清除延播配置。
     * > 最大可支持设置300秒。
     * @example `0`
     */
    "Delay"?: number;
    /**
     * 备播视频，媒资库素材ID。若该参数置为空，默认清除备播配置。
     * @example `a2b8e671`
     */
    "UrgentMaterialId"?: string;
    /**
     * 备播直播流URL。
     * @example `rtmp://demo.aliyundoc.com`
     */
    "UrgentLiveStreamUrl"?: string;
    /**
     * 用户自定义导播台旁路输出地址对应的推流地址。
     * 若该参数为空，则默认使用阿里云自动生成的输出地址对应的推流地址。
     * > 目前sideoutputUrl只支持rtmp协议推流。
     * @example `rtmp://****​/aliyundoc.com:8000/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-53f0758162964516ac850f2ddc3f****`
     */
    "SideOutputUrl"?: string;
    /**
     * 多路转推流地址列表，可以是阿里云或第三方厂商的CDN推流地址，一个导播台最多支持添加20个RTMP转推地址。
     * > 多个地址用["rtmp://domain/app1/stream1","rtmp://domain/app2/stream2"]数组格式。
     * @example `rtmp://domain/app/stream?***`
     */
    "SideOutputUrlList"?: string;
    /**
     * 用户回调地址。若需要接收回调通知，请输入可用的接收地址，接受HTTP协议。 若该参数置为空，默认取消导播台回调通知。
     * @example `http://****​/aliyundoc.com:8000/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-53f0758162964516ac850f2ddc3f****`
     */
    "CallbackUrl"?: string;
    /**
     * 轮播生效标志。
     * - **0**：不生效。
     * - **1**：生效。
     * @example `1`
     */
    "ProgramEffect"?: number;
    /**
     * 轮播台名称，若使用轮播功能时可配置。
     * @example `program_name`
     */
    "ProgramName"?: string;
    /**
     * 是否启用Channel。
     *
     * - **0**（默认）：不启用。
     * - **1**：启用。
     * > 默认不启用，且启用后不可取消；不启用时Resource直接被布局引用，首次开启Channel需要在导播台停止的状态下进行，之前已存在的布局将被废弃，Resource需要首先设置到Channel中，新增的布局直接引用Channel，通过Channel可调整视频源播放进度和播放状态，该模式下视频源、PVW、PGM三区域若引用同一Resource，则对应画面将保持同步。
     * @example `1`
     */
    "ChannelEnable"?: number;
    /**
     * 多视角同步配置，让多个视频源同步。
     * 多视角同步分为两个模式：
     * - mode: 0（主播模式，多个视频源根据指定的模式同步。）
     * - mode: 1（会议模式，没有主播视频的概念，所有视频源相互同步。）
     * 主播模式：hostResourceId：主播模式下的主播视频源
     * 会议模式：没有hostRsoureId 字段，只提供需要提供的resourceIds 中的资源ids
     * @example `"[{\"mode\":0,\"resourceIds\":[\"5a6c1c33-8424-46f6-813c-c152220a****\",\"4e6521dc-a40a-4077-b6bf-1fb12a76****\"],\"hostResourceId\":\"3aa2b39a-fd0e-4b8c-be73-b7af31c4****\"}]"`
     */
    "SyncGroupsConfig"?: string;
    /**
     * 备播媒资库图片素材ID。
     * @example `a089175eb5f4427684fc0715159a****`
     */
    "UrgentImageId"?: string;
    /**
     * 备播图片素材URL。
     * @example `http://learn.aliyundoc.com/AppName/image.jpg`
     */
    "UrgentImageUrl"?: string;
    /**
     * 开启断流自动切换备播。
     * - **true**：开启。
     * - **false**：关闭。
     * @example `true`
     */
    "AutoSwitchUrgentOn"?: boolean;
    /**
     * 自动切备播配置。
     * `eofThres`：表示断流时间后自动切备播，单位为秒。
     * @example `{"eofThres":3}`
     */
    "AutoSwitchUrgentConfig"?: string;
}
