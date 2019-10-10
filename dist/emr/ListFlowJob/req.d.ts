interface ListFlowJobRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-257A173659F5****`
    */ "ProjectId": string;
    /**
    * 作业ID。
    * @example `FJ-BCCAE48B90CCB37B`
    */ "Id"?: string;
    /**
    * 作业名称。
    * @example `my_shell_job`
    */ "Name"?: string;
    /**
    * 作业类型。目前支持：MR、SPARK、HIVE_SQL、HIVE、PIG、SQOOP、SPARK_SQL、SPARK_STREAMING、SHELL。
    * @example `SHELL`
    */ "Type"?: string;
    /**
    * 是否为临时查询。
    * @example `false`
    */ "Adhoc"?: boolean;
    /**
    * 页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页数量。
    * @example `20`
    */ "PageSize"?: number;
}
export { ListFlowJobRequest };