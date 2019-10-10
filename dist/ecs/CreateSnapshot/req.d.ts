interface CreateSnapshotRequest {
    "RegionId"?: string;
    /**
    * 云盘ID。
    * @example `d-diskid1`
    */ "DiskId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 为防止和自动快照的名称冲突，不能以auto开头。
    * @example `FinanceJoshua`
    */ "SnapshotName"?: string;
    /**
    * 快照的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
    * 默认值：空。
    * @example `FinanceDepet`
    */ "Description"?: string;
    /**
    * 设置快照的保留时间，单位为天。保留时间到期后快照会被自动释放，取值范围：1~65536。
    * 默认值：空，表示快照不会被自动释放。
    * @example `30`
    */ "RetentionDays"?: number;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    "Tag"?: string[];
}
export { CreateSnapshotRequest };