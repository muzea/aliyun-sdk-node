interface CreatePhysicalConnectionSetupOrderRequest {
    /**
    * 物理专线所在的地域。 您可以通过调用DescribeRegions接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 接入点ID。
    * @example `ap-cn-beijing-ft-A`
    */ "AccessPointId": string;
    /**
    * 提供接入物理线路的运营商，取值：
    * - CT：中国电信
    * - CU：中国联通
    * - CM：中国移动
    * - CO：中国其他
    * - Equinix：Equinix
    * - Other：境外其他
    * @example `CT`
    */ "LineOperator": string;
    /**
    * 物理专线接入端口类型：
    * - **100Base-T**：百兆电口
    * - **1000Base-T**（默认值）：千兆电口
    * - **1000Base-LX**：千兆单模光口（10千米）
    * - **10GBase-T**：万兆电口
    * - **10GBase-LR**：万兆单模光口（10千米）
    * @example `100Base-T`
    */ "PortType"?: string;
    /**
    * 冗余物理专线的ID，该专线的状态必须为**Allocated**、**Confirmed**或**Enabled**。
    * @example `pc-bp10zsv5ntpxxxxxxxxxx`
    */ "RedundantPhysicalConnectionId"?: string;
    /**
    * 是否自动支付。
    * 取值：**true|false**
    * @example `true`
    */ "AutoPay"?: boolean;
    /**
    * 客户端Token鉴权。
    * @example `318BB676-0A2B-43A0-9AD8-F1D34E93750F`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { CreatePhysicalConnectionSetupOrderRequest };