interface SetCasterConfigRequest {
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
}
export { SetCasterConfigRequest };