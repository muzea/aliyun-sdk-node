interface DescribeCasterProgramRequest {
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
}
export { DescribeCasterProgramRequest };