interface DescribeDBInstanceAttributeRequest {
    "RegionId"?: string;
    /**
    * 实例ID。可以一次输入最多30个，以英文逗号（,）分隔。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 实例过期状态，取值：
    * * **True**：已过期；
    * * **False**：未过期。
    * @example `False`
    */ "Expired"?: string;
    "ResourceGroupId"?: string;
}
export { DescribeDBInstanceAttributeRequest };