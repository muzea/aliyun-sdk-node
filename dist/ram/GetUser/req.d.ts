interface GetUserRequest {
    "RegionId"?: string;
    /**
    * 指定用户名。
    * 格式：`^[a-zA-Z0-9\.@\-_]+$`。
    * @example `zhangq****`
    */ "UserName"?: string;
}
export { GetUserRequest };