interface DeleteHighPriorityIpRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 目标IP地址或域名，用逗号分隔。格式如下:
    * `[{'Destination': 'IP','AreaID':'regionID'},{'Destination': 'domain'}]`。
    * @example `[{'Destination': '221.6.4.XX','AreaID':'cn-shanghai'},{'Destination': 'www.microsoft.com'}]`
    */ "HighPriorityIp": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * UIS实例ID。
    * @example `UIS-xxxsjkn8dtiej7bbb****`
    */ "UisId": string;
}
export { DeleteHighPriorityIpRequest };