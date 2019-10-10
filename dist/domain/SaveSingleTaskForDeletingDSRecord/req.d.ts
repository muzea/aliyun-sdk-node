interface SaveSingleTaskForDeletingDSRecordRequest {
    "RegionId"?: string;
    /**
    * 域名
    * @example `test.com`
    */ "DomainName": string;
    /**
    * 关键标签，用于标识DNSSEC记录，为小于65536的整数值
    * @example `1`
    */ "KeyTag": number;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户IP
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
}
export { SaveSingleTaskForDeletingDSRecordRequest };