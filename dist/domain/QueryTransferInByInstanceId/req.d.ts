interface QueryTransferInByInstanceIdRequest {
    "RegionId"?: string;
    /**
    * 实例编号
    * @example `S20181T0WLI85212`
    */ "InstanceId": string;
    /**
    * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户ip
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
}
export { QueryTransferInByInstanceIdRequest };