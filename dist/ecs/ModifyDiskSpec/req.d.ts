interface ModifyDiskSpecRequest {
    "RegionId"?: string;
    /**
    * ESSD云盘的ID。
    * @example `d-bp131n0q38u3a4zi*****`
    */ "DiskId": string;
    /**
    * 修改ESSD云盘的性能等级。取值范围：
    * - PL1（默认）：单盘最高随机读写IOPS 5万。
    * - PL2：单盘最高随机读写IOPS 10万。
    * - PL3：单盘最高随机读写IOPS 100万。
    * >修改后的性能等级不能低于修改前的性能等级。
    * @example `PL2`
    */ "PerformanceLevel": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
}
export { ModifyDiskSpecRequest };