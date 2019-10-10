interface CreatePhysicalConnectionRequest {
    /**
    *  物理专线所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  物理专线所在的接入点。 您可以通过调用[DescribeAccessPoints](~~36062~~)接口获取地域ID。
    * @example `AccessPointId=ap-cn-beijing-ft-A`
    */ "AccessPointId": string;
    /**
    * 提供接入物理线路的运营商，取值：
    *
    * - CT：中国电信
    * - CU：中国联通
    * - CM：中国移动
    * - CO：中国其他
    * - Equinix：Equinix
    * - Other：境外其他
    * @example `CT`
    */ "LineOperator": string;
    /**
    *  本地数据中心的地理位置。
    * @example `浙江省---vfjdbg_21e`
    */ "PeerLocation": string;
    /**
    *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `dgfdg12344ff`
    */ "ClientToken"?: string;
    /**
    * 专线类型，默认值：**VPC**。
    * @example `VPC`
    */ "Type"?: string;
    /**
    * 带宽包的带宽。取值范围：5-5000，单位为Mbps。
    * @example `10`
    */ "bandwidth"?: number;
    /**
    * 物理专线接入端口类型，取值：
    *
    * - 100Base-T：百兆电口
    * - 1000Base-T（默认值）：千兆电口
    * - 1000Base-LX：千兆单模光口（10千米）
    * - 10GBase-T：万兆电口
    * - 10GBase-LR：万兆单模光口（10千米）
    *
    *
    * @example `1000Base-T`
    */ "PortType"?: string;
    /**
    * 冗余物理专线的ID，该专线的状态必须为Allocated、Confirmed或Enabled。
    * @example `pc-119mfjzm7`
    */ "RedundantPhysicalConnectionId"?: string;
    /**
    *  物理专线的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
    * @example `物理专线的描述信息`
    */ "Description"?: string;
    /**
    *  物理专线的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `test`
    */ "Name"?: string;
    /**
    *   运营商的为物理专线提供的电路编码。
    * @example `longtel001`
    */ "CircuitCode"?: string;
    "OwnerId"?: number;
}
export { CreatePhysicalConnectionRequest };