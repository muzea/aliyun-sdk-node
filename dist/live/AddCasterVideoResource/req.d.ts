interface AddCasterVideoResourceRequest {
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
}
export { AddCasterVideoResourceRequest };