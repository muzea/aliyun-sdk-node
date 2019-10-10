interface ImportAppAlertRulesRequest {
    /**
    * 地域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * Pids
    * @example `xxxxxxxxx`
    */ "Pids": string;
    /**
    * 报警模板 ID
    * @example `324324234`
    */ "TemplateAlertId"?: string;
    /**
    * 报警联系人分组 ID
    * @example `1234`
    */ "ContactGroupIds"?: string;
    /**
    * 是否自动开始
    * @example `true`
    */ "IsAutoStart"?: boolean;
    "TemplageAlertConfig"?: string;
}
export { ImportAppAlertRulesRequest };