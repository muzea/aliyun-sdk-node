interface CreateScanRequest {
    "RegionId"?: string;
    /**
    * 为扫描任务设置任务名称。
    * @example `单次任务`
    */ "Name": string;
    /**
    * 指定扫描任务的扫描资产的检测类型。
    * - **vuln**：漏洞类型
    * - **content**：内容风险
    * - **asset**：资产发现
    * @example `vuln`
    */ "ScanType": string;
    /**
    * 指定访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    "Targets"?: string[];
    "TargetAssetGroupIds"?: string[];
    /**
    * 扫描所有资产
    * @example `1`
    */ "ScanAll"?: number;
    /**
    * 指定扫描任务的扫描模式。
    * - **assets**：资产模式
    * - **general**：标准模式
    * - **skynet_vul_scan**：深度模式
    * @example `assets`
    */ "FlowName"?: string;
    /**
    * 漏洞扫描任务是否开启资产发现，0，1
    * @example `1`
    */ "EnableAssetDiscover"?: number;
    /**
    * 指定扫描任务的触发类型。 可选
    * - **date**：单次任务
    * - **interval**：周期任务
    * @example `date`
    */ "TriggerType"?: string;
    /**
    * 指定扫描任务的扫描周期。
    * - **day**：每天一次
    * - **week**：每周一次
    * - **month**：每月一次
    * @example `day`
    */ "Period"?: string;
    /**
    * 指定扫描任务的扫描间隔。
    * @example `5`
    */ "Interval"?: number;
    /**
    * 指定扫描任务执行的开始时间。
    * @example `111122200000`
    */ "StartDate"?: number;
    /**
    * 指定扫描任务执行的结束时间。
    * @example `212212000000`
    */ "EndDate"?: number;
    /**
    * 指定扫描任务的扫描速度。 可设置：
    * - **16**：慢速
    * - **32**：常速
    * - **64**：快速
    * @example `16`
    */ "Qps"?: number;
    /**
    * 指定扫描任务扫描开始的时间。
    * @example `00:00:00 `
    */ "RuntimeStart"?: string;
    /**
    * 指定扫描任务扫描结束的时间 。
    * @example `08:00:00`
    */ "RuntimeEnd"?: string;
    /**
    * 首页检测间隔（分钟）。
    * - **5**：间隔5分钟
    * - **30**：间隔30分钟
    * - **60**：间隔60分钟
    * @example `5`
    */ "IndexIntervalInMinute"?: number;
    /**
    * 全站检测间隔（天）。 可选：
    * - **1**：每1天一次
    * - **7**：每7天一次
    * @example `1`
    */ "SiteIntervalInDay"?: number;
    /**
    * 漏洞扫描任务是否开启登录扫描，0，1
    * @example `1`
    */ "EnableAssetLoginScan"?: number;
    "TargetAssetTags"?: string[];
    "KeyWords"?: string[];
}
export { CreateScanRequest };