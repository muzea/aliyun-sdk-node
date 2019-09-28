interface DATAWORKS_PUBLIC {
    /**
    * 触发手动业务流程执行
    */ CreateManualDag(query: {
        "RegionId"?: string;
        /**
        * 手动业务流程名称
        * @example `test_flow`
        */ "FlowName": string;
        /**
        * 业务日期
        * @example `2018-12-12 00:00:00`
        */ "Bizdate": string;
        /**
        * 业务流程参数
        * @example `param_k1=param_v1 param_k2=param_v2`
        */ "DagPara"?: string;
        /**
        * 节点参数，节点ID到节点参数的map，节点有多个参数的，在节点参数值里用空格分开
        * @example `{"103180025": "test=$[yyyy-mm-dd]"}`
        */ "NodePara"?: string;
        /**
        * 项目名称，英文名
        * @example `test_project`
        */ "ProjectName": string;
    }): Promise<{}>;
    /**
    * SearchManualDagNodeInstance用于查询已触发的手动业务流程示例状态和名称等信息，包括运行中和运行完成的实例。
    */ SearchManualDagNodeInstance(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 手动业务流程运行实例ID，**createManualDag**接口返回的值。
        * @example `123434234`
        */ "DagId": number;
        /**
        * 项目名称。
        * @example `test_odps_project`
        */ "ProjectName": string;
    }): Promise<{}>;
}
export default DATAWORKS_PUBLIC;
