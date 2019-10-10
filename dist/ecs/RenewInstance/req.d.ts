interface RenewInstanceRequest {
    "RegionId"?: string;
    /**
    * 需要续费的实例ID。
    * @example `i-instance1`
    */ "InstanceId": string;
    /**
    * 包年包月续费时长。一旦指定了DedicatedHostId，则取值范围不能超过专有宿主机的订阅时长。取值范围：
    * - PeriodUnit=Week时，Period取值：1~4
    * - PeriodUnit=Month时，Period取值：1~12,  24, 36,  48, 60
    * @example `1`
    */ "Period": number;
    "SourceRegionId"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
    */ "ClientToken"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 续费时长的时间单位，即参数Period的单位。取值范围：
    * - Week
    * - Month（默认）
    * @example `Month`
    */ "PeriodUnit"?: string;
}
export { RenewInstanceRequest };