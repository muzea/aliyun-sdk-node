interface CreateACLRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 访问控制名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头
    * @example `test`
    */ "Name": string;
    "OwnerId"?: number;
}
export { CreateACLRequest };