interface QueryCallStatusRequest {
    "RegionId"?: string;
    /**
    * 绑定关系ID。
    * 可以在控制台的**号码管理** > **号码详情**中查看绑定关系ID，或者在调用BindAxb等号码绑定API时查看返回参数中的**SubsId**。
    * @example `1000000768798832`
    */ "SubsId": string;
    /**
    * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
    * @example `FC123456`
    */ "PoolKey"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 主叫号码。
    * @example `150000000`
    */ "CallNo"?: string;
}
export { QueryCallStatusRequest };