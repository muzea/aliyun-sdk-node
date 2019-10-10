interface TransferInReenterTransferAuthorizationCodeRequest {
    "RegionId"?: string;
    /**
    * 域名。
    * @example `test.com`
    */ "DomainName": string;
    /**
    * 转移密码。
    * @example `testCode`
    */ "TransferAuthorizationCode": string;
    /**
    * 接口返回信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户ip。
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
}
export { TransferInReenterTransferAuthorizationCodeRequest };