interface DescribeFlowLogsRequest {
    /**
    * 流日志地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 流日志实例ID。
    * @example `fl-7a56mar1kfw9vj****`
    */ "FlowLogId"?: string;
    "OwnerId"?: number;
    /**
    * 流日志实例名称。
    * @example `DDE`
    */ "FlowLogName"?: string;
    /**
    * 流日志实例描述。
    * @example `流日志1`
    */ "Description"?: string;
    /**
    * 流日志实例状态：
    * - **Active**：已启动。
    * - **Inactive**：未启动。
    * @example `Active`
    */ "Status"?: string;
    /**
    * 流日志输出类型：
    * - **sls**：流日志存储在阿里云日志服务。
    * - **netflow**：流日志存储在您配置的netflow服务器。
    * - **all**：流日志同时存储在阿里云日志服务和您配置的netflow服务器。
    * @example `sls`
    */ "OutputType"?: string;
    /**
    * 指定分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 流日志实例列表的页码，起始值为**1**，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeFlowLogsRequest };