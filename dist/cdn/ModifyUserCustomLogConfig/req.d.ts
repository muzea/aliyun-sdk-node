interface ModifyUserCustomLogConfigRequest {
    "RegionId"?: string;
    /**
    * 日志配置ID。
    * @example `1232`
    */ "ConfigId": string;
    /**
    * 日志配置tag信息（不超过256个字符）。
    * @example `music`
    */ "Tag": string;
    "OwnerId"?: number;
}
export { ModifyUserCustomLogConfigRequest };