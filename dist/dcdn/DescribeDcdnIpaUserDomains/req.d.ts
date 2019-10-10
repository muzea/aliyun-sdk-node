interface DescribeDcdnIpaUserDomainsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 分页大小，默认**20**，最大**50**，取值：**1**~**50**之前的任意整数。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 取得第几页，取值范围为：**1**~**100000**。
    * @example `20`
    */ "PageNumber"?: number;
    /**
    * 域名模糊匹配过滤。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 域名状态过滤。
    * @example `online`
    */ "DomainStatus"?: string;
    /**
    * 域名查询类型，默认**fuzzy_match**。
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
    * @example `ResourceGroupId`
    */ "ResourceGroupId"?: string;
    /**
    * 功能ID。例如：98表示图片鉴黄功能。
    * @example `98`
    */ "FuncId"?: string;
    /**
    * 过滤，支持**config**和**unconfig**。**config**是开通了funcid的，**unconfig**是没有开通funcid的。
    * @example `config`
    */ "FuncFilter"?: string;
}
export { DescribeDcdnIpaUserDomainsRequest };