interface DescribeVodAIDataRequest {
    "RegionId"?: string;
    /**
    * 获取数据结束时间点，需大于起始时间。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
    * @example `2019-02-01T16:00:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：**YYYY-MM-DDThh:mm:ssZ**。
    * @example `2019-02-01T16:00:00Z`
    */ "StartTime": string;
    /**
    * 存储区域，默认返回所有区域。
    * 支持批量查询，多个区域用逗号（半角）分隔。取值范围：**cn-shanghai(上海)**、**cn-beijing(北京)**、**eu-central-1(德国)**、**ap-southeast-1(新加坡)**。
    * @example `cn-beijing`
    */ "Region"?: string;
    /**
    * AI类型，默认返回类型。
    * 支持批量查询，多个区域用逗号（半角）分隔。取值范围：**AIVideoCensor（智能审核）**、**AIVideoFPShot（视频DNA）**、**AIVideoTag（多模态标签）**。
    * @example `AIVideoCensor`
    */ "AIType"?: string;
}
export { DescribeVodAIDataRequest };