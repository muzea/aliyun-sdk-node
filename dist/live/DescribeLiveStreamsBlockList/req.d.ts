interface DescribeLiveStreamsBlockListRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 当前页码。默认值为**1**。
    * @example `2`
    */ "PageNum"?: number;
    /**
    * 每页大小。取值范围：**1~3000**之间的任意整数，默认值为**2000**，最大值为**3000**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeLiveStreamsBlockListRequest };