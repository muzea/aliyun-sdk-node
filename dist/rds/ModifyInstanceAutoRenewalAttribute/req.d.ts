interface ModifyInstanceAutoRenewalAttributeRequest {
    /**
    * 地域名称的ID，例如：cn-hangzhou
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例名。
    * @example ` rm-bp1842vmucoa5w874`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 用于保证幂等性。
    * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
    */ "ClientToken"?: string;
    /**
    * 自动续费周期，当AutoRenew=”True”时，该值有效且必填。取值为1-12。表示实例到期时，自动续费1-12个月。
    * @example `True`
    */ "Duration"?: string;
    /**
    * 取值为：<br>AutoRenew=”True”设置自动续费;<br>AutoRenew=”False” 取消自动续费。
    * @example `True`
    */ "AutoRenew"?: string;
}
export { ModifyInstanceAutoRenewalAttributeRequest };