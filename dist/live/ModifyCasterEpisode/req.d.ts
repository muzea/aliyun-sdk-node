interface ModifyCasterEpisodeRequest {
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
}
export { ModifyCasterEpisodeRequest };