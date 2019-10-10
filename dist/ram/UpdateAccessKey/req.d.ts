interface UpdateAccessKeyRequest {
    "RegionId"?: string;
    /**
    * 指定要更新的`AccessKeyId`。
    * @example `0wNEpMMlzy7s****`
    */ "UserAccessKeyId"?: string;
    /**
    * AccessKey的状态，取值为：`Active`或`Inactive`。
    * @example `Inactive`
    */ "Status"?: string;
    /**
    * 指定用户名。
    * @example `zhangq****`
    */ "UserName"?: string;
}
export { UpdateAccessKeyRequest };