interface ModifyWhiteListRequest {
    /**
    * 地域ID，和uis实例的region保持一致。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * UIS实例ID。
    * @example `UIS-xxxvb2gnqbvgrqsd9****`
    */ "UisId": string;
    /**
    * 该实例的IP白名单，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。
    * 格式：CIDR形式。例如：10.23.12.XX/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）
    * @example `10.23.12.XX/24`
    */ "Whitelist": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * 修改方式，默认值为**Cover**。取值：
    * - **Cover**：覆盖原IP白名单，第一次创建的时候要使用Cover模式。
    * - **Append**：追加IP。
    * - **Delete**：删除IP。
    * @example `Append`
    */ "ModifyMode"?: string;
}
export { ModifyWhiteListRequest };