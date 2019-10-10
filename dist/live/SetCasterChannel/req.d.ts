interface SetCasterChannelRequest {
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
}
export { SetCasterChannelRequest };