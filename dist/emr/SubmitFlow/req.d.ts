interface SubmitFlowRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `257A173659F59685`
    */ "ProjectId": string;
    /**
    * 工作流ID。
    * @example `F-7A39731FE7196358`
    */ "FlowId": string;
    /**
    * 配置信息 {"key":"value"} 格式，其中 cyctime 表示实际调度运行的时间（长整型时间戳）。
    * @example `{"cyctime":"1542783967503"}`
    */ "Conf"?: string;
}
export { SubmitFlowRequest };