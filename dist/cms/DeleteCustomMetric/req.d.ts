interface DeleteCustomMetricRequest {
    "RegionId"?: string;
    /**
    * 监控项的名称。
    * @example `cpu`
    */ "MetricName": string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": string;
    /**
    * md5校验码， 在查询监控列表的时候会返回。
    * @example `38796C8CFFEB8F89BB2A626C7BD79FD3`
    */ "Md5"?: string;
    /**
    * 用于区分metric唯一性的参数，在查询自定义metric的时候会返回。
    * @example `5497633c-66c5-4eae-abaa-89db5adb****`
    */ "UUID"?: string;
}
export { DeleteCustomMetricRequest };