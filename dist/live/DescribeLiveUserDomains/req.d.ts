interface DescribeLiveUserDomainsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 直播域名业务类型，不传查询所有。
    * 取值：**liveVideo**|**liveEdge**。
    * @example `liveVideo`
    */ "LiveDomainType"?: string;
    /**
    * 分页大小。默认值为**20**，最大值为**50**。
    * @example `100`
    */ "PageSize"?: number;
    /**
    * 当前页码。取值范围：**1~100000**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 域名模糊匹配过滤。
    * 不传值，默认查询用户所有直播域名。
    * @example `*.testdomain.com`
    */ "DomainName"?: string;
    /**
    * 域名所属区域。
    * @example `cn-beijing`
    */ "RegionName"?: string;
    /**
    * 域名查询类型。取值：
    * - **fuzzy_match（默认值）**：模糊匹配
    * - **pre_match**：前匹配
    * - **suf_match**：后匹配
    * - **full_match**：完全匹配
    * @example `fuzzy_match`
    */ "DomainSearchType"?: string;
    /**
    * 域名状态过滤。域名状态包括：
    * - **online**：运行中（表示域名服务状态正常）
    * - **offline**：已停止
    * - **configuring**：配置中
    * @example `online`
    */ "DomainStatus"?: string;
}
export { DescribeLiveUserDomainsRequest };