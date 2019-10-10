interface AddHighPriorityIpRequest {
    /**
    * 和UIS实例上的region保持一致。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 目标IP地址或域名，用逗号分隔。格式如下:`{'Destination': 'IP','AreaID':'regionID'},{'Destination': 'domain'}`。
    * > 当添加IP时，指定AreaID，访问该IP的流量都将转发到指定的地域再出公网；如果不指定地域，系统会根据探测结果选择最优路径，进行转发。探测结果可以通过DescribeHighPriorityIp进行查询。
    * @example `[{'Destination': '221.6.4.XX','AreaID':'cn-shanghai'},{'Destination': 'www.microsoft.com'}]`
    */ "HighPriorityIp": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过 64 个 ASCII 字符，具体参见如何保证幂等性。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * 需要在路由表中添加IP或域名的实例ID。
    * @example `UIS-xxxsjkn8dtiej7bbb****`
    */ "UisId": string;
}
export { AddHighPriorityIpRequest };