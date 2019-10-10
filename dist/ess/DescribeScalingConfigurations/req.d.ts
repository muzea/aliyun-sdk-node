interface DescribeScalingConfigurationsRequest {
    /**
    * 伸缩配置所属伸缩组的地域ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩配置列表的页码。起始值：1。
    * 默认值：1 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：50。
    * 默认值：10。
    * @example `50`
    */ "PageSize"?: number;
    /**
    * 伸缩组的ID，您可以查询该伸缩组下所有的伸缩配置。
    * @example `dE9YbOdCHqaFdFZHXVdD****`
    */ "ScalingGroupId"?: string;
    /**
    * ScalingConfigurationId.N为待查询伸缩配置的ID，N的取值范围：1～10。查询结果包括生效和失效的伸缩配置，并通过返回参数LifecycleState进行标识。
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.1"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.2"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.3"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.4"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.5"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.6"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.7"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.8"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.9"?: string;
    /**
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ScalingConfigurationId.10"?: string;
    /**
    * ScalingConfigurationName.N为待查询伸缩配置的名称，N的取值范围：1～20。查询结果会忽略失效的伸缩配置名称，并且不报错。
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.1"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.2"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.3"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.4"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.5"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.6"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.7"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.8"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.9"?: string;
    /**
    * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
    */ "ScalingConfigurationName.10"?: string;
}
export { DescribeScalingConfigurationsRequest };