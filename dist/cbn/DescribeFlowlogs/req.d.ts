interface DescribeFlowlogsRequest {
    /**
    * 流日志的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 流日志名称。
    * @example `myFlowlog`
    */ "FlowLogName"?: string;
    /**
    * 流日志ID。
    * @example `flowlog-m5evbtbpt****`
    */ "FlowLogId"?: string;
    /**
    * 流日志描述。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `This is my Flowlog.`
    */ "Description"?: string;
    /**
    * 云企业网实例ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId"?: string;
    /**
    * 存储捕获流量的Project。
    * @example `Project`
    */ "ProjectName"?: string;
    /**
    * 存储捕获流量的LogStore。
    * @example `LogStore`
    */ "LogStoreName"?: string;
    /**
    * 流日志的状态，取值：
    * - **Active**：已启动。
    * - **InActive**：未启动。
    * @example `Active`
    */ "Status"?: string;
    /**
    * 当前页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页包含的条目数。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeFlowlogsRequest };