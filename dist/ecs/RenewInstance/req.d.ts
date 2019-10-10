interface RenewInstanceRequest {
    "RegionId"?: string;
    /**
    * 需要续费的实例ID。
    * @example `i-instance1`
    */ "InstanceId": string;
    /**
    * - PeriodUnit=Week时，Period取值：1~4
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
    * - Week
    * @example `Month`
    */ "PeriodUnit"?: string;
}
export { RenewInstanceRequest };