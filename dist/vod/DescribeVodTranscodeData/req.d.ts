interface DescribeVodTranscodeDataRequest {
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
    * 存储名称（阿里云OSS存储Bucket名称），默认返回所有存储。支持批量查询，多个用逗号（半角）分隔。
    * @example `bucket01`
    */ "Storage"?: string;
    /**
    * 转码规格，默认返回所有转码规格。
    * 支持批量查询，多个用逗号（半角）分隔。取值范围：**Audio（音频）**、**Segmentation（转封装）**、**H264.LD**、**H264.SD**、**H264.HD**、**H264.2K**、**H264.4K**等。
    * @example `Audio`
    */ "Specification"?: string;
}
export { DescribeVodTranscodeDataRequest };