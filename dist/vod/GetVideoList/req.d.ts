interface GetVideoListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 视频分类ID。
    * @example `7249287`
    */ "CateId"?: number;
    /**
    * 视频状态，默认获取所有视频，多个可以用逗号分隔。取值包括：**Uploading(上传中)，UploadFail(上传失败)，UploadSucc(上传完成)，Transcoding(转码中)，TranscodeFail(转码失败)，Blocked(屏蔽)，Normal(正常)**。
    * @example `Uploading,Normal`
    */ "Status"?: string;
    /**
    * 当前页码，默认值为**1**。
    * @example `1`
    */ "PageNo"?: number;
    /**
    * 列表页大小，可选。默认值为**10**，最大值为**100**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 结果排序。取值：
    * - **CreationTime:Desc（默认值）**：按创建时间倒序
    * - **CreationTime:Asc**
    * @example `CreationTime:Asc`
    */ "SortBy"?: string;
    /**
    * CreationTime（创建时间）的开始时间，为开区间(大于开始时间)。
    * 日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。例如，2017-01-11T12:00:00Z（为北京时间2017年1月11日20点0分0秒）。
    * @example `2017-01-11T12:00:00Z`
    */ "StartTime"?: string;
    /**
    * CreationTime的结束时间，为闭区间(小于等于结束时间)。
    * 日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。例如，2017-01-11T12:00:00Z（为北京时间2017年1月11日20点0分0秒）。
    * @example `2017-01-11T12:00:00Z`
    */ "EndTime"?: string;
    /**
    * 视频的存储区域。
    * @example `out-xxxx.oss-cn-shanghai.aliyuncs.com`
    */ "StorageLocation"?: string;
}
export { GetVideoListRequest };