interface DescribeVulListRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 语言。
    * 取值：
    * - zh：中文
    * - en：英文
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 查询标记，可以为资产内网IP、外网IP或资产名称。
    * @example `192.168.1.1`
    */ "Remark"?: string;
    /**
    * 漏洞类型，包括以下几类：
    * -  cve：Linux软件漏洞
    * -  sys：Windows系统漏洞
    * -  cms：Web-CMS漏洞
    * -  app：应用漏洞
    * -  emg：应急漏洞
    * @example `cve`
    */ "Type"?: string;
    /**
    * 服务器UUID列表，多个用英文逗号分隔。
    * @example `1587bedb-fdb4-48c4-9330-************`
    */ "Uuids"?: string;
    /**
    * 漏洞别名。
    * @example `RHSA-2019:0230-Important: polkit security update`
    */ "AliasName"?: string;
    /**
    * 漏洞修复必要性等级。多个等级用英文逗号分隔。
    * 取值：
    * - asap：高
    * - later：中
    * - nntf：低
    * @example `asap,later,nntf`
    */ "Necessity"?: string;
    /**
    * 漏洞是否处理。
    * 取值：
    * - y：已处理
    * - n：未处理
    * @example `n`
    */ "Dealed"?: string;
    /**
    * 漏洞列表分页页码。
    * 起始值：1
    * 默认值：1
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 漏洞列表分页大小。
    * 默认值：20
    * @example `20`
    */ "PageSize"?: number;
}
export { DescribeVulListRequest };