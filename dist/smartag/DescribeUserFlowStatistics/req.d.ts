interface DescribeUserFlowStatisticsRequest {
    /**
    * 智能接入网关APP实例所在的地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关APP实例ID。
    * @example `sag-mfkg*****`
    */ "SmartAGId": string;
    "UserNames": string[];
    "OwnerId"?: number;
    /**
    * 统计日期，格式yyyyMM。
    * 如果不设置，默认表示当月。
    * @example `201905`
    */ "StatisticsDate"?: string;
}
export { DescribeUserFlowStatisticsRequest };