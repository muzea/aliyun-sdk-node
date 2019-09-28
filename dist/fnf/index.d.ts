interface FNF {
    /**
    * 调用StopExecution停止一个正在执行中的流程。
    */ StopExecution(query: {
        "RegionId"?: string;
        /**
        * 需要停止的流程名称。
        * @example `flow`
        */ "FlowName": string;
        /**
        * 需要停止的执行名称，可通过ListExecuiton、StartExecution的返回值获取。
        * @example `exec`
        */ "ExecutionName": string;
        /**
        * 停止错误原因。
        * @example `for test`
        */ "Cause"?: string;
        /**
        * 停止错误代码。
        * @example `nill`
        */ "Error"?: string;
    }): Promise<{}>;
    /**
    * 调用StartExecution开始一个流程执行。
    */ StartExecution(query: {
        "RegionId"?: string;
        /**
        * 开始执行的流程名称。
        * @example `flow`
        */ "FlowName": string;
        /**
        * 自定义执行的名称，如需输入请保证该流程下唯一。
        * @example `exec`
        */ "ExecutionName"?: string;
        /**
        * 本次执行的输入信息。
        * @example `{}`
        */ "Input"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteFlow删除一个已存在的流程。
    */ DeleteFlow(query: {
        "RegionId"?: string;
        /**
        * 流程名称。
        * @example `flow`
        */ "Name": string;
    }): Promise<{}>;
    /**
    * 调用ListFlows批量查询流程信息。
    */ ListFlows(query: {
        "RegionId"?: string;
        /**
        * 流程查询开始名称。
        * @example `flow_nextxxx`
        */ "NextToken"?: string;
        /**
        * 查询数量。
        * @example `1`
        */ "Limit"?: number;
    }): Promise<{}>;
    /**
    * 调用ListExecutions获取一个流程下面的所有历史执行。
    */ ListExecutions(query: {
        "RegionId"?: string;
        /**
        * 流程名称。
        * @example `flow`
        */ "FlowName": string;
        /**
        * 执行查询开始名称，根据本接口返回获取。
        * @example `flow_xxx`
        */ "NextToken"?: string;
        /**
        * 查询数量。
        * @example `1`
        */ "Limit"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeFlow获取一个流程的相关信息。
    */ DescribeFlow(query: {
        "RegionId"?: string;
        /**
        * 流程名称。
        * @example `flow`
        */ "Name": string;
    }): Promise<{}>;
    /**
    * 调用UpdateFlow更新一个流程的内容。
    */ UpdateFlow(query: {
        "RegionId"?: string;
        /**
        * 创建的流程名称。账户下名称唯一。
        * @example `flow`
        */ "Name": string;
        /**
        * 创建的流程的定义，遵循FDL语法标准。
        * @example `version: v1.0\ntype: flow\nname: test\nsteps:\n  - type: pass\n    name: mypass`
        */ "Definition"?: string;
        /**
        * 创建流程的描述。
        * @example `test definition`
        */ "Description"?: string;
        /**
        * 创建流程的类型，取值：FDL。
        * @example `FDL`
        */ "Type"?: string;
        /**
        * 流程执行所需的资源描述符信息，用于task执行时fnf进行assume role。
        * @example `acs:ram::${accountID}:${role}`
        */ "RoleArn"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateFlow创建一个流程。
    */ CreateFlow(query: {
        "RegionId"?: string;
        /**
        * 创建的流程名称。该名称在账户下唯一。
        * @example `flow`
        */ "Name": string;
        /**
        * 创建的流程的定义，遵循 FDL 语法标准。
        * @example `version:&nbsp;v1.0<br/>type:&nbsp;flow<br/>steps:<br/>&nbsp;-&nbsp;type:&nbsp;pass<br/>&nbsp;name:&nbsp;mypass`
        */ "Definition": string;
        /**
        * 创建流程的描述。
        * @example `test flow`
        */ "Description": string;
        /**
        * 创建流程的类型，取值：FDL。
        * @example `FDL`
        */ "Type": string;
        /**
        * 可选参数，流程执行所需的资源描述符信息，用于在任务执行时 FnF 进行 assume role。
        * @example `acs:ram:${region}:${accountID}:${role}`
        */ "RoleArn"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeExecution获取一次执行的状态等信息。
    */ DescribeExecution(query: {
        "RegionId"?: string;
        /**
        * 流程名称。
        * @example `flow`
        */ "FlowName": string;
        /**
        * 执行名称。
        * @example `exec`
        */ "ExecutionName": string;
    }): Promise<{}>;
    /**
    * 调用GetExecutionHistory获取执行过程中的每个步骤详细信息。
    */ GetExecutionHistory(query: {
        "RegionId"?: string;
        /**
        * 流程名称。
        * @example `flow`
        */ "FlowName": string;
        /**
        * 执行名称。
        * @example `exec`
        */ "ExecutionName": string;
        /**
        * event查询开始名称，根据本接口返回获取。
        * @example `flow_xxx`
        */ "NextToken"?: string;
        /**
        * 查询数量。
        * @example `5`
        */ "Limit"?: number;
    }): Promise<{}>;
    /**
    * 调用ReportTaskSucceeded汇报指定的任务执行成功。
    */ ReportTaskSucceeded(query: {
        "RegionId"?: string;
        /**
        * 汇报任务指定的令牌。
        * @example `emptyString`
        */ "TaskToken": string;
        /**
        * 汇报任务指定的输出信息。
        * @example `{"key":"value"}`
        */ "Output": string;
    }): Promise<{}>;
    /**
    * 调用ReportTaskFailed汇报指定的任务执行失败。
    */ ReportTaskFailed(query: {
        "RegionId"?: string;
        /**
        * 汇报任务指定的令牌。
        * @example `emptyString`
        */ "TaskToken": string;
        /**
        * 失败错误代码。
        * @example `nill`
        */ "Error": string;
        /**
        * 失败错误原因。
        * @example `emptyString`
        */ "Cause"?: string;
    }): Promise<{}>;
}
export default FNF;
