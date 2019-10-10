interface AddCasterEpisodeRequest {
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
}
export { AddCasterEpisodeRequest };