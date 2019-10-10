interface QueryRecordFileDownloadUrlRequest {
    "RegionId"?: string;
    /**
    * 呼叫记录ID，用于标识一条通话记录。
    * 请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**呼叫记录查询**中查看**呼叫记录ID**。
    * @example `abcedf1234`
    */ "CallId": string;
    /**
    * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
    * @example `FC123456`
    */ "PoolKey"?: string;
    /**
    * 呼叫记录中的呼叫发起时间。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**呼叫记录查询**中查看**呼叫发起时间**，或者在话单回执消息中查看call_time字段。
    * @example `2019-03-05 12:00:00	`
    */ "CallTime"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 产品类型。
    * > 适用于原阿里大于客户，阿里云用户可忽略。
    * @example `AXB_170`
    */ "ProductType"?: string;
}
export { QueryRecordFileDownloadUrlRequest };