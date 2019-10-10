interface DescribeHighPriorityIpRequest {
    /**
    * 地域，和UIS实例上的region保持一致。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 目标IP地址或域名，用逗号分隔。格式如下:
    * `[{'Destination': 'IP','AreaID':'regionID'},{'Destination': 'domain'}]`
    * @example `[{'Destination': '221.6.4.XX','AreaID':'cn-shanghai'},{'Destination': 'www.microsoft.com'}]`
    */ "HighPriorityIp": string;
    "OwnerId"?: number;
    /**
    * 要查询的目标地址信息的实例ID。
    * @example `UIS-xxxsjkn8dtiej7bbb****`
    */ "UisId": string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    "ClientToken"?: string;
}
export { DescribeHighPriorityIpRequest };