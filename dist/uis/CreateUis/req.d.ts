interface CreateUisRequest {
    /**
    * 实例的地域。
    * > 目前仅支持cn-hangzhou。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 接入类型，与UisProtocol有对应关系。
    * - 接入**VPN**类型，对应的UisProtocol为**SSL、SDK**。
    * - 接入**IOT**类型，对应的UisProtocol为**GRE**。
    * @example `GRE`
    */ "AccessType"?: string;
    "OwnerId"?: number;
    /**
    * UIS实例服务的区域。
    * 取值：**中国大陆(China-mainland)**​/**海外(Overseas)**​/**全球(Global)**。
    * @example `China-mainland`
    */ "ServiceRegion"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * 实例的名称。
    * 长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `test_uis_name`
    */ "Name"?: string;
    /**
    * 实例的描述信息。
    * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `uis description info`
    */ "Description"?: string;
    /**
    * 付费方式，取值：**后付费(POSTPAY)**​/**预付费(PREPAY)**。
    * @example `PREPAY`
    */ "InstanceChargeType"?: string;
    /**
    * 计费方式，取值：**连接(Connection)**​/**带宽(Bandwidth)**。
    * @example `Connection`
    */ "InternetChargeType"?: string;
    /**
    * 是否支持自动支付，默认值是**false**。
    * @example `true`
    */ "AutoPay"?: boolean;
    /**
    * 预付费时，购买的周期数。
    * @example `1`
    */ "Duration"?: number;
    /**
    * 预付费购买的周期数类型，取值：**Month**​/**Year**。
    * @example `Year`
    */ "PricingCycle"?: string;
    /**
    * 指定UIS实例的带宽，单位为M。
    * @example `10`
    */ "Bandwidth"?: number;
    /**
    * 带宽类型，取值：
    * - **BGP**
    * - **ChinaTelecom**
    * - **ChinaUnicom**
    * - **ChinaMobile**
    * - **BGP+CEN**
    * - **ChinaTelecom+CEN**
    * - **ChinaUnicom+CEN**
    * - **ChinaMobile+CEN**
    * @example `BGP`
    */ "BandwidthType"?: string;
    /**
    * 用户的连接类型，取值：**SSL**​/**SDK**​/**GRE**。
    * @example `GRE`
    */ "UisProtocol"?: string;
    /**
    * 指定每个连接的带宽。
    * @example `20`
    */ "ConnectionBandwidth"?: number;
    /**
    * 指定连接的数量。
    * @example `500`
    */ "ConnectionCount"?: number;
}
export { CreateUisRequest };