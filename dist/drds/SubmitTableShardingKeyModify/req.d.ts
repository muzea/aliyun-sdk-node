interface SubmitTableShardingKeyModifyRequest {
    "RegionId"?: string;
    "DbName": string;
    "SrcTableName": string;
    "TargetTableName": string;
    "IsShard": boolean;
    "DbShardingColumnList"?: string;
    "DbShardingFunction"?: string;
    "DbRightShiftOffset"?: number;
    "TbShardingColumnList"?: string;
    "TbShardingFunction"?: string;
    "TbRightShiftOffset"?: string;
    "TbPartitions"?: string;
    "TbComputeLength"?: string;
    "DbComputeLength"?: string;
    "DrdsInstanceId": string;
}
export { SubmitTableShardingKeyModifyRequest };