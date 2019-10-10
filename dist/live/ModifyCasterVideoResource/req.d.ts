interface ModifyCasterVideoResourceRequest {
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
}
export { ModifyCasterVideoResourceRequest };