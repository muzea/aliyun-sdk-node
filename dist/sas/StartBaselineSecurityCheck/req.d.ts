interface StartBaselineSecurityCheckRequest {
    "RegionId"?: string;
    /**
    * 访问者源IP。
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 调用参数返回的内容的语言种类。支持中文（CN）和英文（EN）。
    * @example `cn`
    */ "Lang"?: string;
    "ItemIds"?: number[];
    "Assets"?: string[];
    /**
    * 任务类型。
    * @example `check`
    */ "Type"?: string;
}
export { StartBaselineSecurityCheckRequest };