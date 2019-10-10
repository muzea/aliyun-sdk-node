interface ChangeDomainOfDnsProductRequest {
    "RegionId"?: string;
    /**
    * 云解析产品ID。
    * @example `i-7sb`
    */ "InstanceId": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户端IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * 目标绑定域名，如不填写，则为解绑。
    * @example `newdomain.com`
    */ "NewDomain"?: string;
    /**
    * 是否强制绑定。
    * @example `false`
    */ "Force"?: boolean;
}
export { ChangeDomainOfDnsProductRequest };