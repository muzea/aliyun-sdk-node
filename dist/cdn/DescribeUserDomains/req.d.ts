interface DescribeUserDomainsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 分页大小。默认值：**20**；最大值：**50**。取值：**1**~**50**之间的任意整数。
    * @example `5`
    */ "PageSize"?: number;
    /**
    * 取得第几页，取值范围：**1**~**100000**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 域名模糊匹配过滤。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 域名状态过滤。
    * @example `configure_failed`
    */ "DomainStatus"?: string;
    /**
    * 域名查询类型。
    * - **fuzzy_match**：模糊匹配。
    * - **pre_match**：前匹配。
    * - **suf_match**：后匹配。
    * - **full_match**：完全匹配。
    * 默认：**fuzzy_match**。
    * @example `fuzzy_match`
    */ "DomainSearchType"?: string;
    /**
    * CDN业务类型，多个用逗号（,）隔开。
    * @example `download，web，video，video，video`
    */ "CdnType"?: string;
    /**
    * 检查domain是否展出。
    * @example `false`
    */ "CheckDomainShow"?: boolean;
    /**
    * 资源组ID。
    * @example `abcd1234abcd1234`
    */ "ResourceGroupId"?: string;
    "ChangeStartTime"?: string;
    "ChangeEndTime"?: string;
    /**
    * funcid，如图片鉴黄功能98。
    * @example `98`
    */ "FuncId"?: string;
    /**
    * 过滤，支持**config**和**unconfig**。
    * - **config**：开通了funcid。
    * - **unconfig**：未开通funcid。
    * @example `config`
    */ "FuncFilter"?: string;
    "Tag"?: string[];
}
export { DescribeUserDomainsRequest };