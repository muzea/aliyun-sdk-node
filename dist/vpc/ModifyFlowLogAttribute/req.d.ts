interface ModifyFlowLogAttributeRequest {
    /**
    *  流日志的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * 流日志ID。
    * @example `flowlog-m5evbtbptxxxxxxxxxxxx`
    */ "FlowLogId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 流日志名称。长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
    * @example `myFlowlog`
    */ "FlowLogName"?: string;
    /**
    * 流日志描述。长度为2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `This is my Flowlog.`
    */ "Description"?: string;
}
export { ModifyFlowLogAttributeRequest };