interface DescribeIPv6TranslatorsRequest {
    /**
    *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    *  IPv6转换服务实例的ID。
    * @example `ipv6trans-bp1858ysxxxxxx`
    */ "Ipv6TranslatorId"?: string;
    /**
    *  IPv6转换服务实例的名称。
    * @example `ipv6_1`
    */ "Name"?: string;
    /**
    * IPv6转换服务实例的规格。
    * @example `small`
    */ "Spec"?: string;
    /**
    *  IPv6转换服务实例的状态，取值：** init|provisioning|active|updating|upgrading|deleting|deleted**。
    * @example `active`
    */ "Status"?: string;
    /**
    *  为IPv6转换服务实例分配的IPv6地址。
    * @example `2400:3200:1600::xxx`
    */ "AllocateIpv6Addr"?: string;
    /**
    *  为IPv6转换服务实例分配的IPv4地址。
    * @example `47.99.xx.xx,47.99.xx.xx`
    */ "AllocateIpv4Addr"?: string;
    /**
    *  为IPv6转换服务实例分配的IPv4地址。
    * @example `Prepay`
    */ "PayType"?: string;
    /**
    *  列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为50，默认值为10。
    * @example `1`
    */ "PageSize"?: number;
    /**
    * IPv6转换服务实例的业务状态。
    * @example `Normal`
    */ "BusinessStatus"?: string;
}
export { DescribeIPv6TranslatorsRequest };