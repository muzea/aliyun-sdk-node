interface DescribeAccountsRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 账号所属实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 账号名。以小写字母开头，由小写字母、数字或下划线组成，长度不超过16个字符。
    * @example `demoaccount`
    */ "AccountName"?: string;
}
export { DescribeAccountsRequest };