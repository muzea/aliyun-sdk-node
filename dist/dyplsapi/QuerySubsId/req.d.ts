interface QuerySubsIdRequest {
    "RegionId"?: string;
    /**
    * 绑定关系中的隐私号码，即X号码。
    * @example `17000000000`
    */ "PhoneNoX": string;
    /**
    * 号码池Key。可登录号码隐私保护控制台，在号码池管理中查看号码池Key。
    * @example `FC123456`
    */ "PoolKey"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { QuerySubsIdRequest };