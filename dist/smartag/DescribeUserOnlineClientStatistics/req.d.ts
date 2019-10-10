interface DescribeUserOnlineClientStatisticsRequest {
    /**
    * 智能接入网关APP实例所在的地域。
    * @example `cn-shanghai`
    */ "RegionId": string;
    "UserNames": string[];
    "OwnerId"?: number;
    /**
    * 智能接入网关APP实例ID。
    * @example `sag-sfjg*****`
    */ "SmartAGId"?: string;
}
export { DescribeUserOnlineClientStatisticsRequest };