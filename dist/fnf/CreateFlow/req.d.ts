interface CreateFlowRequest {
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
}
export { CreateFlowRequest };