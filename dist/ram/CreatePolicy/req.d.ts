interface CreatePolicyRequest {
    "RegionId"?: string;
    /**
    * 权限策略名称, 最多包含128个字符。
    * 格式：`^[a-zA-Z0-9\-]+$`。
    * @example `OSS-Administrator`
    */ "PolicyName"?: string;
    /**
    * 权限策略内容，最大长度2048字节。
    * @example `{"Statement":[{"Action":["oss:*"],"Effect":"Allow","Resource":["acs:oss:*:*:*"]}],"Version":"1"}`
    */ "PolicyDocument"?: string;
    /**
    * 描述，最大长度1024字字符。
    * @example `OSS管理员权限`
    */ "Description"?: string;
}
export { CreatePolicyRequest };