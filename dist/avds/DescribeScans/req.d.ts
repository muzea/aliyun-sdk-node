interface DescribeScansRequest {
    "RegionId"?: string;
    /**
    * 指定访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定返回任务列表的语言环境。可选：
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
    "StatusList"?: string[];
    /**
    * 指定待查询扫描任务的触发类型。 可选
    * - **date**：单次任务
    * - **interval**：周期任务
    * @example `date`
    */ "TriggerType"?: string;
    /**
    * 指定待查询扫描任务的任务ID。
    * @example `2019031816494923023`
    */ "ScanId"?: string;
    /**
    * 指定待查询扫描任务的搜索条件（任务名称、IP、域名）。
    * @example `***.***.net`
    */ "Search"?: string;
    /**
    * 指定待查询扫描任务的扫描类型。 可选：
    * - **vuln**：漏洞类型
    * - **content**：内容风险
    * @example `vuln`
    */ "ScanType"?: string;
    /**
    * 指定待查询的扫描任务列表当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 指定待查询的扫描任务列表每页显示数据条数。
    * @example `20`
    */ "PageSize"?: number;
}
export { DescribeScansRequest };