interface DescribeAlgoLibsRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 算法库名称。
    * @example `name`
    */ "AlgoLibName"?: string;
    /**
    * 算法库能力集，多个能力集用半角“,”隔开。
    * @example `PERSON,FACE`
    */ "CapabilityName"?: string;
    /**
    * 算法库列表的页码。起始值：1。
    * 默认值：1 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：100。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 算法库ID。
    * @example `372`
    */ "AlgoLibId"?: string;
    /**
    * 实例ID。
    * @example `351`
    */ "InstanceId": string;
}
export { DescribeAlgoLibsRequest };