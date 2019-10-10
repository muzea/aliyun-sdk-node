interface CreateFabricConsortiumRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * Orderer类型
    * @example `Kafka`
    */ "OrdererType": string;
    /**
    * 联盟名
    * @example `aaaaa`
    */ "ConsortiumName": string;
    /**
    * 域名
    * @example `helloworld`
    */ "Domain": string;
    /**
    * 创建通道策略
    * @example `Any`
    */ "ChannelPolicy": string;
    /**
    * 规格
    * @example `basic`
    */ "SpecName": string;
    /**
    * 位置信息
    * @example `cn-hangzhou`
    */ "Location": string;
    /**
    * 区域
    * @example `random`
    */ "ZoneId"?: string;
    /**
    * 联盟描述
    * @example `some`
    */ "ConsortiumDescription"?: string;
    /**
    * Orderer数量
    * @example `2`
    */ "OrderersCount"?: number;
    /**
    * Peer数量
    * @example `2`
    */ "PeersCount"?: number;
    "Organization"?: string[];
    /**
    * 周期单位
    * @example `month`
    */ "PaymentDurationUnit"?: string;
    /**
    * 计费周期
    * @example `2`
    */ "PaymentDuration"?: number;
}
export { CreateFabricConsortiumRequest };