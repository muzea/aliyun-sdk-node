interface ModifyFlowLogAttributeRequest {
    /**
    * 流日志的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 流日志ID。
    * @example `flowlog-m5evbtbpt****`
    */ "FlowLogId": string;
    /**
    * 云企业网实例ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b	`
    */ "ClientToken"?: string;
    /**
    * 流日志名称。长度为2~128个字符，必须以字母或中文开头，可包含数字、点号（.）、下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
    * @example `myFlowlog`
    */ "FlowLogName"?: string;
    /**
    * 流日志描述。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `This is my Flowlog.`
    */ "Description"?: string;
}
export { ModifyFlowLogAttributeRequest };