interface ListPoliciesRequest {
    "RegionId"?: string;
    /**
    * 指定`Policy`的类型, 取值`System`或`Custom`，如果没有指定则列出所有权限策略。
    * @example `System`
    */ "PolicyType"?: string;
    /**
    * 当请求的返回结果被截断时，可以使用`Marker`获取从当前截断位置之后的内容。
    * @example `EXAMPLE`
    */ "Marker"?: string;
    /**
    * 指定返回结果的条数，当返回结果达到`MaxItems`限制被截断时，返回参数`IsTruncated`将等于`true`。
    * 取值范围：1 ~ 1000，默认值：100。
    * @example `100`
    */ "MaxItems"?: number;
}
export { ListPoliciesRequest };