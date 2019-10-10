interface DescribeCastersRequest {
    /**
    * 地域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `af2ace82-dc55-40b1-9fa3-688787214b1d`
    */ "CasterId"?: string;
    /**
    * 导播台名称。
    * @example `caster001`
    */ "CasterName"?: string;
    /**
    * 起始时间，UTC 格式。 例如：`2016-06-29T19:00:00Z`。
    * @example `2016-06-29T19:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * @example `2016-06-29T21:00:00Z`
    */ "EndTime"?: string;
    /**
    * 页码。
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 每页条数。
    * @example `5`
    */ "PageSize"?: number;
    /**
    * 状态。
    *
    * - **0**：空闲
    * - **1**：导播中
    * @example `0`
    */ "Status"?: number;
}
export { DescribeCastersRequest };