interface DescribeRenewalPriceRequest {
    /**
    * 地域名称ID，如“cn-hangzhou”。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 取值为Year、Month。
    * @example `Year`
    */ "TimeType": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
    */ "ClientToken"?: string;
    /**
    * 商品编码。
    * @example `rds`
    */ "CommodityCode"?: string;
    /**
    * 实例名。
    * @example `rm-bp1842vmucoa5w874`
    */ "DBInstanceId"?: string;
    /**
    * 购买时长，取值范围如下：<ul><li>Year[1,3]</li><li>Month[1,10]</li></ul>
    * @example `1`
    */ "UsedTime": number;
    /**
    * 付费类型。Postpaid：后付费实例；Prepaid：预付费实例。
    * @example `Postpaid`
    */ "PayType"?: string;
    /**
    * 当前实例规格，默认为当前实例规格。
    * @example `rds.mys2.small`
    */ "DBInstanceClass"?: string;
    /**
    * 无
    * @example `0`
    */ "Quantity"?: number;
    /**
    * 无
    * @example `无`
    */ "OrderType"?: string;
    /**
    * 无
    * @example `无`
    */ "PromotionCode"?: string;
    /**
    * 无
    * @example `无`
    */ "BusinessInfo"?: string;
}
export { DescribeRenewalPriceRequest };