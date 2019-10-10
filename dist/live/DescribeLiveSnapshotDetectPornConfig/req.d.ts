interface DescribeLiveSnapshotDetectPornConfigRequest {
    "RegionId"?: string;
    /**
    * 用户域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * app名，如不给出表示域名下所有的。
    * @example `testApp`
    */ "AppName"?: string;
    /**
    * 分页的页码。
    * 默认值：**1**。
    * @example `1`
    */ "PageNum"?: number;
    /**
    *
    * 每页大小。默认值：**10**。
    * 取值范围：**5~30**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 排序。取值：
    * - **Asc（默认值）**：升序
    * - **Desc**：降序
    * @example `asc`
    */ "Order"?: string;
}
export { DescribeLiveSnapshotDetectPornConfigRequest };