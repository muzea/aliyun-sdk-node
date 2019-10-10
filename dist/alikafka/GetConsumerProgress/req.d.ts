interface GetConsumerProgressRequest {
    /**
    * 地域 ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * Consumer Group ID。
    * @example `kafka-test`
    */ "ConsumerId": string;
    /**
    * 实例 ID。
    * @example `alikafka_pre-cn-mp919o4v****`
    */ "InstanceId": string;
}
export { GetConsumerProgressRequest };