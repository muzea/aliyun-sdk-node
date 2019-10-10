interface DescribeDeploymentSetsRequest {
    /**
    * 部署集所属地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 部署集列表的页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值：100
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 部署集ID列表。取值可以由多个部署集ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
    * @example `["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]`
    */ "DeploymentSetIds"?: string;
    /**
    * 部署集内的网络类型。
    * > 为提高兼容性，请尽量使用其他参数。
    * @example `null`
    */ "NetworkType"?: string;
    /**
    * 部署策略。取值：Availability
    * 默认值：空。
    * @example `Availability`
    */ "Strategy"?: string;
    /**
    * 部署集名称。
    * @example `FinanceJoshua`
    */ "DeploymentSetName"?: string;
    /**
    * 部署粒度。
    * > 为提高兼容性，请尽量使用其他参数。
    * @example `null`
    */ "Granularity"?: string;
    /**
    * 部署域。
    * > 为提高兼容性，请尽量使用其他参数。
    * @example `null`
    */ "Domain"?: string;
}
export { DescribeDeploymentSetsRequest };