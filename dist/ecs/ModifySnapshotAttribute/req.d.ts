interface ModifySnapshotAttributeRequest {
    "RegionId"?: string;
    /**
    * 快照ID。
    * @example `s-923FE2B**`
    */ "SnapshotId": string;
    /**
    * @example `Hide`
    */ "SourceRegionId"?: string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 为防止和自动快照的名称冲突，不能以auto开头。
    * @example `NewSnapshotName-EcsGuideTest`
    */ "SnapshotName"?: string;
    /**
    * 快照的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
    * @example `NewSnapshotDescription-EcsGuideTest`
    */ "Description"?: string;
}
export { ModifySnapshotAttributeRequest };