interface SearchEditingProjectRequest {
    "RegionId"?: string;
    "OwnerId"?: string;
    /**
    * CreationTime（创建时间）的结束时间。
    * - 为闭区间（小于等于结束时间）。
    * - 日期格式按照ISO8601标准表示，使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
    * @example `2017-01-11T12:00:00Z`
    */ "EndTime"?: string;
    /**
    * CreationTime（创建时间）的开始时间。
    * - 为开区间（大于开始时间）。
    * - 日期格式按照ISO8601标准表示，使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
    * @example `2017-01-11T12:00:00Z`
    */ "StartTime"?: string;
    /**
    * 云剪辑工程状态。多个用逗号分隔，如：Normal,Produced。默认获取所有云剪辑工程。
    * 取值范围：
    * - **Normal**（草稿）
    * - **Producing**（合成中）
    * - **Produced**（合成成功）
    * - **ProduceFailed**（合成失败）
    * @example `Normal`
    */ "Status"?: string;
    /**
    * 当前页码。默认值为**1**。
    * @example `1`
    */ "PageNo"?: number;
    /**
    * 分页大小。默认值为**10**，最大值为**100**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 结果排序方式。取值范围：
    * - **CreationTime:Desc**（默认值）：按创建时间倒序
    * - **CreationTime:Asc**
    * @example `CreationTime:Desc`
    */ "SortBy"?: string;
    /**
    * 云剪辑工程标题。
    * @example `test`
    */ "Title"?: string;
}
export { SearchEditingProjectRequest };