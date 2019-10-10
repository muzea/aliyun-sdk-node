interface DeleteAccessKeyRequest {
    "RegionId"?: string;
    /**
    * 指定要删除的`AccessKeyId`。
    * @example `0wNEpMMlzy7s****`
    */ "UserAccessKeyId"?: string;
    /**
    * 指定用户名。
    * @example `zhangq****`
    */ "UserName"?: string;
}
export { DeleteAccessKeyRequest };