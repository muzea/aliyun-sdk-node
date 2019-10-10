interface DescribeHighPriorityIpsRequest {
    /**
    * 地域，和UIS实例上的region保持一致。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * UIS实例ID。
    * @example `UIS-xxxsjkn8dtiej7bbb****`
    */ "UisId": string;
    /**
    * 分页查询时的页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时的每页数量。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeHighPriorityIpsRequest };