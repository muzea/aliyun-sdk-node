interface CreateInstanceRequest {
    /**
    * 所属的地域ID。您可以调用DescribeRegions查看最新的阿里云地域列表。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 实例规格,指视频点位接入路数。
    * @example `20`
    */ "InstanceCapacity": number;
    /**
    * 实例名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
    * @example `ShangHai`
    */ "InstanceName"?: string;
    /**
    * 实例描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
    * @example `SHInstance`
    */ "Description"?: string;
    /**
    * 实例状态，取值范围：
    * * Running    运行中
    * * Stopped 已停止
    * @example `Running`
    */ "Status"?: string;
}
export { CreateInstanceRequest };