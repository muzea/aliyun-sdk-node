interface CreateUserUsageDataExportTaskRequest {
    "RegionId"?: string;
    /**
    * 获取数据起始时间点，最小数据粒度为5分钟。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-12-10T20:00:00Z`
    */ "StartTime": string;
    /**
    * 获取数据结束时间点，结束时间需大于起始时间。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-12-10T21:00:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 任务名称。
    * @example `刷新`
    */ "TaskName"?: string;
    /**
    * 导出文件的语言，支持**zh-cn**和**en-us**，分别为简体中文和英文，默认为中文**zh-cn**。
    * @example `en`
    */ "Language"?: string;
}
export { CreateUserUsageDataExportTaskRequest };