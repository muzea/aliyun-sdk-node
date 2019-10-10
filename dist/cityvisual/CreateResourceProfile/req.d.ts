interface CreateResourceProfileRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 实例ID。
    * @example `cityvisual-Instance`
    */ "InstanceId": string;
    "ResourceProfileParams": string[];
    /**
    * 计算资源配置名称。
    * 长度为`[2,128]`个英文或中文字符。必须以大小字母或中文开头，不能以http:// 和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `name`
    */ "ResourceProfileName": string;
}
export { CreateResourceProfileRequest };