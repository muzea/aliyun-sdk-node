interface RenewInstanceRequest {
    "RegionId"?: string;
    /**
    * 需要续费的实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 预付费续费时长，单位：月。取值：
    * - **1~9**
    * - **12**
    * - **24**
    * - **36**
    * - **48**
    * - **60**
    * @example `12`
    */ "Period": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 续费时是否自动付费。取值：
    * * **True**：自动付费。请确保账号有足够的余额。
    * * **False**：控制台手动付费。具体操作为：登录控制台，在右上角选择**费用>进入费用中心**，在**订单管理**找到目标订单进行支付。
    * 默认值：**False**。
    * @example `True`
    */ "AutoPay"?: string;
    "BusinessInfo"?: string;
}
export { RenewInstanceRequest };