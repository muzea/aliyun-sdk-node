interface CreateSnapshotRequest {
    "RegionId": string;
    /**
    * 文件系统 ID。
    * @example `Extreme-01ddddfc`
    */ "FileSystemId": string;
    /**
    * 快照的显示名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。为防止和自动快照的名称冲突，不能以 auto 开头。
    * @example `FinanceJoshua`
    */ "SnapshotName"?: string;
    /**
    * 快照的接口说明。长度为 2~256 个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
    * @example `FinanceDepet`
    */ "Description"?: string;
    /**
    * 设置快照的保留时间，单位为天。保留时间到期后快照会被自动释放。默认值：-1。
    * 取值范围：
    * - -1：永久保存
    * - 1~65536：指定保存天数
    * @example `30`
    */ "RetentionDays"?: number;
}
export { CreateSnapshotRequest };