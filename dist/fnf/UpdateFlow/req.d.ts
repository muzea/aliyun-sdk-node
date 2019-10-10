interface UpdateFlowRequest {
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
}
export { UpdateFlowRequest };