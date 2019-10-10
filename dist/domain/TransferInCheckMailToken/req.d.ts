interface TransferInCheckMailTokenRequest {
    "RegionId"?: string;
    /**
    * 邮箱中收到的Token。
    * @example `3bdbaa0e-faa2-4ad2-98f4-bcfeb0237054`
    */ "Token": string;
    /**
    * 接口返回信息语言，枚举值范围：zh 中文；en 英文。默认为en。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户ip。
    * @example `127.0.0.1`
    */ "UserClientIp"?: string;
}
export { TransferInCheckMailTokenRequest };