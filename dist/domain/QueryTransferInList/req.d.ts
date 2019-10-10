interface QueryTransferInListRequest {
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
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
    /**
    * 提交转入结束时间
    * @example `1514428524669`
    */ "SubmissionStartDate"?: number;
    /**
    * 提交转入开始时间
    * @example `1514428524669`
    */ "SubmissionEndDate"?: number;
    /**
    * 域名，前缀匹配
    * @example `test.com`
    */ "DomainName"?: string;
    /**
    * 转移状态，枚举值范围：INIT 提交转入，AUTHORIZATION 授权转入（邮箱验证），NAME_VERIFICATION 命名审核，PASSWORD_VERIFICATION 转移密码验证，PENDING 转入处理中，SUCCESS 转入成功，FAIL 转入失败
    * @example `INIT`
    */ "SimpleTransferInStatus"?: string;
}
export { QueryTransferInListRequest };