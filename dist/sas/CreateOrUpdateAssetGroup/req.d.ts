interface CreateOrUpdateAssetGroupRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * UUIDS列表信息。
    * @example `[]`
    */ "Uuids"?: string;
    /**
    * 指定待修改分组名称。
    * @example `test`
    */ "GroupName"?: string;
    /**
    * 指定待修改分组ID。
    * @example `111111`
    */ "GroupId"?: number;
}
export { CreateOrUpdateAssetGroupRequest };