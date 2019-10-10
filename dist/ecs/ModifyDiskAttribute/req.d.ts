interface ModifyDiskAttributeRequest {
    "RegionId"?: string;
    /**
    * 待修改明细的磁盘 ID。
    * @example `d-diskid1`
    */ "DiskId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 磁盘名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    *
    * @example `FinanceJoshua`
    */ "DiskName"?: string;
    /**
    * 磁盘描述。 长度为 2~256 个英文或中文字符，不能以 http:// 和 https:// 开头。
    *
    * @example `FinanceDeptJoshua`
    */ "Description"?: string;
    /**
    * 磁盘是否随实例释放。默认值：无，无表示不改变当前的值。
    * 在下列两种情况下，将参数 DeleteWithInstance 设置成 false 时会报错。
    *
    * - 磁盘的种类（category）为本地盘（ephemeral）时。
    * - 磁盘的种类（category）为普通云盘（cloud），且不可以卸载（Portable=false）时。
    * @example `false`
    */ "DeleteWithInstance"?: boolean;
    /**
    * 删除磁盘时，是否同时删除其自动快照。默认值：无，无表示不改变当前的值。
    * @example `false`
    */ "DeleteAutoSnapshot"?: boolean;
    /**
    * 如果您已经创建了自动快照策略，是否应用于该磁盘。默认值：无，无表示不改变当前的值。
    * @example `true`
    */ "EnableAutoSnapshot"?: boolean;
}
export { ModifyDiskAttributeRequest };