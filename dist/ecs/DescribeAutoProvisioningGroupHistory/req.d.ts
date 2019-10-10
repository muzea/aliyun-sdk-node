interface DescribeAutoProvisioningGroupHistoryRequest {
    /**
    * 弹性供应组所在地域的ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 弹性供应组的ID。
    * @example `apg-uf6jel2bbl62wh13****`
    */ "AutoProvisioningGroupId": string;
    /**
    * @example `123456`
    */ "OwnerId"?: number;
    "PageNumber"?: number;
    "PageSize"?: number;
    /**
    * 查询调度历史的起始时间，和**EndTime**结合使用确定查询时段。
    * @example `2019-04-01T15:10:20Z`
    */ "StartTime"?: string;
    /**
    * 查询调度历史的结束时间，和**StartTime**结合使用确定查询时段。
    * @example `2019-06-20T15:10:20Z`
    */ "EndTime"?: string;
}
export { DescribeAutoProvisioningGroupHistoryRequest };