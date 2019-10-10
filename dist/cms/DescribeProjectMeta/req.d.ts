interface DescribeProjectMetaRequest {
    "RegionId"?: string;
    /**
    * 根据标签过滤，格式为`[{"name":"标签名","value":"标签值"},{"name":"标签名","value":"标签值"}]​`。
    * 支持的标签名包括product、groupFlag。
    * product 标签值为产品英文名称。
    * groupFlag含义为该产品是否支持应用分组，标签值为true或false​ 。
    * @example `[{"groupFlag":true}]`
    */ "Labels"?: string;
    /**
    * 分页参数，默认1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页大小，默认30
    * @example `30`
    */ "PageSize"?: number;
}
export { DescribeProjectMetaRequest };