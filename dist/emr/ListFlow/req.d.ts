interface ListFlowRequest {
    /**
    * 区域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目 ID
    * @example `FP-3535FE0BE5224A47`
    */ "ProjectId"?: string;
    /**
    * 作业 ID
    * @example `FJ-F32FB31D82954C64`
    */ "JobId"?: string;
    /**
    * 工作流名称
    * @example `my_flow`
    */ "Name"?: string;
    /**
    * 工作流 ID
    * @example `F-A32FB31D82954C64`
    */ "Id"?: string;
    /**
    * 集群 ID
    * @example `C-F32FB31D82954C64`
    */ "ClusterId"?: string;
    /**
    * 状态：STOP_SCHEDULE(停止调度)，UNDER_SCHEDULE(调度中)
    * @example `STOP_SCHEDULE`
    */ "Status"?: string;
    /**
    * 是否调度
    * @example `true`
    */ "Periodic"?: boolean;
    /**
    * 页码
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页查询数量
    * @example `20`
    */ "PageSize"?: number;
}
export { ListFlowRequest };