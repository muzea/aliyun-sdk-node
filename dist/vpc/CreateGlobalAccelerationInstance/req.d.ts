interface CreateGlobalAccelerationInstanceRequest {
    /**
    * 全球加速实例所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 被加速的服务的所属区域。取值：
    * - **china-mainland**：中国大陆
    * - **north-america**：北美
    *
    * - **asia-pacific**：亚太
    *
    * - **europe**：欧洲
    * @example `china-mainland`
    */ "ServiceLocation": string;
    /**
    *  全球加速实例的带宽峰值，单位为Mbps。取值范围：**10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000**
    * @example `10`
    */ "Bandwidth": string;
    "OwnerId"?: number;
    /**
    * 实例带宽类型：
    * - **Shared**：共享带宽型
    * - **Exclusive**：享带宽型
    * @example `Exclusive`
    */ "BandwidthType"?: string;
    /**
    * 全球加速实例的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `GA-1`
    */ "Name"?: string;
    /**
    * 全球加速实例的描述信息。
    *  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `My GA`
    */ "Description"?: string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
}
export { CreateGlobalAccelerationInstanceRequest };