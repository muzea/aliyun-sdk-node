interface ExecuteScalingRuleRequest {
    "RegionId"?: string;
    /**
    * 伸缩规则唯一标识符。
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/cCBpdYdQuBe2cUxOdu6****`
    */ "ScalingRuleAri": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。详情请参见[如何保证幂等性](~~25965~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 执行步进伸缩规则时指定的当前阈值，取值范围：-9.999999E18~9.999999E18。
    * @example `1.0`
    */ "BreachThreshold"?: number;
    /**
    * 执行步进伸缩规则时指定的当前指标值，取值范围：-9.999999E18~9.999999E18。
    * @example `1.0`
    */ "MetricValue"?: number;
}
export { ExecuteScalingRuleRequest };