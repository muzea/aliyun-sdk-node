interface DescribeDcdnUserDomainsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 分页大小。默认**20**，最大**50**，取值：**1**~**50**之前的任意整数。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 页数。取值范围：**1**~**100000**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 域名模糊匹配过滤。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 域名状态过滤。
    * @example `运行中`
    */ "DomainStatus"?: string;
    /**
    * 域名查询类型。默认值：**fuzzy_match**。取值范围：
    * - **fuzzy_match**：模糊匹配。
    * - **pre_match**：前匹配。
    * - **suf_match**：后匹配。
    * - **full_match**：完全匹配。
    * @example `fuzzy_match`
    */ "DomainSearchType"?: string;
    /**
    * 检查domain是否展出。
    * @example `false`
    */ "CheckDomainShow"?: boolean;
    /**
    * 资源组ID。
    * @example `123`
    */ "ResourceGroupId"?: string;
    /**
    * 功能ID。
    * @example `图片鉴黄`
    */ "FuncId"?: string;
    /**
    * 过滤。支持**config**（已开通**funcid**）和**unconfig**（未开通**funcid**）。
    * @example `config`
    */ "FuncFilter"?: string;
    "ChangeStartTime"?: string;
    "ChangeEndTime"?: string;
}
export { DescribeDcdnUserDomainsRequest };