interface DeleteSmsSignRequest {
    "RegionId"?: string;
    /**
    * 短信签名。
    * > 必须是本账号已申请的短信签名。
    * @example `阿里云`
    */ "SignName": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DeleteSmsSignRequest };