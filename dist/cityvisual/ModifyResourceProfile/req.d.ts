interface ModifyResourceProfileRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 资源参数集名称。
    * 长度为`[2,128]`个英文或中文字符。必须以大小字母或中文开头，不能以http:// 和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `name`
    */ "ResourceProfileName"?: string;
    "InstanceId"?: string;
    "ResourceProfileParams"?: string[];
    /**
    * 待修改的资源参数集ID。
    * @example `3`
    */ "ResourceProfileId": string;
}
export { ModifyResourceProfileRequest };