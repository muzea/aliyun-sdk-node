interface SubmitSnapshotJobRequest {
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
}
export { SubmitSnapshotJobRequest };