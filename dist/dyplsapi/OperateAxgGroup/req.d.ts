interface OperateAxgGroupRequest {
    "RegionId"?: string;
    /**
    * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
    * @example `FC123456`
    */ "PoolKey": string;
    /**
    * AXG中的G组ID，即GID。
    * 可以通过以下方式查看GID：
    * - 在[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)中的**号码池管理**页面筛选出**AXG隐私号**，并单击**G号码组管理**即可查看所有G号码组的GID。
    * - 如果G号码组是通过接口**CreateAxgGroup**创建的，则接口的返回参数**GroupID**就是此处的请求参数**GroupID**。
    * @example `1234`
    */ "GroupId": number;
    /**
    * 对G号码组的操作类型，包括：
    * - **addNumbers**：添加号码。
    * - **deleteNumbers**：删除号码。
    * - **overwriteNumbers**：全量替换号码。会将G号码组中原有的电话号码全部删除，并重新添加号码。
    * **说明**：
    * - 全量替换号码时，G号码组中原有的号码不能超过200个。
    * - 每次添加号码时，最多添加200个号码。
    * @example `addNumbers`
    */ "OperateType": string;
    /**
    * 向新建的G分组中添加的电话号码，多个号码之间用英文逗号（,）分隔，每次最多添加200个号码。
    * @example `15800000000,15900000000	`
    */ "Numbers": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { OperateAxgGroupRequest };