interface CreateUsageDetailDataExportTaskRequest {
    "RegionId"?: string;
    /**
    * 获取数据起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-12-10T20:00:00Z`
    */ "StartTime": string;
    /**
    * 获取数据结束时间点。结束时间需大于起始时间。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-12-10T21:00:00Z`
    */ "EndTime": string;
    /**
    * 需要获取的用量类型：**flow**或**vas**。
    * @example `flow`
    */ "Type": string;
    "OwnerId"?: number;
    /**
    * 域名组信息。如果该信息不为空，则忽略DomainNames字段。
    * @example `xxx`
    */ "Group"?: string;
    /**
    * 如果域名组为空，则以该字段提供的域名为准导出数据。
    * 如果未填写该参数，则导出用户维度数据。
    * @example `example.com`
    */ "DomainNames"?: string;
    /**
    * 任务名称。
    * @example `刷新`
    */ "TaskName"?: string;
    /**
    * 导出文件的语言，支持**zh-cn**和**en-us**，分别为简体中文和英文，默认为中文**zh-cn**。
    * @example `en`
    */ "Language"?: string;
}
export { CreateUsageDetailDataExportTaskRequest };