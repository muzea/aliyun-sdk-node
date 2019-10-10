interface DescribeLiveSnapshotConfigRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 直播流所属应用名称。
    * *表示查询针对域名的配置，不传表示查询该域名下所有的配置。
    * @example `testApp`
    */ "AppName"?: string;
    /**
    *
    * 分页的页码。
    * 默认值：**1**。
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 每页大小。取值范围：**5~30**。
    * 默认值：**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 排序。取值：
    * - asc（默认值）：升序
    * - desc：降序
    * @example `asc`
    */ "Order"?: string;
}
export { DescribeLiveSnapshotConfigRequest };