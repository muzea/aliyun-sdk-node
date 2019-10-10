interface ModifyHASwitchConfigRequest {
    /**
    * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 主备切换设置，取值：
    * * **Auto**：出现故障时自动切换主备实例；
    * * **Manual**：临时关闭自动切换。
    * 默认值：**Auto**。
    * >取值为**Manual**时，必须传入参数**ManualHATime**。
    * @example `Manual`
    */ "HAConfig"?: string;
    /**
    * 临时关闭的截止时间。最晚可设置为7天后的23:59:59。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * >仅当参数**HAConfig**取值为**Manual**时，本参数有效。
    * @example `2019-08-29T15:00:00Z`
    */ "ManualHATime"?: string;
}
export { ModifyHASwitchConfigRequest };