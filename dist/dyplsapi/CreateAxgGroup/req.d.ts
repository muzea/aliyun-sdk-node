interface CreateAxgGroupRequest {
    "RegionId"?: string;
    /**
    * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
    * @example `FC123456`
    */ "PoolKey": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * G号码组名称。如果未指定G号码组名称，将以G号码组的ID作为名称。
    * 取值范围为1~128个字符，支持中文和英文。
    * @example `测试分组`
    */ "Name"?: string;
    /**
    * G号码组的备注信息。取值范围为0~256个字符，支持中文和英文。
    * @example `测试用分组`
    */ "Remark"?: string;
    /**
    * 向新建的G分组中添加的电话号码，多个号码之间用英文逗号（,）分隔，创建时最多添加200个号码。
    * @example `15800000000,15900000000	`
    */ "Numbers"?: string;
}
export { CreateAxgGroupRequest };