interface PollTaskResultRequest {
    "RegionId"?: string;
    /**
    * 页码
    * @example `1`
    */ "PageNum": number;
    /**
    * 分页大小
    * @example `20`
    */ "PageSize": number;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
    * @example `en`
    */ "Lang"?: string;
    /**
    * 任务编号
    * @example `75addb07-28a3-450e-b5ec-test`
    */ "TaskNo"?: string;
    /**
    * 域名
    * @example `test.com`
    */ "DomainName"?: string;
    /**
    * 业务编号
    * @example `S20181T0WLI85212`
    */ "InstanceId"?: string;
    /**
    * 任务结果类型，枚举值范围：2 成功；3 失败
    * @example `2`
    */ "TaskResultStatus"?: number;
}
export { PollTaskResultRequest };