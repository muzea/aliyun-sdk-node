interface DescribePriceRequest {
    /**
    * 地域名称的ID，例如：cn-hangzhou
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 数据库类型，取值范围为：MySQL/SQLServer/PostgreSQL/PPAS。
    * @example `MySQL`
    */ "Engine": string;
    /**
    * 数据库版本号，取值如下： <ul><li>MySQL：5.5/5.6/5.7</li><li>SQLServer：2008r2/2012</li><li>PostgreSQL：9.4</li><li>PPAS：9.3</li></ul>
    * @example `5.5`
    */ "EngineVersion": string;
    /**
    * 实例规格代码。
    * @example `rds.mys2.small`
    */ "DBInstanceClass": string;
    /**
    * 自定义存储空间，单位为GB每，5GB进行递增。取值范围如下，详情请参见<a href="~~26312~~">实例规格表</a>： <ul><li>MySQL/PostgreSQL/PPAS双机高可用版为[5,2000]。</li><li>MySQL 5.7单机基础版为[20,1000]。</li><li>SQL Server 2008 R2为[10,2000]。</li><li>SQL Server 2012 单机基础版为 [20,2000]。</li></ul>
    * @example `20`
    */ "DBInstanceStorage": number;
    /**
    * 订购实例数量，取值范围是[0,30]。
    * @example `10`
    */ "Quantity": number;
    "OwnerId"?: number;
    /**
    * 用于保证幂等性。
    * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
    */ "ClientToken"?: string;
    /**
    * 商品规格，取值如下，默认是rds：<ul><li>包月：rds</li><li>按量：bards</li></ul>
    * @example `bards`
    */ "CommodityCode"?: string;
    /**
    * 付费类型，取值如下：
    * Postpaid:按量付费；
    * Prepaid：预付费。
    * @example `Prepaid`
    */ "PayType"?: string;
    /**
    * 可用区id，通过函数DescribeRegions查看可用的可用区
    * @example `cn-hangzhou-b`
    */ "ZoneId"?: string;
    /**
    * 购买时长，取值：Year [1,3]，Month [1,10]。
    * @example `1`
    */ "UsedTime"?: string;
    /**
    * 时间类型，取值如下：<ul><li>包月：Year，Month，Day</li><li>按量：Hour</li></ul>
    * @example `Year`
    */ "TimeType"?: string;
    /**
    * 无
    * @example `0`
    */ "InstanceUsedType"?: number;
    /**
    * 无
    * @example `无`
    */ "OrderType"?: string;
}
export { DescribePriceRequest };