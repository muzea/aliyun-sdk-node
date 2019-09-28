interface ARMS {
    /**
    * 调用 SearchRetcodeAppByPage 分页查询前端监控任务。
    */ SearchRetcodeAppByPage(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 前端监控应用名称
        * @example `App1`
        */ "RetcodeAppName"?: string;
        /**
        * 当前查询页码
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数据行数
        * @example `5`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 使用 CreateAlertContact 创建报警联系人。
    */ CreateAlertContact(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 报警联系人姓名
        * @example `JohnDoe`
        */ "ContactName"?: string;
        /**
        * 手机号码
        * @example `1381111****`
        */ "PhoneNum"?: string;
        /**
        * 邮箱
        * @example `johndoe@example.com`
        */ "Email"?: string;
        /**
        * 钉钉机器人地址
        * @example `123456`
        */ "DingRobotWebhookUrl"?: string;
        /**
        * 是否接收系统报警通知
        * @example `true`
        */ "SystemNoc"?: boolean;
    }): Promise<{}>;
    /**
    * 调用 CreateAlertContactGroup 创建联系人分组。
    */ CreateAlertContactGroup(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 报警联系人分组名称
        * @example `TestGroup`
        */ "ContactGroupName": string;
        /**
        * 报警联系人 ID（多个联系人 ID 以空格分隔）
        * @example `1234212343`
        */ "ContactIds"?: string;
    }): Promise<{}>;
    /**
    * 调用 SearchAlertContactGroup 查询报警联系人分组。
    */ SearchAlertContactGroup(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 报警联系人分组名称
        * @example `TestGroup`
        */ "ContactGroupName"?: string;
    }): Promise<{}>;
    /**
    * 调用 ImportAppAlertRules 导入应用报警规则。
    */ ImportAppAlertRules(query: {
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
    }): Promise<{}>;
    /**
    * 调用 ListTraceApps 列出指定地域下的全部应用监控任务。
    */ ListTraceApps(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
    }): Promise<{}>;
    /**
    * 调用 SearchTraceAppByPage 分页查询应用监控任务。
    */ SearchTraceAppByPage(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 应用名称
        * @example `Demo`
        */ "TraceAppName"?: string;
        /**
        * 当前查询页码
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数据大小
        * @example `2`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 调用 ListRetcodeApps 列出指定地域下全部前端监控任务。
    */ ListRetcodeApps(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
    }): Promise<{}>;
    /**
    * 调用 SearchTraceAppByName 查询应用监控任务列表。
    */ SearchTraceAppByName(query: {
        /**
        * 地域 ID
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 应用名称
        * @example `demo`
        */ "TraceAppName"?: string;
    }): Promise<{}>;
    CreateRetcodeApp(query: {
        "RegionId": string;
        "RetcodeAppType": string;
        "RetcodeAppName": string;
    }): Promise<{}>;
    DeleteRetcodeApp(query: {
        "RegionId": string;
        "AppId": string;
    }): Promise<{}>;
    QueryDataset(query: {
        "RegionId"?: string;
        "IntervalInSec": number;
        "MinTime": number;
        "MaxTime": number;
        "DateStr"?: string;
        "IsDrillDown"?: boolean;
        "OrderByKey"?: string;
        "Limit"?: number;
        "ReduceTail"?: boolean;
        "HungryMode"?: boolean;
        "Measures"?: string[];
        "Dimensions"?: string[];
        "RequiredDims"?: string[];
        "OptionalDims"?: string[];
        "DatasetId": number;
    }): Promise<{}>;
    QueryMetric(query: {
        "RegionId"?: string;
        "EndTime": number;
        "Metric": string;
        "Measures": string[];
        "IntervalInSec"?: number;
        "OrderBy"?: string;
        "Limit"?: number;
        "Filters"?: string[];
        "Dimensions"?: string[];
        "Order"?: string;
        "StartTime": number;
    }): Promise<{}>;
    SearchAlertContact(query: {
        "RegionId": string;
        "PageSize": string;
        "CurrentPage": string;
        "ContactName"?: string;
        "Phone"?: string;
        "Email"?: string;
    }): Promise<{}>;
}
export default ARMS;
