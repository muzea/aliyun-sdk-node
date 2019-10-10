interface QuerySendDetailsRequest {
    "RegionId"?: string;
    /**
    * 接收短信的手机号码。
    * 格式：
    * * 国内短信：11位手机号码，例如15900000000。
    * * 国际/港澳台消息：国际区号+号码，例如85200000000。
    * @example `15900000000`
    */ "PhoneNumber": string;
    /**
    * 短信发送日期，支持查询最近30天的记录。
    * 格式为yyyyMMdd，例如20181225。
    * @example `20181228`
    */ "SendDate": string;
    /**
    * 分页查看发送记录，指定每页显示的短信记录数量。
    * 取值范围为1~50。
    * @example `10`
    */ "PageSize": number;
    /**
    * 分页查看发送记录，指定发送记录的的当前页码。
    * @example `1`
    */ "CurrentPage": number;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 发送回执ID，即发送流水号。调用发送接口SendSms或SendBatchSms发送短信时，返回值中的BizId字段。
    * @example `134523^4351232`
    */ "BizId"?: string;
}
export { QuerySendDetailsRequest };