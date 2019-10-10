interface ModifyDBInstanceMaintainTimeRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 实例可运维时间段的开始时间，格式为<i>HH:mm</i>Z（UTC时间）。
    * @example `01:00Z`
    */ "MaintainStartTime": string;
    /**
    * 实例可运维时间段的结束时间，格式为<i>HH:mm</i>Z（UTC时间）。
    * > 开始时间至结束时间的范围须为1小时，例如**MaintainStartTime**为**01:00Z**，则**MaintainEndTime**必须为**02:00Z**。
    * @example `02:00Z`
    */ "MaintainEndTime": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
}
export { ModifyDBInstanceMaintainTimeRequest };