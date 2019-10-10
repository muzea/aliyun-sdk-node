interface ModifyAccountDescriptionRequest {
    "RegionId"?: string;
    /**
    * 账号名。以字母开头，由小写字母、数字、下划线组成，长度不超过16个字符。
    * @example `demoaccount`
    */ "AccountName": string;
    /**
    * 账号描述。
    * * 需以中文、英文字母开头，不能以http: //或https: //开头；
    * * 可以包含中文、英文字母、“_”、“ -”、数字；
    * * 长度为2~256个字符。
    * @example `this is a test account`
    */ "AccountDescription": string;
    "OwnerId"?: number;
    /**
    * 账号所属实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { ModifyAccountDescriptionRequest };