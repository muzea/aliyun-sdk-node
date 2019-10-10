interface DescribeDVOrderResultRequest {
    "RegionId"?: string;
    /**
    * 指定证书实例。
    * @example `cas-cn-***`
    */ "InstanceId": string;
    /**
    * 指定请求的来源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定请求和接收消息的语言类型。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
}
export { DescribeDVOrderResultRequest };