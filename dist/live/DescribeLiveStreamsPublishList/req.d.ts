interface DescribeLiveStreamsPublishListRequest {
    /**
    * 所属区域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 起始时间。
    * UTC 格式，例如：2016-06-29T19:00:00Z。
    * @example `2017-12-21T08:00:00Z`
    */ "StartTime": string;
    /**
    * 结束时间。EndTime和StartTime之间的间隔不能超过30天。
    * UTC格式，例如：2016-06-30T19:00:00Z。
    * @example `2017-12-22T08:00:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 您的域名。
    * @example `play.yourdomain.com`
    */ "DomainName": string;
    /**
    * 直播流所属应用名称。
    * <note>AppName不支持通配符（*）查询，且不支持模糊查询。</note>
    * @example `testApp`
    */ "AppName"?: string;
    /**
    * 直播流名称。
    * <note>StreamName不支持通配符（*）查询，但支持模糊查询 。</note>
    * @example `testStream`
    */ "StreamName"?: string;
    /**
    * 分页大小，取值：**1~3000**之前的任意整数。最大值为**3000**，默认值为**2000**。
    * @example `1500`
    */ "PageSize"?: number;
    /**
    * 当前页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 流类型。取值范围：
    * - **all（默认值）**：查询所有流
    * - **raw**：查询原始流
    * - **trans**：查询转码流
    * @example `all`
    */ "StreamType"?: string;
    /**
    * 指定是否模糊匹配流名称。取值：
    * - **fuzzy**：模糊匹配
    * - **strict**：精准匹配
    * @example `fuzzy`
    */ "QueryType"?: string;
    /**
    * 排序方式。取值范围：
    * - stream_name_desc
    * - stream_name_asc
    * - stream_publish_time_desc
    * - stream_publish_asc
    * @example `stream_publish_time_desc`
    */ "OrderBy"?: string;
}
export { DescribeLiveStreamsPublishListRequest };